import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
import {Indicator} from 'mint-ui';
import validatorFunction from '../../common/validatorFunction';
import axios from 'axios';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route,
            params: this.$route.params,
            isComplete: false,
            images: {
                localId: [],
                serverId: []
            },
            localData: '',
            formData: {
                openid: common.store.getOpenid(),
                name: '',
                identityId: '',
                cardFront: '',
                cardBack: '',
                cardPerson: ''
            },
            rules: {
                name: [
                    {require: true, message: '请输入姓名'}
                ],
                identityId: [
                    {require: true, message: '请输入身份证号'}
                ],
                cardFront: [
                    {require: true, message: '请上传身份证正面照片'}
                ],
                cardBack: [
                    {require: true, message: '请上传身份证反面照片'}
                ],
                cardPerson: [
                    {require: true, message: '请上传手持身份证照片'}
                ]
            }
        };
    },
    async mounted() {
        // todo 获取jssdk授权
        const url = window.location.href.split('#')[0];
        const res1 = await server.getJssdk(url);
        console.log(url);
        if (res1.data.code === 200) {
            const resData = res1.data.data;
            try {
                // debugger;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: resData.appId, // 必填，公众号的唯一标识
                    timestamp: resData.timestamp, // 必填，生成签名的时间戳
                    nonceStr: resData.noncestr, // 必填，生成签名的随机串
                    signature: resData.sign, // 必填，签名
                    jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'downloadImage'] // 必填，需要使用的JS接口列表
                });
            } catch (e) {
                console.log(e);
                MessageBox('提示', '系统错误');
            }
        }
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getIdData(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            // todo 将获取到的数据回显到页面
            if (res.data.data) {
                this.formData = res.data.data;
                // 判断全部数据是否填写完整
                const dataIsComplete = common.store.getDataIsComplete();
                if (dataIsComplete) {
                    this.isComplete = true;
                }
            }
        }

    },
    methods: {
        upload(type) {
            console.log('type', type);
            this.chooseImage(type);
            // const file = e.target.files[0];
            // /* eslint-disable no-undef */
            // const param = new FormData();
            // // 创建form对象
            // param.append('img', file, file.name);
            // console.log(file.size);
            // const fileSize = file.size / (1024 * 1024);
            // console.log(fileSize);
            // if (fileSize > 5) {
            //     MessageBox('提示', '上传图片不能超过5M');
            //     return;
            // }
            // Indicator.open({
            //     text: '图片上传中',
            //     spinnerType: 'fading-circle'
            // });
            // // 通过append向form对象添加数据
            // // param.append('chunk', '0'); // 添加form表单中其他数据
            // console.log(param.get('file')); // FormData私有类对象，访问不到，可以通过get判断值是否传进去
            // const config = {
            //     headers: {'Content-Type': 'multipart/form-data'}
            // };
            // // 添加请求头
            // axios.post('api/img', param, config)
            //     .then(response => {
            //         if (response.data.code === 200) {
            //             Indicator.close();
            //             switch (type) {
            //                 case 'front':
            //                     this.formData.cardFront = this.formatterImgUrl(response.data.data);
            //                     break;
            //                 case 'back':
            //                     this.formData.cardBack = this.formatterImgUrl(response.data.data);
            //                     break;
            //                 case 'body':
            //                     this.formData.cardPerson = this.formatterImgUrl(response.data.data);
            //                     break;
            //             }
            //         }
            //     }).catch(err => {
            //     console.log(err);
            // });
        },
        chooseImage(type) {
            const that = this;
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: res => {
                    this.images.localId = res.localIds;
                    wx.uploadImage({
                        localId: this.images.localId[0],
                        success: res => {
                            // 将微信服务器id传给后台
                            console.log(res);
                            that.media(res.serverId, type);
                        },
                        fail: res => {
                            alert(JSON.stringify(res));
                        }
                    });
                }
            });
        },
        media(serverId, type) {
            console.log('serverId', serverId);
            console.log('type', type);
            // todo 获取图片的url
            // const param = new FormData();
            // // 创建form对象
            // param.append('mediaId', serverId);
            // const config = {
            //     headers: {'Content-Type': 'multipart/form-data'}
            // };
            // const params = {
            //     mediaId: serverId
            // };
            axios.post(`api/img?img=${serverId}`)
                .then(response => {
                    if (response.data.code === 200) {
                        Indicator.close();
                        switch (type) {
                            case 'front':
                                this.formData.cardFront = this.formatterImgUrl(response.data.data);
                                break;
                            case 'back':
                                this.formData.cardBack = this.formatterImgUrl(response.data.data);
                                break;
                            case 'body':
                                this.formData.cardPerson = this.formatterImgUrl(response.data.data);
                                break;
                        }
                    }
                }).catch(err => {
                    console.log(err);
                });
        },
        main_log(value) {
            console.log(value);
        },
        formatterImgUrl(url) {
            if (url.indexOf('http') > -1) {
                return url;
            } else {
                return 'http://' + url;
            }
        },
        handleUploadImg(type) {
            // let id = '';
            // switch (type) {
            //     case 'front':
            //         id = 'uploadFrontImg';
            //         break;
            //     case 'back':
            //         id = 'uploadBackImg';
            //         break;
            //     case 'body':
            //         id = 'uploadBodyImg';
            //         break;
            // }
            if (this.isComplete) return;
            this.upload(type);
        },
        handleBack() {
            this.$router.push('/personal-data');
        },
        async handleNext() {
            // 保存数据
            const rulesResult = validatorFunction(this.formData, this.rules);
            console.log(rulesResult);
            if (rulesResult.result) {
                // 校验成功，保存信息
                const res = await server.postIdData(this.formData);
                if (res && res.data && res.data.code === 200) {
                    this.$router.push('/information-data');
                }
            } else {
                const alertMessage = [];
                for (const key in rulesResult.detail) {
                    if (!rulesResult.detail[key].isPass) {
                        alertMessage.push(rulesResult.detail[key].message);
                    }
                }
                MessageBox('提示', alertMessage[0]);
            }
        }
    }
};
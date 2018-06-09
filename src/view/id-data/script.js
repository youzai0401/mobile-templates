import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
import validatorFunction from '../../common/validatorFunction';
import axios from 'axios';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route,
            params: this.$route.params,
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
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getIdData(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            // todo 将获取到的数据回显到页面
            if (res.data.data) {
                this.formData = res.data.data;
            }
        }
    },
    methods: {
        upload(e, type) {
            const file = e.target.files[0];
            /* eslint-disable no-undef */
            const param = new FormData();
            // 创建form对象
            param.append('img', file, file.name);
            // 通过append向form对象添加数据
            // param.append('chunk', '0'); // 添加form表单中其他数据
            console.log(param.get('file')); // FormData私有类对象，访问不到，可以通过get判断值是否传进去
            const config = {
                headers: {'Content-Type': 'multipart/form-data'}
            };
            // 添加请求头
            axios.post('api/img', param, config)
                .then(response => {
                    if (response.data.code === 200) {
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
            let id = '';
            switch (type) {
                case 'front':
                    id = 'uploadFrontImg';
                    break;
                case 'back':
                    id = 'uploadBackImg';
                    break;
                case 'body':
                    id = 'uploadBodyImg';
                    break;
            }
            const fileElem = document.getElementById(id);
            if (fileElem) {
                fileElem.click();
            }
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
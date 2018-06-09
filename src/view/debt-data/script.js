import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
import common from '../../common/common';

// import validatorFunction from '../../common/validatorFunction';


export default {
    data() {
        return {
            path: this.$route,
            openid: common.store.getOpenid(),
            formDataOne: [{
                openid: common.store.getOpenid(),
                name: '',
                value: '',
                useValue: '',
                type: 1
            }],
            formDataTwo: [{
                openid: common.store.getOpenid(),
                name: '',
                value: '',
                useValue: '',
                type: 2
            }]
        };
    },
    async mounted() {
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getDebtData(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            // todo 将获取到的数据恢复到页面上
            const resData = res.data.data;
            if (resData && resData.length !== 0) {
                this.formDataOne = [];
                this.formDataTwo = [];
                for (let i = 0; i < resData.length; i++) {
                    if (resData[i].type === 1) {
                        this.formDataOne.push(resData[i]);
                    } else if (resData[i].type === 2) {
                        this.formDataTwo.push(resData[i]);
                    }
                }
                if (this.formDataOne.length === 0) {
                    this.formDataOne.push({
                        openid: this.openid,
                        name: '',
                        value: '',
                        useValue: '',
                        type: 1
                    });
                }
                if (this.formDataTwo.length === 0) {
                    this.formDataTwo.push({
                        openid: this.openid,
                        name: '',
                        value: '',
                        useValue: '',
                        type: 2
                    });
                }
            }
        }
    },
    methods: {
        handleBack() {
            this.$router.push('/contacts-data');
        },
        async handleNext() {
            // 保存数据
            // 校验成功，保存信息
            // todo 将数据拼接放到data上
            let saveData = [];
            saveData = saveData.concat(this.formDataOne, this.formDataTwo);
            const res = await server.postDebtData(saveData).catch(() => {
                MessageBox('提示', '系统错误');
            });
            if (res && res.data && res.data.code === 200) {
                this.$router.push('/personal-data');
            }
        },
        addFormDataOne() {
            this.formDataOne.push({
                openid: this.openid,
                name: '',
                value: '',
                useValue: '',
                type: 1
            });
        },
        deleteFormDataOne(index) {
            this.formDataOne.splice(index, 1);
        },
        addFormDataTwo() {
            this.formDataTwo.push({
                openid: this.openid,
                name: '',
                value: '',
                useValue: '',
                type: 2
            });
        },
        deleteFormDataTwo(index) {
            this.formDataTwo.splice(index, 1);
        }
    }
};

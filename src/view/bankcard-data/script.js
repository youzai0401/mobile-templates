import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
import validatorFunction from '../../common/validatorFunction';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route,
            isComplete: false,
            formData: {
                openid: common.store.getOpenid(),
                name: '',
                identityId: '',
                bankAddr: '',
                account: '',
                updateTime: ''
            },
            rules: {
                name: [
                    {require: true, message: '持卡人姓名不能为空'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                identityId: [
                    {require: true, message: '持卡人身份证号不能为空'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                bankAddr: [
                    {require: true, message: '开户银行和地址不能为空'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                account: [
                    {require: true, message: '收款账号不能为空'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ]
            },
            rulesState: {
                name: '',
                identityId: '',
                bankAddr: '',
                account: ''
            }
        };
    },
    async mounted() {
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getBankcardData(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            if (res.data.data) {
                this.formData = res.data.data;
                // 判断全部数据是否填写完整
                const dataIsComplete = common.store.getDataIsComplete();
                if (dataIsComplete) {
                    this.isComplete = true;
                } else {
                    this.isComplete = common.getDataIsComplete();
                }
            }
        }
    },
    methods: {
        handleBack() {
            this.$router.push('/information-data');
        },
        async handleNext() {
            // 保存数据
            const rulesResult = validatorFunction(this.formData, this.rules);
            console.log(rulesResult);
            if (rulesResult.result) {
                // 校验成功，保存信息
                const res = await server.postBankcardData(this.formData).catch(() => {
                    MessageBox('提示', '系统错误');
                });
                if (res && res.data && res.data.code === 200) {
                    this.$router.push('/contacts-data');
                }
            } else {
                const alertMessage = [];
                for (const key in rulesResult.detail) {
                    this.rulesState[key] = rulesResult.detail[key].isPass ? 'success' : 'error';
                    if (!rulesResult.detail[key].isPass) {
                        alertMessage.push(rulesResult.detail[key].message);
                    }
                }
                MessageBox('提示', alertMessage[0]);
            }
        }
    }
};

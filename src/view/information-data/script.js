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
                phoneNum: '',
                phoneServicePassword: '',
                permanentAddr: '',
                houseType: '',
                houseAddr: '',
                maritalStatus: 1,
                houseOwner: '',
                companyName: '',
                sector: '',
                position: '',
                companyAddr: '',
                companyPhone: '',
                jobAge: '',
                incomeMon: '',
                introducerName: '',
                introducerPhone: '',
                remark: ''
            },
            // TODO 住宅状况？
            rules: {
                phoneNum: [
                    {require: true, message: '请输入借款人手机号'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                phoneServicePassword: [
                    {require: true, message: '请输入手机号服务密码'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                permanentAddr: [
                    {require: true, message: '请输入户籍地址'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                houseType: [
                    {require: true, message: '请输入住宅状况'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                houseAddr: [
                    {require: true, message: '请输入现住地址'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                maritalStatus: [
                    {require: true, message: '请选择婚姻状况'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                houseOwner: [
                    {require: true, message: '请输入户主名称'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ],
                companyName: [
                    {require: true, message: '请输入现任公司名称'},
                    {maxLength: 500, message: '输入长度不能超出500'}
                ]
            }
        };
    },
    async mounted() {
        common.returnPageTop();
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getInformationData(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            if (res.data.data) {
                this.formData = res.data.data;
                // 判断全部数据是否填写完整
                const dataIsComplete = common.store.getDataIsComplete();
                if (dataIsComplete === 'true') {
                    this.isComplete = true;
                } else if (dataIsComplete === 'false') {
                    this.isComplete = false;
                } else {
                    this.isComplete = common.getDataIsComplete();
                }
            }
        }
    },
    methods: {
        handleBack() {
            this.$router.push('/id-data');
        },
        async handleNext() {
            // 保存数据
            const rulesResult = validatorFunction(this.formData, this.rules);
            console.log(rulesResult);
            if (rulesResult.result) {
                // 校验成功，保存信息
                this.formData.maritalStatus = Number(this.formData.maritalStatus);
                this.formData.incomeMon = this.formData.incomeMon ? Number(this.formData.incomeMon) : '';
                const res = await server.postInformationData(this.formData);
                if (res && res.data && res.data.code === 200) {
                    this.$router.push('/bankCard-data');
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

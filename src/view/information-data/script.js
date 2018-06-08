import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
import validatorFunction from '../../common/validatorFunction';

export default {
    data() {
        return {
            path: this.$route,
            formData: {
                phoneNum: '',
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
                remark: '',
                updateTime: ''
            },
            // TODO 住宅状况？
            rules: {
                phoneNum: [
                    {require: true, message: '请输入借款手机号'}
                ],
                permanentAddr: [
                    {require: true, message: '请输入户籍地址'}
                ],
                houseType: [
                    {require: true, message: '请输入住宅状况'}
                ],
                houseAddr: [
                    {require: true, message: '请输入现住地址'}
                ],
                maritalStatus: [
                    {require: true, message: '请选择婚姻状况'}
                ],
                houseOwner: [
                    {require: true, message: '请输入户主名称'}
                ],
                companyName: [
                    {require: true, message: '请输入现任公司名称'}
                ]
            }
        };
    },
    async mounted() {
        // 获取openid
        const openid = '';
        const res = await server.getInformationData(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            this.formData = res.data.data;
        } else {
            MessageBox('提示', '系统错误');
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

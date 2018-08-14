import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
// import validatorFunction from '../../common/validatorFunction';
import common from '../../common/common';


export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            phone: '',
            introduction: '',
            selectId: '',
            selectName: '',
            currentRate: 1,
            rangeValue: 3,
            isAgreement: false,
            dataIsComplete: false,
            alertLoanAgreement: false,
            timeArr: [],
            formData: {
                openid: common.store.getOpenid(),
                purpose: '',
                periodId: 0,
                periodName: '',
                value: 1000
            }
        };
    },
    computed: {
        rangeValue() {
            return Math.ceil((this.formData.value / 30000) * 100);
        }
    },
    watch: {
        rangeValue() {
            if (this.rangeValue === 3) {
                this.formData.value = 1000;
            } else {
                this.formData.value = this.rangeValue * 300;
            }
        },
        selectId() {
            this.formData.periodId = this.selectId;
            this.formData.periodName = this.selectName;
        }
    },
    async mounted() {
        // 获取code参数
        // 获取openid
        const openid = common.store.getOpenid();
        // 获取基础数据
        const res2 = await server.getPeriod().catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res2 && res2.data && res2.data.code === 200) {
            const res2Data = res2.data.data;
            if (res2Data.content) {
                this.timeArr = res2Data.content;
                // 默认选中第一个
                if (res2Data.content.length !== 0) {
                    this.selectId = this.timeArr[0].id;
                    this.selectName = this.timeArr[0].name;
                    this.currentRate = this.timeArr[0].rate;
                }
                // todo 将获取到的基础数据放入页面中
                // this.formData = res.data.data;
            }
        }
        // 获取所个人所填信息是否完整
        const res3 = await server.getPlan(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res3 && res3.data && res3.data.code === 200) {
            // const data = res3.data.data;
            // TODO 遍历获取是否完善了信息
            const data = res3.data.data;
            if (data.info === 1 && data.data === 1 && data.link === 1 && data.account === 1) {
                this.dataIsComplete = true;
            }
        }
    },
    methods: {
        async handleLoanSuccess() {
            // todo 对传递的数据进行处理
            // todo 如果没有同意不允许申请
            if (!this.isAgreement) {
                MessageBox({
                    title: '提示',
                    message: '请仔细阅读平台服务协议，并确认勾选'
                });
                return;
            }
            if (!this.formData.purpose) {
                MessageBox({
                    title: '提示',
                    message: '请填写借款用途'
                });
                return;
            }
            const res = await server.postApplyLoan(this.formData).catch(() => {
                MessageBox('提示', '系统错误');
            });
            if (res && res.data && res.data.code === 200) {
                // const data = res.data.data;
                // TODO 若提交成功，状态变为审核
                // 跳转到申请贷款列表页面
                this.$router.push('/loan-list');
            }
        },
        handleLoanFailed() {
            this.$router.push('/personal-data');
        },
        handleDec() {
            console.log(0);
            if (this.formData.value > 1000) {
                // this.rangeValue = this.rangeValue - 1;
                this.formData.value = this.formData.value - 100;
            }
        },
        handleAdd() {
            console.log(1);
            if (this.formData.value < 30000) {
                // this.rangeValue = this.rangeValue + 1;
                this.formData.value = this.formData.value + 100;
            }
        },
        handleSelectTime(id, name, rate) {
            this.selectId = id;
            this.selectName = name;
            this.currentRate = rate;
        },
        handleAgreement() {
            this.isAgreement = !this.isAgreement;
        },
        handleAgreementFile() {
            this.alertLoanAgreement = true;
        },
        handleAgreementFileBack() {
            this.alertLoanAgreement = false;
        }
    }
};

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
            rangeValue: 10,
            selectValue: '',
            isAgreement: false,
            dataIsComplete: false,
            timeArr: [{
                time: '10周',
                value: 10
            }, {
                time: '20周',
                value: 20
            }],
            formData: {
                openid: common.store.getOpenid(),
                purpose: '',
                periodId: 0,
                periodName: '',
                value: 1000
            }
        };
    },
    async mounted() {
        // 获取openid
        let openid = common.store.getOpenid();
        if (!openid) {
            // 获取code
            const code = 'admin123';
            const res1 = await server.getOpenid(code).catch(() => {
                MessageBox('提示', '系统错误');
            });
            if (res1 && res1.data && res1.data.code === 200) {
                // 保存openid
                openid = res1.data.data.openid;
                common.store.setOpenid(openid);
            }
        }
        // 获取基础数据
        const res2 = await server.getPeriod().catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res2 && res2.data && res2.data.code === 200) {
            const res2Data = res2.data.data;
            if (res2Data) {
                // todo 将获取到的基础数据放入页面中
                // this.formData = res.data.data;
            }
        }
        // 获取所申请信息
        const res4 = await server.getApplyLoan(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res4 && res4.data && res4.data.code === 200) {
            const res4Data = res4.data.data;
            if (res4Data) {
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
            }
            const res = await server.postApplyLoan(this.formData).catch(() => {
                MessageBox('提示', '系统错误');
            });
            if (res && res.data && res.data.code === 200) {
                // const data = res.data.data;
                // TODO 若提交成功，状态变为审核
            }
        },
        handleLoanFailed() {
            this.$router.push('/personal-data');
        },
        handleDec() {
            console.log(0);
            if (this.rangeValue > 10) {
                this.rangeValue = this.rangeValue - 1;
            }
        },
        handleAdd() {
            console.log(1);
            if (this.rangeValue < 100) {
                this.rangeValue = this.rangeValue + 1;
            }
        },
        handleSelectTime(value) {
            this.selectValue = value;
        },
        handleAgreement() {
            this.isAgreement = !this.isAgreement;
        },
        handleAgreementFile() {
            // ewq
            MessageBox({
                title: '提示',
                message: '这里是平台服务协议'
            });
        }
    }
};

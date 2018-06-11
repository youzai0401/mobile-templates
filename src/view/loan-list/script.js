import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
import common from '../../common/common';

// import validatorFunction from '../../common/validatorFunction';


export default {
    data() {
        return {
            path: this.$route,
            openid: common.store.getOpenid(),
            loanList: []
        };
    },
    async mounted() {
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getApplyLoan(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            // todo 将获取到的数据恢复到页面上
            this.loanList = res.data.data.content;
        }
    },
    methods: {
        handleBack() {
            this.$router.push('/personal-data');
        },
        formatterStatus(type) {
            let typeString = '';
            switch (type) {
                case 1:
                    typeString = '拒绝';
                    break;
                case 2:
                    typeString = '待审批';
                    break;
                case 3:
                    typeString = '审批通过';
                    break;
                default:
                    typeString = '未知';
                    break;
            }
            return typeString;
        }
    }
};

import server from '../../api/util/index';
import {MessageBox} from 'mint-ui';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route,
            dataIsComplete: false,
            linkArr: [
                {
                    icon: '#icon-shenfen-',
                    title: '身份信息',
                    label: '让我们了解您的基本情况',
                    href: '/#/id-data',
                    showFlag: true,
                    showType: 3
                },
                {
                    icon: '#icon-ziliao',
                    title: '资料信息',
                    label: '让我们了解您的资料信息',
                    href: '/#/information-data',
                    showFlag: true,
                    showType: 3
                },
                {
                    icon: '#icon-yinhangqia2',
                    title: '收款银行卡',
                    label: '您的收款银行卡',
                    href: '/#/bankCard-data',
                    showFlag: true,
                    showType: 3
                },
                {
                    icon: '#icon-lianxiren',
                    title: '联系人信息',
                    label: '让我们了解您的联系人信息',
                    href: '/#/contacts-data',
                    showFlag: true,
                    showType: 3
                },
                {
                    icon: '#icon-yinhangqia',
                    title: '负债信息',
                    label: '让我们了解您的负债信息',
                    href: '/#/debt-data',
                    showFlag: false
                }
            ]
        };
    },
    async mounted() {
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getPlan(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            const data = res.data.data;
            this.linkArr[0].showType = data.info === 1 ? 1 : 0;
            this.linkArr[1].showType = data.data === 1 ? 1 : 0;
            this.linkArr[2].showType = data.debt === 1 ? 1 : 0;
            this.linkArr[3].showType = data.link === 1 ? 1 : 0;
            this.linkArr[4].showType = data.account === 1 ? 1 : 0;
            if (data.info === 1 && data.data === 1 && data.link === 1 && data.account === 1) {
                this.dataIsComplete = true;
            }
        }
    },
    methods: {
        // handleLogout() {
        //     alert(123);
        //     common.store.clear();
        //     this.$router.push('/login');
        // }
        handleLoan() {
            this.$router.push('/');
        }
    }
};

import {fetch} from '../../common/request';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route,
            linkArr: [
                {
                    icon: '#icon-shenfen-',
                    title: '身份信息',
                    label: '让我们了解您的基本情况',
                    href: '/#/id-data'
                },
                {
                    icon: '#icon-ziliao',
                    title: '资料信息',
                    label: '让我们了解您的资料信息',
                    href: '/#/information-data'
                },
                {
                    icon: '#icon-yinhangqia2',
                    title: '收款银行卡',
                    label: '您的收款银行卡',
                    href: '/#/bankCard-data'
                },
                {
                    icon: '#icon-lianxiren',
                    title: '联系人信息',
                    label: '让我们了解您的联系人信息',
                    href: '/#/contacts-data'
                },
                {
                    icon: '#icon-yinhangqia',
                    title: '负债信息',
                    label: '让我们了解您的负债信息',
                    href: '/#/debt-data'
                }
            ]
        };
    },
    mounted() {},
    methods: {
        handleLogout() {
            alert(123);
            common.store.clear();
            this.$router.push('/login');
        }
    }
};

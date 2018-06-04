const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/bankCard-data',
        name: 'bankCard-data',
        component: data,
        meta: {
            pageTitle: '收款银行卡'
        }
    }];



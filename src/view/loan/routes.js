const loan = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/loan',
        name: 'loan',
        component: loan,
        meta: {
            pageTitle: '我的借贷'
        }
    }];


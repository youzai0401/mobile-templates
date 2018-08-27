const loan = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/',
        name: 'loan',
        component: loan,
        meta: {
            pageTitle: '申请贷款'
        }
    }];



const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/loan-list',
        name: 'loan-list',
        component: data,
        meta: {
            pageTitle: '借贷列表'
        }
    }];



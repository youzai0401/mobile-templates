const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/debt-data',
        name: 'debt-data',
        component: data,
        meta: {
            pageTitle: '负债信息'
        }
    }];



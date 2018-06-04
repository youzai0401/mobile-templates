const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/id-data',
        name: 'id-data',
        component: data,
        meta: {
            pageTitle: '身份信息'
        }
    }];



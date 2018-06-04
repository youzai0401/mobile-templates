const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/information-data',
        name: 'information-data',
        component: data,
        meta: {
            pageTitle: '资料信息'
        }
    }];



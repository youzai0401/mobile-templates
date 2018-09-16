const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/information-data',
        name: 'information-data',
        component: data,
        meta: {
            pageTitle: '借款人信息'
        }
    }];



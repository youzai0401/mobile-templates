const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/personal-data',
        name: 'personal-data',
        component: data,
        meta: {
            pageTitle: '我的资料'
        }
    }];



const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/contacts-data',
        name: 'contacts-data',
        component: data,
        meta: {
            pageTitle: '联系人信息'
        }
    }];



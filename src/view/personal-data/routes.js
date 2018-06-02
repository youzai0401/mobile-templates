const data = resolve => require(['./index.vue'], resolve);

export default [
    {
        path: '/personal-data',
        name: 'personal-data',
        component: data
    }];



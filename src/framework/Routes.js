import childrenRoutes from '../allRoutes.js';

export default [
    {
        path: '/',
        name: 'login',
        meta: {
            pageTitle: ''
        },
        component: resolve => require(['./login/index.vue'], resolve)
    }, {
        path: '/home',
        name: 'home',
        meta: {
            pageTitle: '我的借贷'
        },
        component: resolve => require(['./Home/index.vue'], resolve),
        children: childrenRoutes
    }
];

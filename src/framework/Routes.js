import childrenRoutes from '../allRoutes.js';

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            pageTitle: '登录'
        },
        component: resolve => require(['./login/index.vue'], resolve)
    }, {
        path: '/',
        name: 'home',
        meta: {
            pageTitle: '我的借贷'
        },
        component: resolve => require(['./Home/index.vue'], resolve),
        children: childrenRoutes
    }
];

import childrenRoutes from '../allRoutes.js';

export default [
    {
        path: '/',
        name: 'loan',
        component: resolve => require(['./loan/index.vue'], resolve)
    }, {
        path: '/login',
        name: 'login',
        component: resolve => require(['./login/index.vue'], resolve)
    }, {
        path: '/home',
        name: 'home',
        component: resolve => require(['./Home/index.vue'], resolve),
        children: childrenRoutes
    }
];

import childrenRoutes from '../allRoutes.js';

export default [
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['./login/index.vue'], resolve)
    }, {
        path: '/',
        name: 'home',
        component: resolve => require(['./Home/index.vue'], resolve),
        children: childrenRoutes
    }
];

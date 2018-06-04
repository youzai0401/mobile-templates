/**
 * Created by caiyuan on 2017/8/1.
 */
import Vue from 'vue';
import Router from 'vue-router';
import routes from '../framework/Routes';
import {cancelFetches} from '../common/request';
import common from '../common/common';

Vue.use(Router);

const router = new Router({
    routes
});
router.beforeEach(async(to, from, next) => {
    cancelFetches();
    console.log('from::', from);
    console.log('to::', to);
    // 确认当前是否登录
    const isLogin = common.store.getUser();
    if (to.path === '/login') {
        return next();
    }
    if (!isLogin) { // 如果未登录去home
        return next('/login');
    }
    // if (to.path === '/') { // 如果未登录去home
    //     return next('/loan');
    // }
    return next();
});

router.afterEach(() => {

});

export default router;


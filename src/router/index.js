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
    // cancelFetches();
    console.log('from::', from);
    console.log('to::', to);
    // 确认当前是否登录，是否存在openid
    const openid = common.store.getOpenid();
    // if (to.path === '/') {
    //     return next();
    // }
    if (!openid && to.path !== '/') {
        next('/');
        // window.location.reload();
        return;
    }
    return next();
});

router.afterEach(() => {

});

export default router;


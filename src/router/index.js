/**
 * Created by caiyuan on 2017/8/1.
 */
import Vue from 'vue';
import Router from 'vue-router';
import routes from '../framework/Routes';
import {cancelFetches} from '../common/request';

Vue.use(Router);

const router = new Router({
    routes
});
router.beforeEach(async (to, from, next) => {
    cancelFetches();
    console.log('from::', from);
    console.log('to::', to);
    return next();
});

router.afterEach(() => {

});

export default router;


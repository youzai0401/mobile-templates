/**
 * Created by zhang on 2017/5/8.
 */
import * as types from './mutation-types';
export default {
    changeCount({commit}) {
        commit(types.CHANGE_COUNT);
    },
    sayHello({commit}) {
        commit(types.SAY_HELLO);
    }
};

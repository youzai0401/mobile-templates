/**
 * Created by zhang on 2017/5/8.
 */
import * as types from './mutation-types';
export default {
    [types.CHANGE_COUNT](state) {
        console.log('执行了啊');
        state.count++;
    },
    [types.SAY_HELLO](state) {
        alert(state.count);
    }
};

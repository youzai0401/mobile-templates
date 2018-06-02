
import {fetch} from '../../common/request';
import serviceUrl from './serviceUrl';
export default {
    editPassword(data) {
        return fetch().put(serviceUrl.editPassword, data);
    },
};
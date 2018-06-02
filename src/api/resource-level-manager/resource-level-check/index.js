import {fetch} from '../../../common/request';
import serviceUrl from './serviceUrl';
const mock = false;
export default {
    getResourceLevelDetail(id) {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-check/detail.json');
        } else {
            return fetch().get(serviceUrl.getResourceLevelDetail(id));
        }
    }
};

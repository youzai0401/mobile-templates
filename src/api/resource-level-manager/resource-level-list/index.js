import {fetch} from '../../../common/request';
import serviceUrl from './serviceUrl';
const mock = false;

export default {
    getResourceLevelList(data) {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-list/listData.json');
        } else {
            return fetch().get(serviceUrl.getResourceLevelList, {params: data});
        }
    },
    deleteResourceLevel(id) {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-list/listData.json');
        } else {
            return fetch().delete(serviceUrl.deleteResourceLevel(id));
        }
    }
};

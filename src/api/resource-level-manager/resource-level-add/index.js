
import {fetch} from '../../../common/request';
import serviceUrl from './serviceUrl';
const mock = false;
export default {
    addResourceLevel(data) {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-add/data.json');
        } else {
            return fetch().post(serviceUrl.addResourceLevel, data);
        }
    },
    getAllChannelAndResource() {
        return fetch().get(serviceUrl.getAllChannelAddResource);
    },
    editResourceLevel(data) {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-add/data.json');
        } else {
            return fetch().put(serviceUrl.editResourceLevel(), data);
        }
    },
    getResourceLevelDetail(id) {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-add/data.json');
        } else {
            return fetch().get(serviceUrl.getResourceLevelDetail(id));
        }
    },
    getNicheGroup() {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-add/data.json');
        } else {
            const data = {
                offset: 0,
                limit: 999
            };
            return fetch().get(serviceUrl.getNicheGroup, {params: data});
        }
    },
    getNicheTree(data) {
        if (mock) {
            return fetch().get('/json/resource-level-manager/resource-level-add/data.json');
        } else {
            return fetch().post(serviceUrl.getNicheTree(), data);
        }
    }
};

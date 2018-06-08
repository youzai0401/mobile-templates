
import {fetch} from '../../common/request';
import serviceUrl from './serviceUrl';

export default {
    // 申请贷款接口
    postApplyLoan(data) {
        return fetch().post(serviceUrl.postApplyLoan, data);
    },
    getApplyLoan(id) {
        return fetch().get(serviceUrl.getApplyLoan(id));
    },
    // 填写身份信息接口
    postIdData(data) {
        return fetch().post(serviceUrl.postIdData, data);
    },
    getIdData(id) {
        return fetch().get(serviceUrl.getIdData(id));
    },
    // 填写资料信息接口
    postInformationData(data) {
        return fetch().post(serviceUrl.postInformationData, data);
    },
    getInformationData(id) {
        return fetch().get(serviceUrl.getInformationData(id));
    },
    // 填写收款银行卡
    postBankcardData(data) {
        return fetch().post(serviceUrl.postBankcardData, data);
    },
    getBankcardData(id) {
        return fetch().get(serviceUrl.getBankcardData(id));
    },
    // 填写联系人信息
    postContactsData(data) {
        return fetch().post(serviceUrl.postContactsData, data);
    },
    getContactsData(id) {
        return fetch().get(serviceUrl.getContactsData(id));
    },
    // 填写负债信息
    postDebtData(data) {
        return fetch().post(serviceUrl.postDebtData, data);
    },
    getDebtData(id) {
        return fetch().get(serviceUrl.getDebtData(id));
    },
    // 获取哪些信息填写了
    getInfoList() {
        return fetch().get(serviceUrl.getInfoList);
    }
};
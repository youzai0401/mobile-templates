
export default {
    postApplyLoan: '/api/loan',
    postIdData: '/api/info',
    postInformationData: '/api/data',
    postBankcardData: '/api/bank',
    postContactsData: '/api/link',
    postDebtData: '/api/bankdebt',
    getInfoList: '/api/infolist',
    getApplyLoan(id) {
        return `/api/loan?openid=${id}`;
    },
    getIdData(id) {
        return `/api/info?openid=${id}`;
    },
    getInformationData(id) {
        return `/api/data?openid=${id}`;
    },
    getBankcardData(id) {
        return `/api/bank?openid=${id}`;
    },
    getContactsData(id) {
        return `/api/link?openid=${id}`;
    },
    getDebtData(id) {
        return `/api/bankdebt?openid=${id}`;
    }
}
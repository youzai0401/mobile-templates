
export default {
    postApplyLoan: '/api/loan',
    postIdData: '/api/info',
    postInformationData: '/api/data',
    postBankcardData: '/api/bank',
    postContactsData: '/api/link',
    postDebtData: '/api/bankdebt',
    getPeriod: '/api/period',
    getPlan(id) {
        return `/api/plan?openid=${id}`;
    },
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
    },
    getOpenid(code) {
        return `/api/user?code=${code}`;
    }
};
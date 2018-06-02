
export default {
    getAllChannelAddResource: '/pyramid/channel/all',
    addResourceLevel: '/pyramid/niche',
    editResourceLevel() {
        return '/pyramid/niche';
    },
    /* 获取呈现位详情*/
    getResourceLevelDetail(id) {
        return `/pyramid/niche/${id}`;
    },
    /* 获取呈现位分类URL*/
    getNicheGroup: '/pyramid/nichegroup',
    getNicheTree() {
        return '/pyramid/niche/tree';
    }
};

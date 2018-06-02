/**
 * Created by wangJie on 2017/5/24.
 */
import {fetch} from  '../../common/request';
import serviceUrl from './serviceUrl';

export default {
    getMenuList(data) {
        return fetch().get(serviceUrl.getMenuList, {params: data});
    }, // 获取左侧菜单数据

}

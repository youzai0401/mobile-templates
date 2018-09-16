
import storage from './storage';
import cookie from 'js-cookie';
import server from '../api/util/index';
import {MessageBox} from 'mint-ui';


const getUrlParam = function() {
    const param = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
        if (value.indexOf('#') > 0) {
            value = value.split('#')[0];
        }
        param[key] = value;
    });
    return param;
};

const getLastParam = function() {
    const urlParams = location.href.split('/');
    const lastParam = urlParams[urlParams.length - 1];
    if (lastParam.indexOf('?')) {
        return lastParam.split('?')[0];
    }
    return lastParam;
};

// s 时间戳
const format = function(date, formatStr) {
    /*
     函数：填充0字符
     参数：value-需要填充的字符串, length-总长度
     返回：填充后的字符串
     */
    date = new Date(date);
    const zeroize = function(value, length) {
        if (!length) {
            length = 2;
        }
        value = new String(value);
        for (var i = 0, zeros = ''; i < (length - value.length); i++) {
            zeros += '0';
        }
        return zeros + value;
    };
    return formatStr.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g, $0 => {
        switch ($0) {
            case 'd':
                return date.getDate();
            case 'dd':
                return zeroize(date.getDate());
            case 'ddd':
                return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][date.getDay()];
            case 'dddd':
                return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
            case 'M':
                return date.getMonth() + 1;
            case 'MM':
                return zeroize(date.getMonth() + 1);
            case 'MMM':
                return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
            case 'MMMM':
                return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
            case 'yy':
                return new String(date.getFullYear()).substr(2);
            case 'yyyy':
                return date.getFullYear();
            case 'h':
                return date.getHours() % 12 || 12;
            case 'hh':
                return zeroize(date.getHours() % 12 || 12);
            case 'H':
                return date.getHours();
            case 'HH':
                return zeroize(date.getHours());
            case 'm':
                return date.getMinutes();
            case 'mm':
                return zeroize(date.getMinutes());
            case 's':
                return date.getSeconds();
            case 'ss':
                return zeroize(date.getSeconds());
            case 'l':
                return date.getMilliseconds();
            case 'll':
                return zeroize(date.getMilliseconds());
            case 'tt':
                return date.getHours() < 12 ? 'am' : 'pm';
            case 'TT':
                return date.getHours() < 12 ? 'AM' : 'PM';
        }
    });
};

const toThousands = function(value) {
    let num = (value || 0).toString();
    let result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
};

const toPercentage = function(num1, num2) {
    if (!num2) {
        return '0.00%';
    }
    return `${(num1 * 100 / num2).toFixed(2)}%`;
};

const returnPageTop = function() {
    const topElement = document.getElementById('lw-content');
    if (topElement) {
        topElement.scrollTop = 0;
    }
};


const store = {
    getUser() {
        return storage.local.getItem('user');
    },
    setUser(data) {
        storage.local.setItem('user', data);
    },
    getOpenid() {
        return storage.session.getItem('openid');
    },
    setOpenid(openid) {
        storage.session.setItem('openid', openid);
    },
    getDataIsComplete() {
        if (storage.session.getItem('dataIsComplete')) {
            return storage.session.getItem('dataIsComplete');
        } else {
            // d
        }
    },
    setDataIsComplete(dataIsComplete) {
        storage.session.setItem('dataIsComplete', dataIsComplete);
    },
    clear() {
        storage.session.clear();
        storage.local.clear();
    }
};
const getRememberMe = () => cookie.get('rememberMe');
const getObjectKeys = function(objectData, ignoreKey = []) {
    const keys = [];
    for (const p1 in objectData) {
        if (objectData.hasOwnProperty(p1) && ignoreKey.indexOf(p1) === -1) {
            keys.push(p1);
        }
    }
    return keys;
};
const getDataIsComplete = async function() {
    const openid = store.getOpenid();
    const res = await server.getPlan(openid).catch(() => {
        MessageBox('提示', '系统错误');
    });
    if (res && res.data && res.data.code === 200) {
        const data = res.data.data;
        if (data.isUpdate === 1) {
            store.setDataIsComplete(true);
            return true;
        } else {
            store.setDataIsComplete('');
            return false;
        }
    }
};

export default {
    getUrlParam,
    getLastParam,
    format,
    store,
    toThousands,
    toPercentage,
    getRememberMe,
    returnPageTop,
    getObjectKeys,
    getDataIsComplete
};

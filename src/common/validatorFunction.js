/**
 * Created by z on 2018/6/4.
 */

function getObjectKeys(objectData, ignoreKey = []) {
    const keys = [];
    for (const p1 in objectData) {
        if (objectData.hasOwnProperty(p1) && ignoreKey.indexOf(p1) === -1) {
            keys.push(p1);
        }
    }
    return keys;
}
// 校验种类
const validatorUtils = {
    'require'(value, rule) {
        if (rule) {
            if (value === 0) {
                return true;
            }
            if (!value) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    },
    'maxLength'(value, rule) {
        if (value.length > rule) {
            return false;
        } else {
            return true;
        }
    },
    'minLength'(value, rule) {
        if (value.length > rule) {
            return true;
        } else {
            return false;
        }
    },
    'reg'(value, rule) {
        if (rule.test(value)) {
            return true;
        } else {
            return false;
        }
    }
};
function validator(value, rules) {
    let isPass = true;
    let message = '';
    for (let i = 0; i < rules.length; i++) {
        const rulesKeys = getObjectKeys(rules[i], ['message']);
        const validatorMethod = rulesKeys[0];
        const validatorRules = rules[i][rulesKeys[0]];
        isPass = validatorUtils[validatorMethod](value, validatorRules);
        if (!isPass) {
            message = rules[i].message;
            return {
                isPass,
                message
            };
        }
    }
    return {
        isPass,
        message
    };
}
// 传入参数：formData,form表单数据，rules，校验规则
export default function validatorFunction(formData, rules) {
    const rulesKeys = getObjectKeys(rules);
    const formDataKeys = getObjectKeys(formData);
    const result = {};
    for (let i = 0; i < rulesKeys.length; i++) {
        // 判断规则需要判断的字段是不是存在form中，若存在，进行校验，不存在，跳过，不作处理
        if (formDataKeys.indexOf(rulesKeys[i]) > -1) {
            // 进行校验
            result[rulesKeys[i]] = {};
            result[rulesKeys[i]] = validator(formData[rulesKeys[i]], rules[rulesKeys[i]]);
        }
    }
    let isAllPass = true;
    for (const key in result) {
        if (!result[key].isPass) {
            isAllPass = false;
        }
    }
    return {
        result: isAllPass,
        detail: result
    };
}


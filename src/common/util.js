
console.log('环境 :===', process.env);
// process.env = 'test';
// 模板和url的对应关系
const baseUrlConfig = {
    dev: 'http://rd',
    test: 'http://test',
    production: 'http://'
};

export const baseUrl = baseUrlConfig[process.env.NODE_ENV];
// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var env = process.env.NODE_ENV;


var publicPath = {
    dev: '/',
    test: '/',
    demo:'/',
    production: './',
    //production: '/',
};
console.log('构建环境输出11:')
console.log(publicPath[env], env);

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: publicPath[env],
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8084,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/iworld': {
                target: 'http://221.181.100.150:18090',
                changeOrigin: true
            },
            '/lightChina': {
                target: 'http://172.29.2.166:7077', // 开发
                // target: 'http://172.29.2.168:7077', // 测试
                // target: 'http://newtestadmin.lex.lenovo.com.cn', // 测试
                // target: 'http://newadmin.gray.lex.lenovo.com.cn', // 灰度地址
                // target: 'http://10.10.42.216:7077', // 曾李本地
                // target: 'http://10.10.45.138:7077', // 浩哥本地
                // target: 'http://admin.lex.lenovo.com.cn',
                changeOrigin: true,
            },
            '/pyramid/': {
                // target: 'http://testmessage.lex.lenovo.com.cn',
                // target: 'http://newrdadmin.lex.lenovo.com.cn',
                target: 'http://newtestadmin.lex.lenovo.com.cn',

                // target: 'http://newadmin.test.lex.lenovo.com.cn',
                // target: 'http://newadmin.lex.lenovo.com.cn',
                // target: 'http://newadmin.rd.lenovo.com.cn',
                changeOrigin: true,
            },
            '/statics/': {
                target: 'http://172.29.2.168:7077', // 开发
            },
            '/phoenix/': {
                target: 'http://newtestadmin.lex.lenovo.com.cn',
                changeOrigin: true,
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}

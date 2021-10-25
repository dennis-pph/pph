const path = require('path')

module.exports = {
    publicPath: '/pph/',//publicPath取代了baseUrl
    // assetsRoot: path.resolve(__dirname, '../docs'),
    outputDir: 'docs',
    assetsDir: '',
    // indexPath: path.resolve(__dirname, '../index.html'),
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        historyApiFallback:{
            index:'/index.html'
          },
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: null, // string | Object
        before: app => { }
    }
}
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8888, // 端口
    open: true, // 自动开启浏览器
    compress: false, // 开启压缩
    overlay: {
        warnings: true,
        errors: true
    },
    // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    // 跨域代理配置
    proxy: {
        "/api": {
            target: "https://easy-mock.com/mock/5bd273b32d219744ff849604/bilibili",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "" // 路径重写 old: new
            }
        }
    }
},
};

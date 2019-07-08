module.exports = {
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  // 是否保存检查代码格式
  lintOnSave: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
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
  }
};

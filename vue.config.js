const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devServer:{
      port:8086,//更改端口号
      open:false,//自动启动浏览器
    }
  }
})

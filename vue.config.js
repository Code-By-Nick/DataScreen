const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devServer:{
      port:8066,//更改端口号
      open:false,//自动启动浏览器
      proxy:{
        '/api':{
          target:'http://10.1.3.5:8080',  //要解决跨域的接口的域名
          //secure:false,           //如果是https接口，需要配置这个参数
          // ws:false,
          changeOrigin:true,   // 如果接口跨域，需要进行这个参数配置
          pathRewrite:{
            '^/api':''  // 路径重写
          }
        }
      }
    }
  },

})

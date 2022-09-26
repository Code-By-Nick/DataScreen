import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress'   // 导入 nprogress
import 'nprogress/nprogress.css'   // 导入样式，否则看不到效果
NProgress.configure({showSpinner: true})   // 显示右上角螺旋加载提示

// router.beforeEach((to, from, next) => {
//   NProgress.start()   // 开启进度条
//   // some code ...
//   NProgress.done()   // 关闭进度条
// })

// 默认配置  基准地址 所有请求的前缀
axios.defaults.baseURL = 'http://10.1.3.6:8080'

//请求拦截  添加请求拦截器
axios.interceptors.request.use(config => {
  NProgress.start();  //开启进度条
  //为请求头对象，添加token 验证的 Authorization 字段
  // config.headers.Authorization = sessionStorage.getItem("token");
  return config;
});

//响应拦截
axios.interceptors.response.use(config => {
  NProgress.done();  //关闭进度条
  return config;
});

//true它会显示你生产模式的消息
Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(ElementUI, {locale});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

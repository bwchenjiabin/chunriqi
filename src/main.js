// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 初始化样式
import '@/assets/styles/reset'
// 导入element-ui组件
import ElementUI from 'element-ui'
// 导入element-ui样式表
import 'element-ui/lib/theme-chalk/index.css'
// 调用接口
import axios from 'axios'
// 注册element
Vue.use(ElementUI)
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://fs.mofangtour.com/'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import http from './api/axios'
// 引入mock
import './mock'

// 将axios实例挂在vue的原型链上
Vue.prototype.$http=http
// 挂载
Vue.use(ElementUI)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

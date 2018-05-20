// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios
// Vue.prototype.resource = 'localhost:9000'
Vue.prototype.resource = 'http://192.168.1.105:9000'

Vue.config.productionTip = false
import 'assets/style.css'
import 'src/sass/style.scss'

// 提示信息插件
import toast from 'src/base/toast'
Vue.prototype.$toast = toast


// 设置eventBus
window.eventBus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

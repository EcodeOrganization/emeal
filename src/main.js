import Vue from 'vue'
import App from './App'
import router from './router'

// 使用axios
import axios from 'axios'
Vue.prototype.$http = axios

// 设置请求地址
// Vue.prototype.resource = 'localhost:9000'
// Vue.prototype.resource = 'http://192.168.1.105:9000'
Vue.prototype.resource = 'http://172.30.67.141:9000'

Vue.config.productionTip = false
// 使用icon
import 'assets/style.css'

// 引入样式
import 'src/sass/style.scss'

// 模态框插件
import MsgBox from 'src/base/msgbox'
Vue.prototype.$MsgBox = MsgBox

// 提示信息插件
import toast from 'src/base/toast'
Vue.prototype.$toast = toast

// 全局mixin
Vue.mixin({
  data() {
    return{
      user: {}
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }
})

// 设置eventBus
window.eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

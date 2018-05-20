import Vue from 'vue'
import Router from 'vue-router'
import login from 'src/login/login'
import registered from 'src/login/registered'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/login', component: login },
    { path: '/registered', component: registered },
    { path: '*', redirect: '/login' }
  ]
})

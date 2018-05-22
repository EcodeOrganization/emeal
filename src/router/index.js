import Vue from 'vue'
import Router from 'vue-router'
import login from 'src/login/login'
import registered from 'src/login/registered'
import menulist from 'components/menulist'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/login', component: login },
    { path: '/registered', component: registered },
    { path: '/menulist', component: menulist },
    { path: '*', redirect: '/login' }
  ]
})

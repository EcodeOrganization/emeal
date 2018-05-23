import Vue from 'vue'
import Router from 'vue-router'
import login from 'src/login/login'
import registered from 'src/login/registered'
import menulist from 'components/menulist'
import menudetail from 'components/menudetail'
import shop from 'components/shop'
import mine from 'components/mine'
import list from 'components/mine/list'
import mineinfo from 'components/mine/mineinfo'
import collect from 'components/mine/collect'
import orderlist from 'components/mine/orderlist'
import orderdetail from 'components/mine/orderdetail'
import rate from 'components/mine/rate'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/login', component: login },
    { path: '/registered', component: registered },
    { path: '/menulist', component: menulist },
    { path: '/menudetail', component: menudetail },
    { path: '/shop', component: shop },
    { path: '/mine',
      component: mine,
      children: [
        { path: '/', component: list },
        { path: 'list', component: list },
        { path: 'mineinfo', component: mineinfo },
        { path: 'collect', component: collect },
        { path: 'orderlist', component: orderlist },
        { path: 'orderdetail', component: orderdetail },
        { path: 'rate', component: rate }
      ]
    },
    { path: '*', redirect: '/login' }
  ]
})

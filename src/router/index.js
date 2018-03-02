import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')
const musicList = r => require.ensure([], () => r(require('@/components/musicList/musicList')), 'musicList')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      component: musicList
    },
    {
      path: '/musicList',
      name: 'musicList',
      component: musicList
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Index from '@/views/index'
import CheckList from '@/views/check/list'
import CheckDetail from '@/views/check/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/check-list',
      name: 'CheckList',
      component: CheckList
    }, {
      path: '/check-detail',
      name: 'CheckDetail',
      component: CheckDetail
    }
  ]
})

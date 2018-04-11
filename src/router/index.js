import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import MainContent from '@/components/content/MainContent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/main',
      name: 'mainContent',
      component:MainContent
    }
  ]
})

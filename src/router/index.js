import Vue from 'vue'
import Router from 'vue-router'
import HelloWorldtest from '@/components/HelloWorldtest'
import Test from '@/components/Test'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);//注册路由

export default new Router({
  routes: [
    {
      path: '/HelloWorldtest',
      name: 'HelloWorldtest',
      component: HelloWorldtest
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})
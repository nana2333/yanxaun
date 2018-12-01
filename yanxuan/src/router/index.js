/*
 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Find from '../pages/Find/Find.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'
import Personal from '../pages/Personal/Personal.vue'
import FirstPage from '../pages/FirstPage/FirstPage.vue'
// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  // 应用中所有路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/find',
      component: Find,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/personal',
      component: Personal,
      
     
    },
    {
      path: '/firstpage',
      component: FirstPage,
    },
    {
      path: '/',
      redirect: '/firstpage'
    }
    ]
  
})

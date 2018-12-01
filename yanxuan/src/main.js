/**
 * Created by acer on 2018/11/28.
 */
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import Split from './components/Split/Split.vue'

import router from './router'

import store from './store'
// 注册全局组件
Vue.component('Split', Split)
import './mock/mockServer'





/* eslint-disable no-new */
new Vue({
    el: '#app',
  render: h => h(App),
  router,
  store
  
})

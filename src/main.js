// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import tools from '@/common.js' //引入全局公共方法
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueResource)
Vue.use(tools)
let store = new Vuex.Store({
  state:{   //存放数据的地方
    total:0,
    appleTotal:0,
    bananaTotal:0,
  },
  getters:{ //获取值的方法
    getTotal(state){
      return state.total
    }
  },
  mutations:{ //设置值得方法
    aSetValue(state,value){
      state.appleTotal = value
      state.total = state.appleTotal + state.bananaTotal;
    },
    bSetValue(state,value){
      state.bananaTotal = value
      state.total = state.appleTotal + state.bananaTotal;
    }
  },
  actions:{ //异步处理方法
    doAfn(context,price){
      context.commit('aSetValue',price)
    },
    doBfn(context,price){
      context.commit('bSetValue',price)
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

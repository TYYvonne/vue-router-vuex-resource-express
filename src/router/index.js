import Vue from 'vue'
import Router from 'vue-router'
import vuexIndex from '@/components/vuexPage/vuexIndex.vue'
import vuexLeft from '@/components/vuexPage/vuexIndexLeft.vue'
import vuexRight from '@/components/vuexPage/vuexIndexRight.vue'
import form from '@/components/form.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/index'},
    {
      path:'/index',
      components:{
        default:vuexIndex,
        left:vuexLeft,
        right:vuexRight
      }
    },
    {
      path:'/form',
      name:'form',
      component:form,
    }
  ]
})

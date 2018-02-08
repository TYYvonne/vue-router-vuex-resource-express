<template>
  <div class="right">
    <h1>我是right</h1>
    <div class="tips">(我是{{text?text:'路由的方式'}}来的)</div>
    <minIndex text="组件的方式"></minIndex>
    <router-view/>
    <div class="content">
      <minLeft text="组件的方式"></minLeft>
      <minRight text="组件的方式"></minRight>
    </div>
  </div>
</template>
<script>
  import minLeft from "@/components/vuexPage/minLeft.vue"
  import minRight from '@/components/vuexPage/minRight.vue'
  import minIndex from '@/components/vuexPage/vuexIndex.vue'
   export default {
        data: function () {
            return {}
        },
     props:['text'],
        components:{
            minLeft,
            minRight,
            minIndex
        }
    }
</script>
<style scoped>
  h1{
    text-align: center;
  }

</style>

<template>
  <div class="left">
    <h1>我是left</h1>
    <div class="tips">(我是{{text?text:'路由的方式'}}来的)</div>
    <div class="left-content">
      <div class="item-box">
        <apple/>
        <banana/>
      </div>
      <div class="price">
        <h3>总价：<span>{{$store.getters.getTotal}}</span></h3>
      </div>
    </div>
  </div>
</template>
<script>
    import apple from '@/components/vuex/apple.vue'
    import banana from '@/components/vuex/banana.vue'
    export default {
        data: function () {
            return {
            }
        },
      components:{
        apple,
        banana
      },
      props:['text']
    }
</script>
<style scoped>
  h1{
    text-align: center;
  }
  .left-content{
    margin-top: 20px;
  }
  .item-box{
    width: 48%;
    display: inline-block;
  }
  .price{
    width: 50%;
    display: inline-block;
    vertical-align: bottom;
  }
  .item{
    font-size: 15px;
    margin-top: 20px;
    margin-left: 20px;
  }

</style>

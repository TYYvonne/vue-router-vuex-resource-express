<template>
 <div>
   <h1>我是主页</h1>
   <div class="tips">(我是{{text?text:'路由的方式'}}来的)</div>
 </div>
</template>
<script>
    export default {
      data: function () {
        return {

        }
      },
      props:['text']
    }

</script>
<style scoped>
  h1{
    text-align: center;
  }

</style>

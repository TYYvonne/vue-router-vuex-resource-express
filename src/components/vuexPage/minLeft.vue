<template>
  <div class="left">
    <h1>我是minLeft</h1>
    <div class="tips">(我是{{text}}来的)</div>
    <router-link :to="{path:'form'}">表单操作</router-link>
  </div>
</template>
<script>
  module.exports = {
        data: function () {
            return {}
        },
      props:['text']
    }
</script>
<style scoped>
  h1{
    text-align: center;
  }

</style>

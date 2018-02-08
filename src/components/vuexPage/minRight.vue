<template>
  <div class="left">
    <h1>我是minRight</h1>
    <div class="tips">(我是{{text}}来的)</div>
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

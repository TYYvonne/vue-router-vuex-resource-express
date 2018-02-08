<template>
  <div id="app">
    <router-view/>
    <div class="content">
      <router-view name="left"></router-view>
      <router-view name="right"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {

    }
  },
  components:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1{
  margin:10px 0 5px 0;
}
.content{
  width: 100%;
  height: 600px;
}
.left,.right{
  float: left;
  height: 100%;
  width: 50%;
}
.tips{
  font-size: 13px;
  color:blue;
  text-align: center;
}
</style>

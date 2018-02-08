<template>
  <div class="item">
    <span>香蕉</span>
    <button @click="add">add</button>
    <button @click="minus">minus</button>
    <input v-model.number.lazy="cnt">
    <span v-if="noEnough" class="red">库存不够</span>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        cnt:0,
        noEnough:false
      }
    },
    methods:{
      add(){
        this.cnt += 1;
      },
      minus(){
        this.cnt-=1;
      }
    },
    watch:{
      cnt(val){
        if(val>10){
          this.noEnough = true;
        }
        if(val<10){
          this.noEnough = false;
        }
        if(val<0){
          this.cnt=0
        }
        this.$store.dispatch('doBfn',val*5)
      }
    }
  }
</script>
<style scoped>
  .item input{
    width: 40px;
    display: inline-block;
  }
  .red{
    color:red;
    font-size: 12px;
  }
</style>

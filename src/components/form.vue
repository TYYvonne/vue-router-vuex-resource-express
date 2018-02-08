<template>
  <div>
    <div class="item">
      <label>姓名：</label>
      <input type="text" v-model="formData.name"/>
      <div :class="nameFn">姓名不合法</div>
    </div>
    <div class="item">
      <label>电话：</label>
      <input type="text" v-model="formData.phone"/>
      <div :class="phoneFn">电话号码不合法</div>
    </div>
    <div class="item">
      <label>地址：</label>
      <input type="text" v-model="formData.address"/>
      <div :class="addFn">地址不合法</div>
    </div>
    <button @click="saveData">保存</button>
    <button @click="resetData">复原</button>
  </div>
</template>
<script>
  // eslint-disable-next-line
  /*  eslint-disable */
  module.exports = {
    name: 'forms',
    data: function () {
      return {
        formData: {},
        initData: {}
      }
    },
    computed:{
      nameFn:function () {
        if(!this.formData.name){
            return "err"
        }
      },
      phoneFn:function () {
          if(!(/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/).test(this.formData.phone)){
            return "err"
          }
      },
      addFn:function () {
        if(!this.formData.address){
          return "err"
        }
      }
    },
    methods: {  //  定义一些方法
      saveData: function () {
        console.log(this.formData)
        this.$http.post('/api/post/person',this.formData, {emulateJSON: true}).then(function (resp) {
            console.log('ok')
        }),function (err) {
          console.log('出错信息: ',err);
        }
      },
      resetData: function () {
        this.formData = this.tools.clone(this.initData);
      }
    },
    mounted: function () { // 初始化的时候调用 相当于 onload的回调
      this.$http.get('/api/person',null).then(function (resp) {
        obj = resp.body.data;
        this.initData = this.tools.clone(obj);//必须克隆对象，否者会导致同步修改的问题
        this.formData = this.tools.clone(obj);
      },function (err) {
        console.log('出错信息: ',err);
      })
    }
  }
</script>
<style scoped>
  .item div{
    display: none;
  }
  .item .err{
    color: red;
    display: block;
  }

</style>

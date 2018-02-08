/*
 * @Author lizhenhua
 * @version 2017-12-15
 * @description
 */

/**
 * 全局公用方法
 * 组件的方式编写 通过Vue(use) 引用
 */


export default {
  install(Vue, options) {
    Vue.prototype.tools = {
      clone: function (obj) {
        var o;
        if (typeof obj === 'object') {
          if (obj === null) {
            o = null
          } else {
            if (obj instanceof Array) {
              o = []
              for (var i = 0, len = obj.length; i < len; i++) {
                o.push(this.clone(obj[i]));
              }
            } else {
              o = {}
              for (var j in obj) {
                o[j] = this.clone(obj[j]);
              }
            }
          }
        } else {
          o = obj
        }
        return o;
      }
    }
  }
}

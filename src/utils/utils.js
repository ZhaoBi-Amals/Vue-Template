
const utils = {};

utils.install = (Vue, options) => {
  Vue.mixin({
    methods: {
      log(){
        //此函数可在任何页面引用， 引用方式 this.log();
      }
    }
  })
}

export default utils

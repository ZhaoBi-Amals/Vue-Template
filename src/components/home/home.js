import api from '../../api/index'

export default {
  data(){
    return {
      msg: 'home页面',
      count: 100,
    }
  },
  created(){
    //接口地址
    // api.settings.jk
    //请求
    // api.request('post', api.settings.jk, data, res => {
    //   console.log(res)
    // })
  },
  methods: {

  }
}

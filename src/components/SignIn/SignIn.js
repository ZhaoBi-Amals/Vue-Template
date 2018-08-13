
export default {
  data(){
    return {
      msg: '登陆页面。。。'
    }
  },
  created(){

  },
  methods: {
    login(){
      this.$router.push({path: '/'});
      this.$message.success('登陆成功 !');
    }
  }
}

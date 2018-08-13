

export default {
  data(){
    return {

    }
  },
  created(){

  },
  methods: {
    logOut(){
      this.$router.push({path: '/SignIn'})
      this.$message.success('已退出 ~');
    }
  }
}



export default {
  data () {
    return {
      msg: 'home页面'
    }
  },
  created(){
    this.hello();
  },
  methods: {
    hello(){
      console.log(' hello world ! ');
    }
  }
}

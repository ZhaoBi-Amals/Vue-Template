<template>
  <div class="Am-home">
    <header_nav></header_nav>
    <div class="Am-main">
      <slideBar></slideBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header_nav from './main/header_nav/header_nav.vue'
  import slideBar from './main/slideBar/slideBar.vue'

  export default {
    components: {
      header_nav,
      slideBar
    },
    mounted(){
      //预加载页面布局
      this.initLayout();
      //实时监听
      window.onresize = () => {
        setTimeout( () => {
          this.initLayout();
        });
      }
    },
    methods: {
      initLayout(){
        // $('.main').height($('body').height() - $('.header').height());
        let AmMain = document.getElementsByClassName('Am-main');
        let headerNav = document.getElementsByClassName('header_nav');
        AmMain[0].style.height = (document.body.offsetHeight - (headerNav[0] && headerNav[0].offsetHeight ? headerNav[0].offsetHeight : 0) ) + 'px';
      }
    }
  }
</script>

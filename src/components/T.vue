<template>
  <div>
    <slideBar></slideBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import slideBar from './main/slideBar/slideBar.vue'

  export default {
    components: {
      slideBar: slideBar
    }
  }
</script>

<template>
  <el-scrollbar class="Am-group">
    {{ msg }}
    <br/>
    <br/>
    <div v-for="(i, idx) in count" :key="idx">
      测试滚动 {{ idx }}<br/>
      <span v-if="idx == count - 1">到底了~~~~~</span>
    </div>
  </el-scrollbar>
</template>

<style scoped>
  @import "./home.css";
</style>

<script>
  import home from './home'
  export default home
</script>

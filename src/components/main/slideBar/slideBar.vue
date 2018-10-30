<template>
  <el-scrollbar class="slider">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#ffffff"
      text-color="#999999"
      active-text-color="#21282e"
      router>
      <el-menu-item index="/">
        <i class="el-icon-location"></i>
        <span slot="title">概览</span>
      </el-menu-item>
      <el-menu-item index="/doc">
        <i class="el-icon-document"></i>
        <span slot="title">文档</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped>
  @import "./slideBar.css";
</style>

<script>
  import slideBar from './slideBar'
  export default slideBar
</script>

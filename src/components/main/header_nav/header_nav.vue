<template>
  <div id="header_nav" class="header_nav">
    <div class="header_left_logo">
      <img :src="'./static/image/logo.png'" alt="logo" />
    </div>
    <div class="header_right_user">
      <div class="header_right_user_text">
        <a>
          返回官网
        </a>
        <a>
          帮助中心
        </a>
      </div>

      <el-dropdown>
        <div class="header_right_user_image">
          <img :src="'./static/image/user.png'" alt="user image" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="$router.push({path: '/doc'})">文档</el-dropdown-item>
          <el-dropdown-item @click.native="$router.push({path: '/setting'})">设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<style scoped>
  @import "./header_nav.css";
</style>

<script>
  import header from './header_nav'
  export default header
</script>

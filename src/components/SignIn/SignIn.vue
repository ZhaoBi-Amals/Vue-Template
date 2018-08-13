<template>
  <div class="login">
    {{ msg }}
    <div class="login_btn">
      <el-button size="medium"  type="primary" @click.native="login">登 陆</el-button>
    </div>
  </div>
</template>

<style scoped>
  @import "./SignIn.css";
</style>

<script>
  import SignIn from './SignIn'
  export default SignIn
</script>

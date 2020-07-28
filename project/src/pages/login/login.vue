<template>
  <div>
    <div class="login">
      <div class="con">
        <h3>登录</h3>
        <el-input placeholder="请输入内容" class="input" v-model="user.username" clearable></el-input>
        <el-input placeholder="请输入密码" class="input" v-model="user.password" show-password></el-input>
        <div class="btn-box">
          <el-button type="primary" @click="login">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { requestAdminLogin } from "../../util/request";
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      requestAdminLogin(this.user).then(res => {
        // console.log("res.list:",res.list.menus);
        if (res.code == 200) {
          this.$router.push("/");
          localStorage.setItem("token", res.list.token); //toekn
          localStorage.setItem("userInfo", res.list); //用户信息
          localStorage.setItem("menus", res.list.menus); //左侧菜单
        }
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #553444, #303d60);
}
h3 {
  margin-bottom: 20px;
}
.login .con {
  text-align: center;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.input {
  margin-bottom: 20px;
}
.btn-box {
  text-align: center;
}
</style>
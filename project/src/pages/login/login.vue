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
import { mapActions, mapGetters } from "vuex";
// 引入弹框
import { sucssessAlert, warningAlert } from "../../util/alert";
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
  computed: {
    ...mapGetters({
      userList: "user"
    })
  },
  methods: {
    ...mapActions({
      changeUser: "changeUser"
    }),
    login() {
      requestAdminLogin(this.user).then(res => {
        if (res.data.code == 200) {
          sucssessAlert("登录成功！")
          this.changeUser(res.data.list)
          this.$router.push("/");
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
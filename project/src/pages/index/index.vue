<template>
  <div>
    <el-container class="page">
      <el-aside width="200px" class="left">
        <!-- 导航开始 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <!-- 首页 -->
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 首页结束 -->

          <!-- 系统设置 -->
          <!-- 有目录时循环 -->
          <el-submenu
            v-show="hasChildren"
            :index="item.id+''"
            v-for="item in userList.menus"
            :key="item.id"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="(i) in item.children" :key="i.title" :index="i.url">{{i.title}}</el-menu-item>
          </el-submenu>

          <!-- 无目录时，菜单的遍历 -->
          <el-menu-item
            v-show="!hasChildren"
            :index="i.url"
            v-for="i in userList.menus"
            :key="i.title"
          >
            <template slot="title">
              <span>{{i.title}}</span>
            </template>
           
          </el-menu-item>
          <!-- 系统设置结束 -->
        </el-menu>

        <!-- 导航结束 -->
      </el-aside>
      <!-- 右边 -->
      <el-container>
        <el-header class="top">
          <div class="header-con">
            <span>{{userList.username}}</span>
            <el-button type="primary" @click="out">退出</el-button>
          </div>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view class="component"></router-view>
        </el-main>
        <!-- 主体结束 -->
      </el-container>
      <!-- 右边结束 -->
    </el-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userList: "user"
    }),
    // 判断是否有目录
    hasChildren() {
      return this.userList.menus[0].children ? true : false;
    }
  },
  methods: {
    ...mapActions({
      changeUser: "changeUser"
    }),
    out() {
      this.changeUser(null);
      this.$router.push("/login");
    }
  },
  mounted() {
    //  console.log(this.userList)
  }
};
</script>
<style scoped>
.component {
  padding-top: 20px;
}
.page {
  height: 100vh;
}
.left {
  background: #20222a;
}
.top {
  background: #b3c0d1;
  overflow: hidden;
  line-height: 54px;
}
.header-con {
  float: right;
}
</style>
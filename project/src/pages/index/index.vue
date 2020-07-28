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
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group v-for="item in menus" :key="item">
              <el-menu-item index="/menu">菜单管理</el-menu-item>
              <el-menu-item index="role">角色管理</el-menu-item>
              <el-menu-item index="admin">管理员管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
          <!-- 系统设置结束 -->


           <!-- 系统设置 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/menu">菜单管理</el-menu-item>
              <el-menu-item index="role">角色管理</el-menu-item>
              <el-menu-item index="admin">管理员管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 系统设置结束 -->

          <!-- 商城管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商城管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/classify">商品分类</el-menu-item>
              <el-menu-item index="/guige">商品规格</el-menu-item>
              <el-menu-item index="/goods">商品管理</el-menu-item>
              <el-menu-item index="/member">会员管理</el-menu-item>
              <el-menu-item index="/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/seckill">秒杀活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 商城管理结束 -->
        </el-menu>

        <!-- 导航结束 -->
      </el-aside>
      <!-- 右边 -->
      <el-container>
        <el-header class="top">
          <div class="header-con">
            <span>admin</span>
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
export default {
  components: {},
  data() {
    return {
      menus:[]
    };
  },
  methods: {
    out() {
      this.$router.push("/login");
    }
  },
  mounted() {

  //  this.menus= localStorage.getItem('menus');
    // console.log("index-menus:",menus);
    
  }
};
</script>
<style scoped>
.component{
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
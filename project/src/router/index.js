import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/login",
      component: () => import("../pages/login/login.vue")
    },
    {
      path: "/",
      component: () => import("../pages/index/index.vue"),
      children: [
        {
          // 菜单管理
          path: "/menu",
          component: () => import("../pages/menu/menu.vue"),
          name: "菜单管理"
        },
        {
          // 角色管理
          path: "/role",
          component: () => import("../pages/role/role.vue"),
          name:"角色管理"

        },
        {
          // 管理员管理
          path: "/admin",
          component: () => import("../pages/admin/admin.vue"),
          name: "管理员管理"
        },
        {
          // 分类
          path: "/classify",
          component: () => import("../pages/classify/classify.vue"),
          name:"商品分类"
        },
        {
          // 商品规格
          path: "/guige",
          component: () => import("../pages/guige/guige.vue"),
          name:"商品规格"
        },
        {
          // 商品管理
          path: "/goods",
          component: () => import("../pages/goods/goods.vue"),
          name:"商品管理"
        },
        {
          // 会员管理
          path: "/member",
          component: () => import("../pages/member/member.vue"),
          name:"会员管理"
        },
        {
          // 轮播图管理
          path: "/banner",
          component: () => import("../pages/banner/banner.vue"),
          name:"轮播图管理"
        },
        {
          // 秒杀活动
          path: "/seckill",
          component: () => import("../pages/seckill/seckill.vue"),
          name:"秒杀活动"
        },

      ]
    },
  ]
})

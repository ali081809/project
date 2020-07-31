import Vue from 'vue'
import Router from 'vue-router'

// 导入vuex
import store from "../store/index"

Vue.use(Router)

// 路由独享
function hasPrave(url) {
  return store.state.user.menus_url.some(i => i == url)
}

let router = new Router({
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
          // 首页
          path: "home",
          component: () => import("../pages/home/home.vue"),
          name: "首页"
        },
        {
          // 菜单管理
          path: "menu",
          component: () => import("../pages/menu/menu.vue"),
          name: "菜单管理",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/menu") ? next() : next("/home")
          }
        },
        {
          // 角色管理
          path: "role",
          component: () => import("../pages/role/role.vue"),
          name: "角色管理",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/role") ? next() : next("/home")
          }

        },
        {
          // 管理员管理
          path: "admin",
          component: () => import("../pages/admin/admin.vue"),
          name: "管理员管理",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/admin") ? next() : next("/home")
          }
        },
        {
          // 分类
          path: "classify",
          component: () => import("../pages/classify/classify.vue"),
          name: "商品分类",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/classify") ? next() : next("/home")
          }
        },
        {
          // 商品规格
          path: "guige",
          component: () => import("../pages/guige/guige.vue"),
          name: "商品规格",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/guige") ? next() : next("/home")
          }
        },
        {
          // 商品管理
          path: "goods",
          component: () => import("../pages/goods/goods.vue"),
          name: "商品管理",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/goods") ? next() : next("/home")
          }
        },
        {
          // 会员管理
          path: "member",
          component: () => import("../pages/member/member.vue"),
          name: "会员管理",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/member") ? next() : next("/home")
          }
        },
        {
          // 轮播图管理
          path: "banner",
          component: () => import("../pages/banner/banner.vue"),
          name: "轮播图管理",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/banner") ? next() : next("/home")
          }
        },
        {
          // 秒杀活动
          path: "seckill",
          component: () => import("../pages/seckill/seckill.vue"),
          name: "秒杀活动",
          // 路由独享守卫,判断用户所登录的权限有没有这个界面，有就可以访问
          beforeEnter: (to, from, next) => {
            hasPrave("/seckill") ? next() : next("/home")
          }
        },
        // 路由重置
        {
          path: "",
          redirect: "home"
        }

      ]
    },
  ]
})

// 登录拦截
router.beforeEach((to, from, next) => {
  //  如何前往登录页面，那就去吧next()
  if (to.path == "/login") {
    next()
    return;
  }
  // 如果去的不是登录页面，就要判断vuex里的user是否有数据，有则默认用户已经登录
  if (store.state.user) {
    next();
    return;
  }
  next("/login")

})
export default router
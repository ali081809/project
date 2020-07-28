// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入reset.css
import "./assets/css/reset.css" 

// 引入公共的组件
import commonComponents from './components/index'
for(let i in commonComponents){
  Vue.component(i,commonComponents[i])
}

// 引入过滤器
import filters from "./filters/index"
for(let i in filters){
  Vue.filter(i,filters[i])
}

// 引入vuex
import store from "./store"

// 绑定文件的本地路径的前缀
Vue.prototype.$imgUrl="http://localhost:3000"

// 引入elemet-ui
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

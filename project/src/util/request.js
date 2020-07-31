import axios from "axios"
import qs from "qs"
// 引入仓库
import store from "../store/index"
import router from "../router/index"
// 引入弹框
import {warningAlert} from "./alert"


// 请求拦截
axios.interceptors.request.use(config=>{
    if(config.url!=baseUrl+"/api/userlogin"){
        config.headers.authorization=store.state.user.token;
    }
    // console.log(config)
    return config;
    // if(res.data.list.)
})

// 响应拦截
axios.interceptors.response.use(res => {
    if(res.data.msg==="登录已过期或访问权限受限"){
        warningAlert("登录已过期或访问权限受限")
        router.push("/login")
        return;
    }
    return res
})

// 定义本地路径
// var baseUrl = "/api"
// 打包路径
var baseUrl = ""

// 菜单添加
export const requestMenuAdd = (params) => {
    return axios({
        url: baseUrl + "/api/menuadd",
        method: "post",
        data: qs.stringify(params)
    })
}

// 菜单列表
export const requestMenuList = (params) => {
    return axios({
        url: baseUrl + "/api/menulist",
        method: "get",
        params
    })
}

// 获取菜单的一条数据
export const requestOneList = (params) => {
    return axios({
        url: baseUrl + "/api/menuinfo",
        method: "get",
        params
    })
}

// 菜单修改
export const requestMenuUpdate = (params) => {
    return axios({
        url: baseUrl + "/api/menuedit",
        method: "post",
        data: qs.stringify(params)
    })
}
// 菜单删除
export const requestMenuDel = (params) => {
    return axios({
        url: baseUrl + "/api/menudelete",
        method: "post",
        data: qs.stringify(params)
    })
}

// 角色添加
export const requestRoleAdd = (params) => {
    return axios({
        url: baseUrl + "/api/roleadd",
        method: "post",
        data: qs.stringify(params)
    })
}
// 角色列表
export const requestRoleList = () => {
    return axios({
        url: baseUrl + "/api/rolelist",
        method: "get",
    })
}
// 获取角色中的一条数据
export const requestRoleOneList = (params) => {
    return axios({
        url: baseUrl + "/api/roleinfo",
        method: "get",
        params
    })
}

// 角色修改
export const requestRoleUpdate = (params) => {
    return axios({
        url: baseUrl + "/api/roleedit",
        method: "post",
        data: qs.stringify(params)
    })
}

// 角色删除
export const requestRoledel = (params) => {
    return axios({
        url: baseUrl + "/api/roledelete",
        method: "post",
        data: qs.stringify(params)
    })
}

// 管理员添加
export const requestAdminAdd = (params) => {
    return axios({
        url: baseUrl + "/api/useradd",
        method: "post",
        data: qs.stringify(params)
    })
}

// 管理员总数
export const requestAdminCount = () => {
    return axios({
        url: baseUrl + "/api/usercount",
        method: "get"
    })
}

// 管理员列表
export const requestAdminList = (params) => {
    return axios({
        url: baseUrl + "/api/userlist",
        method: "get",
        params
    })
}
// 获取管理员中的一条数据
export const requestAdminOneList = (params) => {
    return axios({
        url: baseUrl + "/api/userinfo",
        method: "get",
        params
    })
}

// 管理员修改
export const requestAdminUpdate = (params) => {
    return axios({
        url: baseUrl + "/api/useredit",
        method: "post",
        data: qs.stringify(params)
    })
}

// 管理员删除
export const requestAdmindel = (params) => {
    return axios({
        url: baseUrl + "/api/userdelete",
        method: "post",
        data: qs.stringify(params)
    })
}

// 管理员登录
export const requestAdminLogin = (params) => {
    return axios({
        url: baseUrl + "/api/userlogin",
        method: "post",
        data: qs.stringify(params)
    })
}

// 商品分类添加
export const requestcateadd = (params) => {

    // post请求里含有文件的，文件处理
    var form = new FormData();
    for (var i in params) {
        form.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/cateadd",
        method: "post",
        data: form
    })
}
// 商品分类列表
export const requestcatelist = (params) => {
    return axios({
        url: baseUrl + "/api/catelist",
        method: "get",
        params
    })
}
// 获取商品分类中的一条数据
export const requestcateinfo = (params) => {
    return axios({
        url: baseUrl + "/api/cateinfo",
        method: "get",
        params
    })
}

// 商品分类修改
export const requestcateedit = (params) => {
    // post请求里含有文件的，文件处理
    var form = new FormData();
    for (var i in params) {
        form.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/cateedit",
        method: "post",
        data: form
    })
}

// 商品分类删除
export const requestcatedelete = (params) => {
    return axios({
        url: baseUrl + "/api/catedelete",
        method: "post",
        data: qs.stringify(params)
    })
}

// 商品规格添加
export const requestSpecsAdd = (params) => {
    return axios({
        url: baseUrl + "/api/specsadd",
        method: "post",
        data: qs.stringify(params)
    })
}

// 商品规格总数
export const requestSpecsCount = () => {
    return axios({
        url: baseUrl + "/api/specscount",
        method: "get"
    })
}

// 商品规格列表
export const requestSpecsList = (params) => {
    return axios({
        url: baseUrl + "/api/specslist",
        method: "get",
        params
    })
}
// 获取商品规格中的一条数据
export const requestSpecsOneList = (params) => {
    return axios({
        url: baseUrl + "/api/specsinfo",
        method: "get",
        params
    })
}

// 商品规格修改
export const requestSpecsUpdate = (params) => {
    return axios({
        url: baseUrl + "/api/specsedit",
        method: "post",
        data: qs.stringify(params)
    })
}

// 商品规格删除
export const requestSpecsdel = (params) => {
    return axios({
        url: baseUrl + "/api/specsdelete",
        method: "post",
        data: qs.stringify(params)
    })
}

// 轮播图添加
export const requestbanneradd = (params) => {

    // post请求里含有文件的，文件处理
    var form = new FormData();
    for (var i in params) {
        form.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/banneradd",
        method: "post",
        data: form
    })
}
// 轮播图列表
export const requestbannerlist = (params) => {
    return axios({
        url: baseUrl + "/api/bannerlist",
        method: "get",
        params
    })
}
// 获取轮播图中的一条数据
export const requestbannerinfo = (params) => {
    return axios({
        url: baseUrl + "/api/bannerinfo",
        method: "get",
        params
    })
}

// 轮播图修改
export const requestbanneredit = (params) => {
    // post请求里含有文件的，文件处理
    var form = new FormData();
    for (var i in params) {
        form.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/banneredit",
        method: "post",
        data: form
    })
}

// 轮播图删除
export const requestbannerdelete = (params) => {
    return axios({
        url: baseUrl + "/api/bannerdelete",
        method: "post",
        data: qs.stringify(params)
    })
}


// 会员列表
export const requestMemberList = () => {
    return axios({
        url: baseUrl + "/api/memberlist",
        method: "get",
    })
}
// 获取会员中的一条数据
export const requestMemberOneList = (params) => {
    return axios({
        url: baseUrl + "/api/memberinfo",
        method: "get",
        params
    })
}

// 会员修改
export const requestMemberUpdate = (params) => {
    return axios({
        url: baseUrl + "/api/memberedit",
        method: "post",
        data: qs.stringify(params)
    })
}

// 商品添加
export const requestgoodsadd = (params) => {

    // post请求里含有文件的，文件处理
    var form = new FormData();
    for (var i in params) {
        form.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/goodsadd",
        method: "post",
        data: form
    })
}
// 商品总数
export const requestgoodscount = () => {
    return axios({
        url: baseUrl + "/api/goodscount",
        method: "get"
    })
}

// 商品列表
export const requestgoodslist = (params) => {
    return axios({
        url: baseUrl + "/api/goodslist",
        method: "get",
        params
    })
}
// 获取商品中的一条数据
export const requestgoodsinfo = (params) => {
    return axios({
        url: baseUrl + "/api/goodsinfo",
        method: "get",
        params
    })
}

// 商品修改
export const requestgoodsedit = (params) => {
    // post请求里含有文件的，文件处理
    var form = new FormData();
    for (var i in params) {
        form.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/goodsedit",
        method: "post",
        data: form
    })
}

// 商品删除
export const requestgoodsdelete = (params) => {
    return axios({
        url: baseUrl + "/api/goodsdelete",
        method: "post",
        data: qs.stringify(params)
    })
}

// 秒杀活动添加
export const requestseckadd = (params) => {
    return axios({
        url: baseUrl + "/api/seckadd",
        method: "post",
        data: qs.stringify(params)
    })
}
// 秒杀活动列表
export const requestsecklist = () => {
    return axios({
        url: baseUrl + "/api/secklist",
        method: "get",
    })
}
// 获取秒杀活动中的一条数据
export const requestseckinfo = (params) => {
    return axios({
        url: baseUrl + "/api/seckinfo",
        method: "get",
        params
    })
}

// 秒杀活动修改
export const requestseckedit = (params) => {
    return axios({
        url: baseUrl + "/api/seckedit",
        method: "post",
        data: qs.stringify(params)
    })
}

// 秒杀活动删除
export const requestseckdelete = (params) => {
    return axios({
        url: baseUrl + "/api/seckdelete",
        method: "post",
        data: qs.stringify(params)
    })
}
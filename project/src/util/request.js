import axios from "axios"
import qs from "qs"

// 响应拦截
axios.interceptors.response.use(res => {
    console.group("本次路径：" + res.config.url)
    console.log(res)
    console.groupEnd()
    return res
})

// 定义本地路径
var baseUrl = "/api"

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
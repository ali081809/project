import { requestAdminList,requestAdminCount } from "../../util/request"

const state = {
    // 列表数据
    list: [],
    // 一页的数量
    size:3,
    //数据总数量
    total:0,
    // 需要一个变量，来确定当前在第几页
    page:1//默认从第一页开始
}

// 修改状态
const mutations = {
    // 修改列表
    changList(state, arr) {
        state.list = arr
    },
    // 修改总数
    changeTotal(state,num){
        state.total=num
    },
    // 修改当前页
    changPage(state,page){
        state.page=page
    }

}

// 提醒修改状态
const actions = {

    // 获取数据列表
    reqAdminList(context) {
        // 页数、查询的条数
        const params = { page: context.state.page, size: context.state.size }
        // 发起请求
        requestAdminList(params).then(res => {
            // 判断当前页是否还有数据，没有这page自动-1，退回下一页
            if(res.data.list==null&&context.state.page>1){
                context.commit("changPage", context.state.page-1);
                context.dispatch("reqAdminList");
                return;
            }
            context.commit("changList", res.data.list)
        })
    },
    // 提醒修改总数
    reqTotal(context){
        requestAdminCount().then(res=>{
            context.commit("changeTotal",res.data.list[0].total)
        })
    },

    // 提醒修改页数
    changePage(context,page){
        context.commit("changPage",page)
    }
}

// 导出数据
const getters = {
    list(state) {
        return state.list
    },
    //一页的数量
    size(state) {
        return state.size
    },
    //数据总数量
    total(state) {
        return state.total
    }
}

// 导出数据
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}
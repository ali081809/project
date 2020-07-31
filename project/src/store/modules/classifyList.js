import {requestcatelist} from "../../util/request"

const state={
    // 列表数据
    list:[]
}

// 修改状态
const mutations={
    changList(state,arr){
        state.list=arr
    }
}

// 提醒修改状态
const actions={
    requestCateList(context){
        // 发起请求
        requestcatelist({istree:true}).then(res=>{
            context.commit("changList",res.data.list)
        })
    }
}

// 导出数据
const getters={
    list(state){
        return state.list
    }
}

// 导出数据
export default{
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}
import {requestMemberList} from "../../util/request"

const state=({
    list:[]
})

const mutations=({
    changList(state,arr){
        state.list=arr
    }
})

const actions=({
    requestMenber(context){
        requestMemberList().then(res=>{
            context.commit("changList",res.data.list)
        })
    }
})

const getters=({
    list(state){
        return state.list
    }
})

// 导出
export default{
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}
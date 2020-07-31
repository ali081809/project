import { requestSpecsList,requestSpecsCount } from "../../util/request"

const state=({
    list:[],
    // 查询的条数（固定）
    size:3,
    // 总条数
    total:0,
    // 页码
    page:1
})

const mutations=({
    //修改列表  获取的规格属性需要先转为数组
    changList(state,arr){
        arr.forEach(i => {
            i.attrs=JSON.parse(i.attrs)
        });
        state.list=arr
    },
    // 修改总数
    changCont(state,num){
        state.total=num
    },
    // 修改页数
    changPage(state,page){
        state.page=page
    }
})

const actions=({
    // 请求列表
    requestGuigeList(context){
       
        var params={
            page:context.state.page,
            size:context.state.size
        }
        requestSpecsList(params).then(res=>{
             // 判断当前页有没有数据，没有数据则page-1，退回下一页
        if(res.data.list.length==0&&context.state.page>1){
            context.commit("changPage",context.state.page-1);
            context.dispatch("requestGuigeList");
            return;
        }
            context.commit("changList",res.data.list)
        })
    },
    // 请求总数
    requestCont(context){
        requestSpecsCount().then(res=>{
            context.commit("changCont",res.data.list[0].total)
        })
    },
    // 修改页数
    changePage(context,page){
        context.commit("changPage",page)
    }
})

const getters=({
    list(state){
        return state.list
    },
    size(state){
        return state.size
    },
    total(state){
        return state.total
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
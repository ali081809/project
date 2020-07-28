<template>
 <div>
     <el-button  type="primary" @click="add">添加</el-button>
     <v-list @edit="edit"></v-list>
     <v-add :info="info" ref="add"></v-add>
 </div>
</template>
<script>
import vList from "./component/list"
import vAdd from "./component/add"
export default {
    components: {
        vList,
        vAdd
    },
    data() {
        return {
            info:{
                show:false,
                title:"用户添加",
                isAdd:true
            }
        }
},
    methods: {
        // 点击添加按钮
        add(){
            this.info.show=true,
            this.info.isAdd=true,
            this.info.title="用户添加"
        },
        // 从list传过来的修改方法
        edit(id){
            this.info.show=true,
            this.info.title="用户编辑",
             this.info.isAdd=false,
            this.$refs.add.getAdminDetail(id)
        }
    },
    mounted() {},
}
</script>
<style scoped>
</style>
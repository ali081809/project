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
                isshow:false,
                title:"角色添加",
                isAdd:true
            }
        }
},
    methods: {
        add(){
            this.info.isshow=true,
            this.info.title="角色添加",
            this.info.isAdd=true
        },
        // 从list传来的修改
        edit(id){
            this.info.isshow=true,
            this.info.title="角色编辑",
            this.info.isAdd=false,
            this.$refs.add.getRoleDetail(id)
        }
    },
    mounted() {},
}
</script>
<style scoped>
</style>
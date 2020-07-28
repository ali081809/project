<template>
 <div>
     <el-button type="primary" @click="add">添加</el-button>
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
                title:"规格添加",
                isAdd:true
            }
        }
},
    methods: {
        // 点击添加
        add(){
            this.info.show=true,
            this.info.title="规格添加",
            this.info.isAdd=true
        },
        // 从列表传递过来的的编辑方法
        edit(id){
            this.$refs.add.getOneDetail(id)
            this.info.show=true,
            this.info.title="规格编辑",
            this.info.isAdd=false
        }
        },
    mounted() {},
}
</script>
<style scoped>
</style>
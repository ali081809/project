<template>
 <div>
      <el-button type="primary" @click="add">添加</el-button>
      <v-list @edit="edit"></v-list>
      <v-add :info="info" ref="add"></v-add>
 </div>
</template>
<script>
import vList from "./components/list"
import vAdd from "./components/add"
export default {
    components: {
        vList,
        vAdd
    },
    data() {
        return {
            info:{
                show:false,
                title:"商品分类添加",
                isAdd:true
            }
        }
},
    methods: {
        // 点击添加
        add(){
            this.info.show=true,
            this.info.title="商品分类添加",
            this.info.isAdd=true
        },
        // 点击编辑
        edit(id){
            this.info.show=true,
            this.info.title="商品分类编辑",
            this.info.isAdd=false
            this.$refs.add.getCateinfo(id)
        }
    },
    mounted() {},
}
</script>
<style scoped>
</style>
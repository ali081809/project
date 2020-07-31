<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-list @edit="edit"></v-list>
    <v-add :info="info"  ref="add"></v-add>
  </div>
</template>
<script>
import vList from "./component/list";
import vAdd from "./component/add";
export default {
  components: {
    vList,
    vAdd
  },
  data() {
    return {
        info:{
            show:false,
            isAdd:false,
            title:"菜单添加",


        }
    };
  },
  methods: {
    add() {
     this.info.show=true,
     this.info.isAdd=true,
     this.info.title="菜单添加"
    },
    edit(id){
        this.info.show=true;
        this.info.title="菜单编辑"
         this.info.isAdd=false
        this.$refs.add.getDetail(id)
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
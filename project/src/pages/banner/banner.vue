<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-list @edit="edit"></v-list>
    <v-add :info="info" ref="add"></v-add>
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
      info: {
        show: false,
        title: "轮播图添加",
        isAdd: true
      }
    };
  },
  methods: {
       add(){
            this.info.show=true,
            this.info.title="轮播图添加",
            this.info.isAdd=true
        },
        // 从列表传递过来的edit方法
        edit(id){
            this.info.show=true,
            this.info.title="轮播图编辑",
            this.info.isAdd=false
          this.$refs.add.getDetailOne(id)
        }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
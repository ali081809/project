<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-list></v-list>
    <v-add :info="info"></v-add>
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
        show: true,
        title: "轮播图添加",
        isAdd: true
      }
    };
  },
  methods: {
       add(){
            this.info.isshow=true,
            this.info.title="轮播图添加",
            this.info.isAdd=true
        },
  },
  mounted() {}
};
</script>
<style scoped>
</style>
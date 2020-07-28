<template>
  <div>
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
        title: "会员编辑",
      }
    };
  },
  methods: {
    // 从list传递过来的编辑
    edit(id){
      this.info.show=true;
      this.$refs.add.getDetail(id)
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
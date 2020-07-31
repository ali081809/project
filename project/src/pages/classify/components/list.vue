<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="分类编号" width="180"></el-table-column>
      <el-table-column prop="catename" label="分类名称" width="180"></el-table-column>
      <el-table-column prop="" label="图片">
        <template slot-scope="scope">
          <img :src="$imgUrl+scope.row.img" alt="">
        </template>
      </el-table-column>
      <el-table-column prop label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <del-btn @comifirm="del(scope.row.id)"></del-btn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 引入请求的地址
import { requestcatelist, requestcatedelete } from "../../../util/request";
// 引入仓库
import { mapGetters, mapActions } from "vuex";
// 引入弹框
import { sucssessAlert, warningAlert } from "../../../util/alert";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      list: "classifyList/list"
    })
  },
  methods: {
    ...mapActions({
      requestCateList: "classifyList/requestCateList"
    }),
    // 点击修改
    edit(id) {
      this.$emit("edit", id);
    },
    // 点击删除
    del(id) {
      requestcatedelete({ id: id }).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          // 重新请求
          this.requestCateList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  },
  mounted() {
    this.requestCateList();
  }
};
</script>
<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>
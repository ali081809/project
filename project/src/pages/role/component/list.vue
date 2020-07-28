<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180"></el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <!-- 删除 -->
          <del-btn @comifirm="del(scope.row.id)"></del-btn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 引入请求的地址
import { requestRoleList, requestRoledel } from "../../../util/request";
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
      list: "roleList/list"
    })
  },
  methods: {
    ...mapActions({
      requeatList: "menuAdd/requestList",
      requeatRoleList: "roleList/requestRole"
    }),
    // 编辑
    edit(id) {
      this.$emit("edit", id);
    },
    // 删除
    del(id) {
      requestRoledel({ id: id }).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          // 重新请求
          this.requeatRoleList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  },
  mounted() {
    //   进入角色页面即可获取角色列表
    this.requeatRoleList().then(res => {});
  }
};
</script>
<style scoped>
</style>
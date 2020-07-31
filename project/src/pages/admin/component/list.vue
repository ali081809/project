<template>
  <div>
    <el-table :data="admin" border style="width: 100%">
      <el-table-column prop="id" label="用户编号" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="rolename" label="所属角色"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)">编辑</el-button>
          <!-- 删除 -->
          <del-btn @comifirm="del(scope.row.uid)"></del-btn>
        </template>
      </el-table-column>
    </el-table>
    <!--current-change: 当前页改变时会触发 -->
    <!-- :page-size="size" 一页的数量 -->
    <!-- :total="total" 数据的总数量 -->
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="cPage"
      :page-size="size"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
// 引入请求的地址
import { requestAdminList, requestAdmindel } from "../../../util/request";
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
      list: "menuAdd/list",
      rold: "roleList/list",
      admin: "adminList/list",
      size: "adminList/size",
      total: "adminList/total"
    })
  },
  methods: {
    ...mapActions({
      requeatList: "menuAdd/requestList",
      requeatRoleList: "roleList/requestRole",
      reqAdminList: "adminList/reqAdminList",
      reqTotal: "adminList/reqTotal",
      changePage: "adminList/changePage"
    }),
    // 获取当前页
    cPage(page) {
      console.log("page:", page);

      this.changePage(page);
      this.reqAdminList();
    },
    // 点击修改
    edit(id) {
      this.$emit("edit", id);
    },
    // 删除  需要重新获取总页数，实时刷新
    del(id) {
      requestAdmindel({ uid: id }).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          // 重新请求

          this.reqAdminList();
        //   this.changePage(1);
          //   总页数
          this.reqTotal();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  },
  mounted() {
    this.reqTotal();
    this.reqAdminList();
  }
};
</script>
<style scoped>
</style>
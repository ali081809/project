<template>
  <div>
    <el-table
      :data="list"
      border
      row-key="id"
      style="width: 100%"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
    <!-- children	指定子树为节点对象的某个属性值 -->
      <el-table-column prop="id" label="菜单编号" width="180"></el-table-column>
      <el-table-column prop="title" label="菜单名称"></el-table-column>
      <el-table-column prop label="菜单图标">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="菜单地址"></el-table-column>
      <el-table-column prop label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button><del-btn @comifirm="del(scope.row.id)"></del-btn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 引入请求的地址
import {
  requestMenuAdd,
  requestOneList,
  requestMenuDel
} from "../../../util/request";
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
      list: "menuAdd/list"
    })
  },
  methods: {
    ...mapActions({
      requeatList: "menuAdd/requestList"
    }),
    // 更新
    edit(id) {
      this.$emit("edit", id);
    },
    // 删除
    del(id) {
      requestMenuDel({ id: id }).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          // 重新请求
          this.requeatList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  },

  mounted() {
    this.requeatList();
  }
};
</script>
<style scoped>
</style>
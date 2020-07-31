<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="规格编号" width="180"></el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180"></el-table-column>
      <el-table-column prop label="规格属性">
        <template slot-scope="scope">
          <!-- {{scope.row.attrs}} -->
          <el-tag v-for="item in scope.row.attrs" :key="item">{{item}}</el-tag>
          <!-- <el-button type="primary" plain class="guige" ></el-button> -->
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
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="size"
      :total="total"
      @current-change="cPage"
    ></el-pagination>
  </div>
</template>
<script>
// 引入请求的地址
import { requestSpecsList, requestSpecsdel } from "../../../util/request";
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
      list: "guigeList/list",
      size: "guigeList/size",
      total: "guigeList/total"
    })
  },
  methods: {
    ...mapActions({
      requeatguigeList: "guigeList/requestGuigeList",
      requeatCont: "guigeList/requestCont",
      changePage: "guigeList/changePage"
    }),

    // 点击编辑
    edit(id) {
      this.$emit("edit", id);
    },

    // 当前页发生修改时触发
    cPage(page) {
      this.changePage(page);
      this.requeatguigeList();
    },

    // 点击删除
    del(id) {
      requestSpecsdel({ id: id }).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          // 重新请求
          this.requeatguigeList();
          // 重新请求总数
          this.requeatCont();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  },
  mounted() {
    this.requeatguigeList();
    this.requeatCont();
  }
};
</script>
<style scoped>
.guige {
  padding: 10px 2px;
}
</style>
<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="商品编号" width="180"></el-table-column>
      <el-table-column prop="goodsname" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="price" label="商品价格" width="180"></el-table-column>
      <el-table-column prop="market_price" label="市场价格" width="180"></el-table-column>
      <el-table-column prop label="图片">
        <template slot-scope="scope">
          <img :src="$imgUrl+scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop label="是否新品">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.isnew==1">是</el-button>
          <el-button type="info" v-else>否</el-button>
        </template>
      </el-table-column>
      <el-table-column prop label="是否热卖">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.ishot==1">是</el-button>
          <el-button type="info" v-else>否</el-button>
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
    <!-- 分页 -->
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
import {requestgoodsdelete} from "../../../util/request";
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
      list: "goods/list",
      size: "goods/size",
      total: "goods/total"
    })
  },
  methods: {
    ...mapActions({
      requeatgoodsList: "goods/requestGoodList",
      requeatCont: "goods/requestCont",
      changePage: "goods/changePage"
    }),

    // 点击编辑
    edit(id) {
      this.$emit("edit", id);
    },

    // 当前页发生修改时触发
    cPage(page) {
      this.changePage(page);
      this.requeatgoodsList();
    },

    // 点击删除
    del(id) {
      requestgoodsdelete({ id: id }).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          // 重新请求
          this.requeatgoodsList();
          // 重新请求总数
          this.requeatCont();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  },
  mounted() {
    this.requeatgoodsList();
    this.requeatCont();
  }
};
</script>
<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>
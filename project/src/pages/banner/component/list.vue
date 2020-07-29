<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="title" label="轮播图标题" width="180"></el-table-column>
      <el-table-column prop label="图片">
        <template slot-scope="scope">
          <img :src="$imgUrl+scope.row.img" alt />
        </template>
      </el-table-column>
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
import { requestbannerlist,requestbannerdelete } from "../../../util/request";
// 引入仓库
import { mapGetters, mapActions } from "vuex";
// 引入弹框
import { sucssessAlert, warningAlert } from "../../../util/alert";
export default {
  components: {},
  data() {
    return {};
  },
  // 轮播图列表
  computed: {
    ...mapGetters({
      list: "banner/list"
    })
  },
  // 获取轮播图列表方法
  methods: {
    ...mapActions({
      reqBannerList: "banner/reqBannerList"
    }),
    // 点击编辑
    edit(id){
      this.$emit("edit", id)
    },
    // 点击删除
    del(id){
      requestbannerdelete({id:id}).then(res=>{
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          // 重新请求
          this.reqBannerList();
        } else {
          warningAlert(res.data.msg);
        }
      })
    }
  },
  mounted() {
    this.reqBannerList();
  }
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
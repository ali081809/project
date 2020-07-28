<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="手机号" label-width="80px">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="昵称" label-width="80px">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="密码" label-width="80px">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="update">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 引入请求的地址
import {
  requestMemberOneList,
  requestMemberUpdate
} from "../../../util/request";
// 引入仓库
import { mapGetters, mapActions } from "vuex";
// 引入弹框
import { sucssessAlert, warningAlert } from "../../../util/alert";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      form: {
        nickname: "",
        phone: "",
        password: "",
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      list: "menber/list"
    })
  },
  methods: {
    ...mapActions({
      requeatMenberList: "menber/requestMenber"
    }),
    // 重置
    empty() {
      this.form = {
        nickname: "",
        phone: "",
        password: "",
        status: 1
      };
    },
    // 点击取消
    cancel() {
      this.info.show = false;
    },
    // 获取一条数据的信息
    getDetail(id) {
      requestMemberOneList({ uid: id }).then(res => {
        this.form = res.data.list;
        res.data.list.password = "";
      });
    },

    // 点击修改
    update() {
      requestMemberUpdate(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatMenberList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
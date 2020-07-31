<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="所属角色" label-width="80px" :rules="[
{ required: true}
]">
          <el-select v-model="form.roleid" placeholder="请选择">
            <el-option v-for="item in rold" :key="item.id" :label="item.rolename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户名" label-width="80px" :rules="[
{ required: true}
]">
          <el-input v-model="form.username" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input v-model="form.password" autocomplete="off" clearable show-password></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">确 定</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 引入请求的地址
import {
  requestAdminAdd,
  requestAdminOneList,
  requestAdminUpdate
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
        roleid: "",
        username: "",
        password: "",
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      list: "menuAdd/list",
      rold: "roleList/list",
      admin: "adminList/list"
    })
  },
  methods: {
    ...mapActions({
      requeatList: "menuAdd/requestList",
      requeatRoleList: "roleList/requestRole",
      reqAdminList: "adminList/reqAdminList",
      reqTotal: "adminList/reqTotal",
    }),
    // 点击取消
    cancel() {
      this.info.show = false;
      if (!this.isAdd) {
        this.empty();
      }
    },
    // 定义重置的方法
    empty() {
      this.form = {
        roleid: "",
        username: "",
        password: "",
        status: 1
      };
    },
    // 点击添加
    add() {
      requestAdminAdd(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.reqAdminList();
          //   总页数
          this.reqTotal();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },

    // 向父级传获取每条数据
    getAdminDetail(id) {
      requestAdminOneList({ uid: id }).then(res => {
        this.form = res.data.list;
        res.data.list.password = "";
      });
    },
    // 点击修改
    update() {
      requestAdminUpdate(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.reqAdminList();
        } else {
          warningAlert(res.data.msg);
        }
        
      });
    }
  },
  mounted() {
    this.requeatRoleList();
  }
};
</script>
<style scoped>
</style>
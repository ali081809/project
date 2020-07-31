<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isshow">
      <el-form :model="form">
        <el-form-item label="角色名称" label-width="80px">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" label-width="80px">
          <!-- :default-checked-keys="[5]" 默认选中的数组-->
          <el-tree
            :data="list"
            show-checkbox
            node-key="id"
            :default-checked-keys="defaultKey"
            :props="defaultProps"
            ref="tree"
          ></el-tree>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <!--:active-value="1"是启用   :inactive-value="2" 是禁用-->
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添加</el-button>
        <el-button type="primary" @click="update" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 引入请求的地址
import {
  requestRoleAdd,
  requestRoleOneList,
  requestRoleUpdate
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
        rolename: "",
        menus: "",
        status: 1
      },
      defaultKey: [],
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  computed: {
    ...mapGetters({
      list: "menuAdd/list",
      rold: "roleList/list"
    })
  },
  methods: {
    ...mapActions({
      requeatList: "menuAdd/requestList",
      requeatRoleList: "roleList/requestRole"
    }),
    // 点击取消
    cancel() {
      this.info.isshow = false;
      if (!this.info.isAdd) {
        this.empty();
      }
    },
    // 重置的方法
    empty() {
      this.form = {
        rolename: "",
        menus: "",
        status: 1
      };
      //   将默认的选中置空
      this.$refs.tree.setCheckedKeys([]);
    },

    // 添加角色
    add() {
      //    将tree获取到的key值赋值给menus
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      // console.log(JSON.stringify(this.$refs.tree.getCheckedKeys()))
      requestRoleAdd(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.list);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatRoleList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    // 获取角色一条数据的方法
    getRoleDetail(id) {
      requestRoleOneList({ id: id }).then(res => {
        // form表单里没有id
        this.form = res.data.list;
        // 修改时需要按id进行修改，所以要给form表单赋值id
        this.form.id = id;
        // 将默认选择的default-checked-keys赋给属性defaultKey
        console.log("JSON.parse(res.data.list.menus)：",res.data.list);
        this.defaultKey = JSON.parse(res.data.list.menus);
      });
    },

    // 修改角色
    update() {
        // 获取到现修改选中的值
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      requestRoleUpdate(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatRoleList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }

    // 删除角色
  },
  mounted() {
    //   判断是否菜单列表是否存在，不存在则重新请求
    if (this.list.length == 0) {
      this.requeatList();
    }
  }
};
</script>
<style scoped>
</style>
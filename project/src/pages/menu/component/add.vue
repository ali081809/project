<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="菜单名称" label-width="80px">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" label-width="80px">
          <el-select v-model="form.pid" placeholder="请选择">
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态 -->
            <el-option v-for="item in list" :key="item.id" :label="item.title" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型" label-width="80px">
          <el-radio v-model="form.type" :label="1">目录</el-radio>
          <el-radio v-model="form.type" :label="2">菜单</el-radio>
        </el-form-item>
        <el-form-item label="菜单图标" label-width="80px" v-if="form.type==1">
          <el-select v-model="form.icon" placeholder="请选择菜单图标">
            <el-option v-for="item in icons" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单地址" label-width="80px" v-else>
          <el-select v-model="form.url" placeholder="请选择菜单路径">
            <el-option v-for="item in urls" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd==true">添 加</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 引入请求的地址
import {
  requestMenuAdd,
  requestOneList,
  requestMenuUpdate
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
      //图标集合
      icons: [
        "el-icon-setting",
        "el-icon-s-help",
        "el-icon-s-operation",
        "el-icon-s-grid"
      ],
      //路由集合
      urls: [
        "/menu",
        "/guige",
        "/role",
        "/classify",
        "/member",
        "/goods",
        "/banner",
        "/seckill"
      ],
      form: {
        pid: 0,
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1
      }
    };
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
    // 点击取消
    cancel() {
      this.info.show = false;
      if(!this.info.isAdd){
        this.empty()
      }
    },
    //重置内容
    empty() {
      this.form = {
        pid: 0,
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1
      };
    },
    add() {
      requestMenuAdd(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    // 获取一条数据的信息
    getDetail(id) {
      requestOneList({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
      });
    },

    // 点击修改
    update() {
      requestMenuUpdate(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatList();
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
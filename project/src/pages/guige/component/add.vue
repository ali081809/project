<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="规格名称" label-width="80px">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格属性" label-width="80px" class="guige_type">
          <el-input v-model="guige" placeholder="请输入内容"></el-input>
          <el-button type="primary" class="btn" @click="addtype">新增规格属性</el-button>
        </el-form-item>
        <!-- 动态 -->
        <el-form-item
          label="规格属性"
          v-for="item in guigetype"
          :key="item"
          label-width="80px"
          class="guige_type"
        >
          <template>
            <el-input :label="item" :value="item" class="input"></el-input>
            <el-button type="danger" class="btn" @click="del(item)">删除</el-button>
          </template>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">确 定</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 引入请求的地址
import {
  requestSpecsAdd,
  requestSpecsOneList,
  requestSpecsUpdate
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
      guigetype: [],
      guige: "",
      form: {
        specsname: "",
        attrs: "",
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      list: "guigeList/list"
    })
  },
  methods: {
    ...mapActions({
      requeatguigeList: "guigeList/requestGuigeList",
      requeatCont: "guigeList/requestCont",
    }),
    //   置空
    empty() {
      this.guigetype = [];
      this.form = {
        specsname: "",
        attrs: "",
        status: 1
      };
    },
    // 点击取消
    cancel() {
      this.info.show = false;
      if (!this.info.isAdd) {
        this.empty();
      }
    },
    //   新增规格属性
    addtype() {
      if (!this.guige) {
        warningAlert("规格属性不能为空！");
        return;
      }
      this.guigetype.push(this.guige);
      this.guige = "";
    },
    // 点击删除规格属性
    del(id) {
      for (var i = 0; i < this.guigetype.length; i++) {
        if (this.guigetype[i] == id) {
          this.guigetype.splice(i, 1);
        }
      }
    },
    // 点击添加
    add() {
      if (!this.form.specsname || this.guigetype.length == 0) {
        warningAlert("规格名称或规格属性不能为空！");
        return;
      }
      this.form.attrs = JSON.stringify(this.guigetype);
      // console.log(this.form.attrs);
      requestSpecsAdd(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatguigeList();
          // 重新请求总数
          this.requeatCont()
        } else {
          warningAlert(res.data.msg);
        }
      });
    },

    // 获取一条数据信息
    getOneDetail(id) {
      requestSpecsOneList({ id: id }).then(res => {
        this.form = res.data.list[0];
        this.guigetype = JSON.parse(res.data.list[0].attrs);
        this.attrs = this.guigetype;
      });
    },

    // 点击修改
    update() {
      if (!this.form.specsname || this.guigetype.length == 0) {
        warningAlert("规格名称或规格属性不能为空！");
        return;
      }
      this.form.attrs = JSON.stringify(this.guigetype);
      requestSpecsUpdate(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatguigeList();
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
.guige_type {
  position: relative;
}
.btn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isshow">
      <el-form :model="form">
        <el-form-item label="活动名称" label-width="80px">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动期限" label-width="80px">
          <div class="block">
            <el-date-picker
              v-model="time"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-form-item>
        <!-- 一级分类 -->
        <el-form-item label="一级分类" label-width="80px">
          <el-select v-model="form.first_cateid" @change="changeFirstCateId()">
            <el-option label="请选择分类" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option
              v-for="item in classifList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 二级分类 -->
        <el-form-item label="二级分类" label-width="80px">
          <el-select v-model="form.second_cateid" @change="changeSeconCateId()">
            <el-option label="请选择分类" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option
              v-for="item in secondArr"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 商品 -->
        <el-form-item label="商品" label-width="80px">
          <el-select v-model="form.goodsid">
            <el-option label="请选择商品" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option
              v-for="item in goods"
              :key="item.id"
              :label="item.goodsname"
              :value="item.id"
            ></el-option>
          </el-select>
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
  requestseckadd,
  requestgoodslist,
  requestseckinfo,
  requestseckedit
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
      // 二级分类数组
      secondArr: [],
      //   商品的数组
      goods: [],
      //   时间
      time: [],
      form: {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      // 商品分类列表
      classifList: "classifyList/list",
      //  商品列表
      goodsList: "goods/list"
    })
  },
  mounted() {
    //   判断分类是否存在，不存在则重新请求
    if (this.classifList.length == 0) {
      this.requeatclassif();
    }
    //   判断商品列表是否存在，不存在则重新请求
    if (this.goodsList.length == 0) {
      this.requeatgoodsList(true);
    }
  },
  methods: {
    ...mapActions({
      // 商品分类方法
      requeatclassif: "classifyList/requestCateList",
      // 商品列表方法
      requeatgoodsList: "goods/requestGoodList",
      //   秒杀列表方法
      requeatList: "seckill/requessecklist"
    }),

    // 修改一级分类
    changeFirstCateId(bool) {
      var index = this.classifList.findIndex(
        item => item.id == this.form.first_cateid
      );

      //   二级分类数组
      this.secondArr = this.classifList[index].children;

      //   判断一级分类是否有值，换值之后对应二级分类应该置空
      if (!bool) {
        this.form.second_cateid = "";
      }
    },

    // 修改二级分类，获取商品名称
    changeSeconCateId(bool) {
      requestgoodslist({
        fid: this.form.first_cateid,
        sid: this.form.second_cateid
      }).then(res => {
        //   将请求得到的id赋给form.goodsid
        // res.data.list.id = this.form.goodsid;
        this.goods = res.data.list;
      });

      //   判断二级分类是否有值，换值之后对应商品应该置空
      if (!bool) {
        this.form.goodsid = "";
      }
    },
    // 点击取消
    cancel() {
      this.info.isshow = false;
      if (!this.info.isAdd) {
        this.empty();
      }
    },
    // 重置的方法
    empty() {
      (this.time = []),
        (this.form = {
          title: "",
          begintime: "",
          endtime: "",
          first_cateid: "",
          second_cateid: "",
          goodsid: "",
          status: 1
        });
      //   将默认的选中置空
      //   this.$refs.tree.setCheckedKeys([]);
    },

    // 添加角色
    add() {
      //   new Date().getTime();
      this.form.begintime = Number(this.time[0]);
      this.form.endtime = Number(this.time[1]);
      requestseckadd(this.form).then(res => {
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
    // 获取角色一条数据的方法
    getRoleDetail(id) {
      requestseckinfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        var begintime = new Date(JSON.parse(res.data.list.begintime));
        var endtime = new Date(JSON.parse(res.data.list.endtime));
        // 转换时间戳
        this.time = [begintime, endtime];
        // 二级分类
        this.changeFirstCateId(true);
        // 商品名称
        this.changeSeconCateId(true);
      });
    },

    // 修改角色
    update() {
      this.form.begintime = Number(this.time[0]);
      this.form.endtime = Number(this.time[1]);
      requestseckedit(this.form).then(res => {
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

  }
};
</script>
<style scoped>
</style>
<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show" @opened="createEditor">
      <el-form :model="form">
        <!-- 一级分类 -->
        <el-form-item label="一级分类" label-width="80px">
          <el-select v-model="form.first_cateid" @change="changeFirstCateId()">
            <el-option label="请选择" value disabled></el-option>
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
          <el-select v-model="form.second_cateid">
            <el-option label="请选择" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option
              v-for="item in seconList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" label-width="80px">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" label-width="80px">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" label-width="80px">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 图片 -->
        <el-form-item label="图片" label-width="80px">
          <!--  :before-upload="beforeAvatarUpload" 上传之前的操作-->
          <el-upload class="avatar-uploader" action="#" :on-change="changeImg">
            <div class="el-upload">
              <!-- imgUrl是临时展示的图片，不是要传给后端的图片 -->
              <img v-if="imgUrl" :src="imgUrl" class="avatar" />
              <!-- +号 -->
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </el-upload>
        </el-form-item>

        <!-- 商品规格 -->
        <el-form-item label="商品规格" label-width="80px">
          <el-select v-model="form.specsid" @change="changeSpecsId()">
            <el-option label="请选择" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option
              v-for="item in guigeList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 规格属性-->
        <el-form-item label="规格属性" label-width="80px">
          <el-select v-model="form.specsattr" multiple>
            <el-option label="请选择" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option v-for="item in guigeArr" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否新品" label-width="80px">
          <el-switch v-model="form.isnew" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label="是否热卖" label-width="80px">
          <el-switch v-model="form.ishot" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label="商品描述" label-width="80px">
          <div id="dec"></div>
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
  requestgoodsadd,
  requestgoodsedit,
  requestgoodsinfo
} from "../../../util/request";
// 引入仓库
import { mapGetters, mapActions } from "vuex";
// 引入弹框
import { sucssessAlert, warningAlert } from "../../../util/alert";
// 引入富文本编辑器
import E from "wangeditor";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      // 富文本编辑
      editor: null,
      // 临时展示的图片
      imgUrl: "",
      // 二级分类
      seconList: [],
      // 规格属性
      guigeArr: [],

      form: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: 0,
        market_price: 0,
        img: "",
        description: "",
        specsid: "",
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      // 商品分类列表
      classifList: "classifyList/list",
      // 规格分类列表
      guigeList: "guigeList/list",
    })
  },
  mounted() {
    if (this.classifList.length == 0) {
      this.requeatclassif();
    }
    if (this.guigeList.length == 0) {
      this.requeatguigeList();
    }
  },
  methods: {
    ...mapActions({
      // 商品分类方法
      requeatclassif: "classifyList/requestCateList",
      // 商品规格方法
      requeatguigeList: "guigeList/requestGuigeList",
      // 商品列表方法
       requeatgoodsList: "goods/requestGoodList",
      //  获取商品的总数
       requeatCont: "goods/requestCont",
    }),
    //   置空
    empty() {
      // 临时展示的图片
      (this.imgUrl = ""),
        // 二级分类
        (this.seconList = []),
        // 规格属性
        (this.guigeArr = []),
        // 一级分类的属性
        (this.first_id = ""),
        // 置空富文本编辑
        this.editor.txt.html("");
      // 置空表单
      this.form = {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: 0,
        market_price: 0,
        img: "",
        description: "",
        specsid: "",
        specsattr: [],
        isnew: 1,
        ishot: 1,
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

    // 修改一级分类,获取对应的二级分类列表
    changeFirstCateId(bool) {
      // this.form.first_cateid = this.first_id;
      var index = this.classifList.findIndex(
        item => item.id == this.form.first_cateid
      );
      this.seconList = this.classifList[index].children;
      // 当true时，一级分类有值，二级分类就有对应的值，不传true时二级分类为空
      if (!bool) {
        this.form.second_cateid = "";
      }
    },

    // 修改一级规格，获取对应的二级硅谷属性列表
    changeSpecsId(bool) {
      var specsindex = this.guigeList.findIndex(
        item => item.id == this.form.specsid
      );
      this.guigeArr = this.guigeList[specsindex].attrs;
      if (!bool) {
        this.form.specsattr = [];
      }
    },

    // 修改图片
    changeImg(e) {
      // 限制图片类型
      var ImgArr = [".png", ".jpg", ".gif", ".jpeg"];
      // 获取文件的后缀名
      var extname = e.name.slice(e.name.lastIndexOf("."));
      if (!ImgArr.some(item => item == extname)) {
        warningAlert("上传文件必须是图片！");
      }
      // 限制图片的大小不超过2M
      if (e.size > 2 * 1024 * 1024) {
        warningAlert("上传的图片不能超过2M!");
        return;
      }

      var file = e.raw;
      // 临时的文件展示
      this.imgUrl = URL.createObjectURL(file);
      this.form.img = file;
    },

    // 创建编辑器
    createEditor() {
      this.editor = new E("#dec");
      this.editor.create();
      // 取值，动画==》按添加按钮动画结束时会一直添加
      this.editor.txt.html(this.form.description); //有值时富文本框才会出现
    },

    // 点击添加
    add() {
      // 富文本编辑
      this.form.description = this.editor.txt.html();
      // 规格属性
      this.form.specsattr = JSON.stringify(this.guigeArr);
      requestgoodsadd(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatgoodsList();
          // 重新请求总数
          this.requeatCont()
        } else {
          warningAlert(res.data.msg);
        }
      });
    },

    // 获取一条数据信息
    getOneDetail(id) {
      requestgoodsinfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id=id;
        // 调用一级分类函数，计算出对应的二级分类数组
        this.changeFirstCateId(true);

        // 调用一级规格函数，计算出对应的规格属性数组
        this.changeSpecsId(true);
        // 规格属性，需要解开字符串
        this.form.specsattr = JSON.parse(res.data.list.specsattr);
        // 临时展示的图片
        this.imgUrl = this.$imgUrl+res.data.list.img;
      });
    },

    // 点击修改
    update() {
      // 富文本编辑
      this.form.description = this.editor.txt.html();
      // 规格属性
      this.form.specsattr = JSON.stringify(this.guigeArr);
      requestgoodsedit(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.requeatgoodsList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
  }
};
</script>
<style scoped>
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
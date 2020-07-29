<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="标题" label-width="80px">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

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
  requestbanneradd,
  requestbannerinfo,
  requestbanneredit
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
      imgUrl: "",
      form: {
        title: "",
        img: "",
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      list: "banner/list"
    })
  },
  methods: {
    ...mapActions({
      reqBannerList: "banner/reqBannerList"
    }),
    // 点击取消
    cancel() {
      this.info.show = false;
      if (!this.info.isAdd) {
        this.empty();
      }
    },
    // 重置
    empty() {
      this.imgUrl= "",
      this.form = {
        title: "",
        img: "",
        status: 1
      };
    },
    // 点击添加
    add() {
      requestbanneradd(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.reqBannerList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },

    // 获取轮播图的一条数据信息
    getDetailOne(id) {
      requestbannerinfo({ id: id }).then(res => {
        // 传值给form
        this.form = res.data.list;
        // 添加id
        this.form.id = id;

        // 图片的临时展示
        this.imgUrl = this.$imgUrl + res.data.list.img;
      });
    },

    // 点击修改
    update() {
      requestbanneredit(this.form).then(res => {
        if (res.data.code == 200) {
          sucssessAlert(res.data.msg);
          //   重置表单
          this.empty();
          //   弹框消失
          this.cancel();
          // 重新请求
          this.reqBannerList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
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
    }
  },
  mounted() {}
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
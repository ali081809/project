webpackJsonp([9],{"2Bvk":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("4YfN"),n=i.n(a),s=i("D/cR"),o=i("fUgm"),r=i("BGi1"),l={components:{},data:function(){return{}},computed:n()({},Object(o.c)({list:"classifyList/list"})),methods:n()({},Object(o.b)({requestCateList:"classifyList/requestCateList"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;Object(s.G)({id:t}).then(function(t){200==t.data.code?(Object(r.a)(t.data.msg),e.requestCateList()):Object(r.b)(t.data.msg)})}}),mounted:function(){this.requestCateList()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":"id",border:"",lazy:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"id",label:"分类编号",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"catename",label:"分类名称",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("img",{attrs:{src:t.$imgUrl+e.row.img,alt:""}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("del-btn",{on:{comifirm:function(i){return t.del(e.row.id)}}})]}}])})],1)],1)},staticRenderFns:[]};var d=i("C7Lr")(l,c,!1,function(t){i("dvwS")},"data-v-b9e3f13c",null).exports,u={props:["info"],components:{},data:function(){return{imgUrl:"",form:{pid:"",catename:"",img:null,status:1}}},computed:n()({},Object(o.c)({list:"classifyList/list"})),methods:n()({},Object(o.b)({requestCateList:"classifyList/requestCateList"}),{cancel:function(){this.info.show=!1,this.info.isAdd||this.empty()},empty:function(){this.imgUrl="",this.form={pid:"",catename:"",img:null,status:1}},getCateinfo:function(t){var e=this;Object(s.I)({id:t}).then(function(i){e.form=i.data.list,e.form.id=t,e.imgUrl=e.$imgUrl+i.data.list.img})},add:function(){var t=this;Object(s.F)(this.form).then(function(e){200==e.data.code?(Object(r.a)(e.data.msg),t.empty(),t.cancel(),t.requestCateList()):Object(r.b)(e.data.msg)})},update:function(){var t=this;Object(s.H)(this.form).then(function(e){200==e.data.code?(Object(r.a)(e.data.msg),t.empty(),t.cancel(),t.requestCateList()):Object(r.b)(e.data.msg)})},changeImg:function(t){var e=t.name.slice(t.name.lastIndexOf("."));if([".png",".jpg",".gif",".jpeg"].some(function(t){return t==e})||Object(r.b)("上传文件必须是图片！"),t.size>2097152)Object(r.b)("上传的图片不能超过2M!");else{var i=t.raw;this.imgUrl=URL.createObjectURL(i),this.form.img=i}}}),mounted:function(){this.requestCateList()}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"上级分类","label-width":"80px"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[i("el-option",{attrs:{label:"顶级菜单",value:0}}),t._v(" "),t._l(t.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"分类名称","label-width":"80px"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.catename,callback:function(e){t.$set(t.form,"catename",e)},expression:"form.catename"}})],1),t._v(" "),0!=t.form.pid?i("el-form-item",{attrs:{label:"图片","label-width":"80px"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"#","on-change":t.changeImg}},[i("div",{staticClass:"el-upload"},[t.imgUrl?i("img",{staticClass:"avatar",attrs:{src:t.imgUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])])],1):t._e(),t._v(" "),i("el-form-item",{attrs:{label:"状态","label-width":"80px"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.cancel()}}},[t._v("取 消")]),t._v(" "),1==t.info.isAdd?i("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")]):i("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var m={components:{vList:d,vAdd:i("C7Lr")(u,f,!1,function(t){i("Q1yF")},"data-v-02784f96",null).exports},data:function(){return{info:{show:!1,title:"商品分类添加",isAdd:!0}}},methods:{add:function(){this.info.show=!0,this.info.title="商品分类添加",this.info.isAdd=!0},edit:function(t){this.info.show=!0,this.info.title="商品分类编辑",this.info.isAdd=!1,this.$refs.add.getCateinfo(t)}},mounted:function(){}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-button",{attrs:{type:"primary"},on:{click:this.add}},[this._v("添加")]),this._v(" "),e("v-list",{on:{edit:this.edit}}),this._v(" "),e("v-add",{ref:"add",attrs:{info:this.info}})],1)},staticRenderFns:[]};var v=i("C7Lr")(m,p,!1,function(t){i("vA7J")},"data-v-7bd9fa39",null);e.default=v.exports},Q1yF:function(t,e){},dvwS:function(t,e){},vA7J:function(t,e){}});
//# sourceMappingURL=9.81c309a8011066f264d4.js.map
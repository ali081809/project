webpackJsonp([7],{Bea9:function(t,e){},FDuD:function(t,e){},Fpg1:function(t,e){},MWAP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("4YfN"),l=i.n(o),n=i("D/cR"),a=i("fUgm"),r=i("BGi1"),s={components:{},data:function(){return{}},computed:l()({},Object(a.c)({list:"menuAdd/list"})),methods:l()({},Object(a.b)({requeatList:"menuAdd/requestList"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;Object(n.l)({id:t}).then(function(t){200==t.data.code?(Object(r.a)(t.data.msg),e.requeatList()):Object(r.b)(t.data.msg)})}}),mounted:function(){this.requeatList()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:"","row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"id",label:"菜单编号",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"菜单名称"}}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"菜单图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("i",{class:t.row.icon})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"url",label:"菜单地址"}}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),i("del-btn",{on:{comifirm:function(i){return t.del(e.row.id)}}})]}}])})],1)],1)},staticRenderFns:[]};var u=i("C7Lr")(s,c,!1,function(t){i("FDuD")},"data-v-0fb0d208",null).exports,d={props:["info"],components:{},data:function(){return{icons:["el-icon-setting","el-icon-s-help","el-icon-s-operation","el-icon-s-grid"],urls:["/menu","/admin","/guige","/role","/classify","/member","/goods","/banner","/seckill"],form:{pid:0,title:"",icon:"",type:1,url:"",status:1}}},computed:l()({},Object(a.c)({list:"menuAdd/list"})),methods:l()({},Object(a.b)({requeatList:"menuAdd/requestList"}),{cancel:function(){this.info.show=!1,this.info.isAdd||this.empty()},empty:function(){this.form={pid:0,title:"",icon:"",type:1,url:"",status:1}},add:function(){var t=this;Object(n.k)(this.form).then(function(e){200==e.data.code?(Object(r.a)(e.data.msg),t.empty(),t.cancel(),t.requeatList()):Object(r.b)(e.data.msg)})},getDetail:function(t){var e=this;Object(n.o)({id:t}).then(function(i){e.form=i.data.list,e.form.id=t})},update:function(){var t=this;Object(n.n)(this.form).then(function(e){200==e.data.code?(Object(r.a)(e.data.msg),t.empty(),t.cancel(),t.requeatList()):Object(r.b)(e.data.msg)})}}),mounted:function(){}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"菜单名称","label-width":"80px"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"上级菜单","label-width":"80px"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[i("el-option",{attrs:{label:"顶级菜单",value:0}}),t._v(" "),t._l(t.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"菜单类型","label-width":"80px"}},[i("el-radio",{attrs:{label:1},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("目录")]),t._v(" "),i("el-radio",{attrs:{label:2},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("菜单")])],1),t._v(" "),1==t.form.type?i("el-form-item",{attrs:{label:"菜单图标","label-width":"80px"}},[i("el-select",{attrs:{placeholder:"请选择菜单图标"},model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}},t._l(t.icons,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1):i("el-form-item",{attrs:{label:"菜单地址","label-width":"80px"}},[i("el-select",{attrs:{placeholder:"请选择菜单路径"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}},t._l(t.urls,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"状态","label-width":"80px"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.cancel()}}},[t._v("取 消")]),t._v(" "),1==t.info.isAdd?i("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")]):i("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var m={components:{vList:u,vAdd:i("C7Lr")(d,f,!1,function(t){i("Fpg1")},"data-v-12a8484e",null).exports},data:function(){return{info:{show:!1,isAdd:!1,title:"菜单添加"}}},methods:{add:function(){this.info.show=!0,this.info.isAdd=!0,this.info.title="菜单添加"},edit:function(t){this.info.show=!0,this.info.title="菜单编辑",this.info.isAdd=!1,this.$refs.add.getDetail(t)}},mounted:function(){}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-button",{attrs:{type:"primary"},on:{click:this.add}},[this._v("添加")]),this._v(" "),e("v-list",{on:{edit:this.edit}}),this._v(" "),e("v-add",{ref:"add",attrs:{info:this.info}})],1)},staticRenderFns:[]};var b=i("C7Lr")(m,p,!1,function(t){i("Bea9")},"data-v-61b5a0f0",null);e.default=b.exports}});
//# sourceMappingURL=7.fea4714c682055f9667f.js.map
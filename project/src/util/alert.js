import Vue from "vue"
var vm=new Vue();

// 成功的弹框
export const sucssessAlert=(msg)=>{
    vm.$message({
        message: msg,
        type: 'success'
    });
}
// 警告的弹框
export const warningAlert=(msg)=>{
    vm.$message({
        message: msg,
        type: 'warning'
      });
}
// 错误的弹框
export const errorAlert=(msg)=>{
    vm.$message.error(msg);
}
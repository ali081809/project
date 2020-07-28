import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {state,mutations,getters} from "./mutations"
import actions from "./actions"
import menuAdd from "./modules/menuAdd"
import roleList from "./modules/roleList"
import adminList from "./modules/admin"
import classifyList from "./modules/classifyList"
import guigeList from "./modules/guige"
import menber from "./modules/menber"


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        menuAdd,
        roleList,
        adminList,
        classifyList,
        guigeList,
        menber
    }
})
export const state = {
    // 判断数据是否存在，存在就解开字符串，不存在则返回空
    // user:null
    user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")): null
}

export const mutations = {
    changeUser(state, user) {
        state.user = user
        // 将数据存到本地，以字符串的方式存入
        sessionStorage.setItem("user", JSON.stringify(state.user))
    }
}

export const getters = {

    user(state) {
        return state.user
    }

}
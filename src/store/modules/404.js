const state = {
  error: [],
  randomNum: 0
};

const getters = {};

const mutations = {
  //登录弹窗显示隐藏
  error(state, data) {
    state.error = Object.assign({}, data);
  },
  randomNum(state, data) {
    state.randomNum = data;
  }
};

const actions = {
  setError({ commit }, msg) {
    commit("error", msg);
  },
  setRandomNum({ commit }, msg) {
    commit("randomNum", msg);
  }
};

export default {
  namespaced: true, //注册login空间模块
  state,
  getters,
  actions,
  mutations
};

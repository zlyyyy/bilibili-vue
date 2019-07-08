// const modules = {
//     donghua,
//     bangumi,
//     guochuang
// }

const state = {
  aid: "",
  cid: ""
};

const getters = {};

const mutations = {
  //登录弹窗显示隐藏
  setAid(state, data) {
    state.aid = Number(data);
  },
  setCid(state, data) {
    state.cid = data;
  }
};

const actions = {
  getAid({ commit }, msg) {
    commit("setAid", msg);
  },
  getCid({ commit }, msg) {
    commit("setCid", msg);
  }
};

export default {
  namespaced: true, //注册login空间模块
  state,
  getters,
  actions,
  mutations
};

import { getUserInfo, getVipInfo } from "../../api";
const state = {
  loginShow: false, //登录弹窗，默认隐藏
  userName: "", //用户名
  password: "", //密码
  signIn: "", //0为未登录，1为已登录
  proInfo: [], //个人信息
  topInfo: [], //会员推荐信息
  nowindex: 0 //登录框tab
};

const getters = {};

const mutations = {
  //登录弹窗显示隐藏
  SET_LOGIN_SHOW: state => {
    state.loginShow = state.loginShow ? false : true;
  },
  SET_LOGIN_TAB: (state, data) => {
    state.nowindex = data;
  },
  //登录状态
  SET_SIGNIN: (state, data) => {
    state.signIn = data.signIn;
  },
  //个人信息
  SET_USER_INFO: (state, data) => {
    state.proInfo = data.proInfo;
  },

  //会员推荐信息
  SET_VIP_INFO: (state, data) => {
    state.topInfo = data.topInfo;
  },

  //用户名
  SET_USERNAME: (state, data) => {
    state.userName = data;
  },

  //用户密码
  SET_PASSWORD: (state, data) => {
    state.password = data;
  }
};

const actions = {
  setSignIn({ commit }, signin) {
    commit("SET_SIGNIN", signin);
  },
  setUserInfo({ commit }) {
    getUserInfo().then(res => {
      commit("SET_USER_INFO", {
        proInfo: res.data //state传入个人信息
      });
    });
  },
  setVipInfo({ commit }) {
    getVipInfo().then(res => {
      commit("SET_VIP_INFO", {
        topInfo: res.data //state传入大会员推荐信息
      });
    });
  },
  //退出登录
  signOut({ commit }) {
    localStorage.setItem("signIn", 0);
    window.location.reload();
    commit("SET_USER_INFO", {
      proInfo: [] //state传入个人信息
    });
    commit("SET_VIP_INFO", {
      topInfo: [] //state传入大会员推荐信息
    });
  }
};

export default {
  namespaced: true, //注册login空间模块
  state,
  getters,
  actions,
  mutations
};

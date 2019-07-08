import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";
import modules from "./modules";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";
// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // 默认导出vuex模块
  modules,
  strict: debug
  // plugins: debug ? [createLogger()] : []
  // 是否开启严格模式
});

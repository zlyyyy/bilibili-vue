import * as types from "./mutation-types";

const mutations = {
  [types.SET_SCROLL_TOP](state, data) {
    //滚动条距离顶部高度
    state.scrollTop = data;
  },
  [types.SET_AD_SLIDE](state, data) {
    //广告位轮播图
    state.module[data.id].ad.data = data.data;
  },
  [types.SET_SLIDE](state, slide) {
    //首页轮播图
    state.slide.data = slide;
  },
  [types.SET_POPULARIZE](state, popularize) {
    //推广模块
    state.popularize = popularize;
  },
  [types.SET_RANKING_INDEX](state, data) {
    //推荐昨日、三日、一周排行轮播图
    state.recommend.rec = data.data;
    state.recommend.day = data.day;
  },
  [types.SET_ONLINE](state, online) {
    //当前在线
    state.online = online;
  },
  [types.SET_STOREY_DATA](state, data) {
    //动态区域数据-新动态、最新投稿
    state.module[data.id].data = data.data;
  },
  [types.SET_RANKING_DATA](state, data) {
    // console.log(data)
    //相关排行榜
    switch (data.original) {
      case 0:
        state.module[data.id].rankAllData = data.data;
        break;
      case 1:
        state.module[data.id].rankOriginalData = data.data;
        break;
      case undefined:
        state.module[data.id].rankBangumiData = data.data;
        break;
      default:
        break;
    }
  },
  [types.SET_TIMELINE_DATA](state, data) {
    const id = data.id;
    //更新时间表
    state.module[id].timeline.data = data.data;
  },
  [types.SET_ELE_OFFSETTOP](state, data) {
    //设置浮动导航栏各个模块定位
    state.module[data.index].offsetTop = data.data;
    // console.log(data.data)
  }
};
export default mutations;

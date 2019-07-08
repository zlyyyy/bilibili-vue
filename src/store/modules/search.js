import Vue from "vue";
import { getSearchResult, getSuggest, getSeason } from "../../api";

const state = {
  //分类导航
  searchWord: "",
  searchMenu: [
    {
      title: "综合",
      path: "/search/all",
      resultNum: 0,
      type: "all",
      data: []
    },
    {
      title: "视频",
      path: "/search/video",
      resultNum: 0,
      type: "video",
      data: []
    },
    {
      title: "番剧",
      path: "/search/bangumi",
      resultNum: 0,
      type: "media_bangumi",
      data: []
    },
    {
      title: "影视",
      path: "/search/pgc",
      resultNum: 0,
      type: "media_ft",
      data: []
    },
    {
      title: "直播",
      path: "/search/live",
      resultNum: 0,
      type: "live",
      data: []
    },
    {
      title: "专栏",
      path: "/search/article",
      resultNum: 0,
      type: "article",
      data: []
    },
    {
      title: "话题",
      path: "/search/topic",
      resultNum: 0,
      type: "topic",
      data: []
    },
    {
      title: "用户",
      path: "/search/upuser",
      resultNum: 0,
      type: "bili_user",
      data: []
    },
    {
      title: "相簿",
      path: "/search/photo",
      resultNum: 0,
      type: "photo",
      data: []
    }
  ],
  suggest: [], //建议搜索
  hoverBar: 0,
  hoverIndex: 0,
  allResult: [],
  menuShow: true
};

const getters = {};

const mutations = {
  SET_TOP_NUM: (state, data) => {
    const topNum = state.searchMenu;
    //视频
    topNum[1].resultNum = data.video;
    //番剧
    topNum[2].resultNum = data.media_bangumi;
    //影视
    topNum[3].resultNum = data.movie;
    //直播
    topNum[4].resultNum = data.live;
    //专栏
    topNum[5].resultNum = data.article;
    //话题
    topNum[6].resultNum = data.topic;
    //用户
    topNum[7].resultNum = data.bili_user;
    //相簿
    topNum[8].resultNum = data.photo;
  },
  SET_SEARCH_VALUE: (state, data) => {
    state.searchWord = data;
  },
  SET_SUGGEST: (state, data) => {
    state.suggest = data;
  },
  SET_HOVER_BAR: (state, data) => {
    state.hoverBar = data;
  },
  SET_HOVER_INDEX: (state, data) => {
    state.hoverIndex = data;
  },
  SET_ALL_RESULT: (state, data) => {
    state.allResult = Object.assign({}, data);
  },
  SET_SEASON: (state, data) => {
    //media_bangumi设置新增season值
    Vue.set(
      state.allResult.result.media_bangumi[data.id],
      "season",
      data.result
    );
  },
  SET_MENU_SHOW: (state, data) => {
    state.menuShow = data;
  }
};

const actions = {
  setAllResult({ commit, state }, { highlight, keyword }) {
    getSearchResult(highlight, keyword).then(res => {
      commit("SET_ALL_RESULT", res.data);
      let season = state.allResult.result.media_bangumi;
      const toplist = res.data.top_tlist;
      commit("SET_TOP_NUM", toplist);
      //根据media_id番剧ID查询详细信息
      for (let i = 0; i < season.length; i++) {
        getSeason(season[i].media_id).then(res => {
          commit("SET_SEASON", {
            id: i,
            result: res.result
          });
        });
      }
    });
  },
  setSuggest({ commit, state }) {
    if (state.searchValue.length > 0) {
      getSuggest(state.searchValue).then(res => {
        commit("SET_SUGGEST", res.result);
      });
    }
  },
  setSeason({ commit }, msg) {
    commit("SET_SEASON", msg);
  }
};

export default {
  namespaced: true, //注册login空间模块
  state,
  getters,
  actions,
  mutations
};

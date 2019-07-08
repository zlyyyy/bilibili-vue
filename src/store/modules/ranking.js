import { getRanking, getSeasonRank, getMoviesRank } from "../../api";

const state = {
  //一级导航
  rankMenu: [
    {
      title: "全站榜",
      name: "all",
      icon: "all",
      path: "/ranking/all",
      select: [
        {
          name: "全部投稿"
        },
        {
          name: "近期投稿"
        }
      ],
      selectActive: 0,
      select2: [
        {
          name: "日排行",
          num: 1
        },
        {
          name: "三日排行",
          num: 3
        },
        {
          name: "周排行",
          num: 7
        },
        {
          name: "月排行",
          num: 30
        }
      ],
      select2Active: 1,
      children: [
        {
          name: "全站",
          rid: "0"
        },
        {
          name: "动画",
          rid: "1"
        },
        {
          name: "国创相关",
          rid: "168"
        },
        {
          name: "音乐",
          rid: "3"
        },
        {
          name: "舞蹈",
          rid: "129"
        },
        {
          name: "游戏",
          rid: "4"
        },
        {
          name: "科技",
          rid: "36"
        },
        {
          name: "生活",
          rid: "160"
        },
        {
          name: "鬼畜",
          rid: "119"
        },
        {
          name: "时尚",
          rid: "155"
        },
        {
          name: "娱乐",
          rid: "5"
        },
        {
          name: "影视",
          rid: "181"
        }
      ]
    },
    {
      title: "原创榜",
      name: "origin",
      icon: "origin",
      path: "/ranking/origin",
      select: [
        {
          name: "全部投稿"
        },
        {
          name: "近期投稿"
        }
      ],
      selectActive: 0,
      select2: [
        {
          name: "日排行",
          num: 1
        },
        {
          name: "三日排行",
          num: 3
        },
        {
          name: "周排行",
          num: 7
        },
        {
          name: "月排行",
          num: 30
        }
      ],
      select2Active: 1,
      children: [
        {
          name: "全站",
          rid: "0"
        },
        {
          name: "动画",
          rid: "1"
        },
        {
          name: "国创相关",
          rid: "168"
        },
        {
          name: "音乐",
          rid: "3"
        },
        {
          name: "舞蹈",
          rid: "129"
        },
        {
          name: "游戏",
          rid: "4"
        },
        {
          name: "科技",
          rid: "36"
        },
        {
          name: "生活",
          rid: "160"
        },
        {
          name: "鬼畜",
          rid: "119"
        },
        {
          name: "时尚",
          rid: "155"
        },
        {
          name: "娱乐",
          rid: "5"
        },
        {
          name: "影视",
          rid: "181"
        }
      ]
    },
    {
      title: "新番榜",
      name: "bangumi",
      icon: "bangumi",
      path: "/ranking/bangumi",
      select2: [
        {
          name: "三日排行",
          num: 3
        },
        {
          name: "周排行",
          num: 7
        }
      ],
      select2Active: 0,
      children: [
        {
          name: "番剧",
          rid: "1"
        },
        {
          name: "国产动画",
          rid: "4"
        }
      ]
    },
    {
      title: "影视榜",
      name: "cinema",
      icon: "cinema",
      path: "/ranking/cinema",
      select: [
        {
          name: "全部投稿"
        },
        {
          name: "近期投稿"
        }
      ],
      selectActive: 0,
      select2: [
        {
          name: "日排行",
          num: 1
        },
        {
          name: "三日排行",
          num: 3
        },
        {
          name: "周排行",
          num: 7
        },
        {
          name: "月排行",
          num: 30
        }
      ],
      select2Active: 1,
      children: [
        {
          name: "纪录片",
          rid: "177"
        },
        {
          name: "电影",
          rid: "23"
        },
        {
          name: "电视剧",
          rid: "11"
        }
      ]
    },
    {
      title: "新人榜",
      name: "rookie",
      icon: "rookie",
      path: "/ranking/rookie",
      select2: [
        {
          name: "日排行",
          num: 1
        },
        {
          name: "三日排行",
          num: 3
        },
        {
          name: "周排行",
          num: 7
        },
        {
          name: "月排行",
          num: 30
        }
      ],
      select2Active: 1,
      children: [
        {
          name: "全站",
          rid: "0"
        },
        {
          name: "动画",
          rid: "1"
        },
        {
          name: "音乐",
          rid: "3"
        },
        {
          name: "舞蹈",
          rid: "129"
        },
        {
          name: "游戏",
          rid: "4"
        },
        {
          name: "科技",
          rid: "36"
        },
        {
          name: "生活",
          rid: "160"
        },
        {
          name: "鬼畜",
          rid: "119"
        },
        {
          name: "时尚",
          rid: "155"
        },
        {
          name: "娱乐",
          rid: "5"
        },
        {
          name: "影视",
          rid: "181"
        }
      ]
    }
  ],
  firstMenuActive: 0,
  secondMenuActive: 0,
  rankTips: "",
  rankAll: [],
  loading: true
};

const getters = {};

const mutations = {
  SET_RANK_ALL: (state, data) => {
    //排行榜数据
    state.rankAll = Object.assign({}, data);
  },
  SET_SELECT_ACTIVE: (state, data) => {
    //一级select设置
    state.rankMenu[state.firstMenuActive].selectActive = data;
  },
  SET_SELECT2_ACTIVE: (state, data) => {
    //二级select设置
    state.rankMenu[state.firstMenuActive].select2Active = data;
  },
  SET_FIRST_MENU_ACTIVE: (state, data) => {
    //一级路由设置
    state.firstMenuActive = data;
  },
  SET_SECOND_MENU_ACTIVE: (state, data) => {
    //二级路由设置
    state.secondMenuActive = data;
  },
  SET_LOADING: (state, data) => {
    if (data) {
      state.loading = data;
    } else {
      state.loading = !state.loading;
    }
  }
};

const actions = {
  setRankData({ commit, state }, { rid, arc_type, day }) {
    let _type;
    switch (state.firstMenuActive) {
      case 0:
        //全站
        _type = 1;
        getRankData();
        break;
      case 1:
        //原创
        _type = 2;
        getRankData();
        break;
      case 2:
        //新番
        getSeasonRank(day, rid).then(res => {
          commit("SET_RANK_ALL", res.result);
          commit("SET_LOADING");
        });
        break;
      case 3:
        //影视
        getMoviesRank(day, rid).then(res => {
          commit("SET_RANK_ALL", res.rank);
          commit("SET_LOADING");
        });
        break;
      case 4:
        //新人
        _type = 3;
        getRankData();
        break;
      default:
        break;
    }
    function getRankData() {
      getRanking(_type, rid, arc_type, day).then(res => {
        commit("SET_RANK_ALL", res.data);
        commit("SET_LOADING");
      });
    }
  }
};

export default {
  namespaced: true, //注册login空间模块
  state,
  getters,
  actions,
  mutations
};

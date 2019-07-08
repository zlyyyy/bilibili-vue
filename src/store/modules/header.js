import {
  getLoc,
  getSearchDefaultWords,
  getSuggest,
  getMenuIcon
} from "../../api";

const state = {
  leftNav: [
    //顶部左侧导航栏
    {
      name: "主站",
      class: "home",
      icon: "bili-icon",
      href: "/"
    },
    {
      name: "画友",
      class: "hbili",
      href: "/huayou"
    },
    {
      name: "游戏中心",
      class: "game",
      href: "/"
    },
    {
      name: "直播",
      class: "live",
      href: "/"
    },
    {
      name: "会员购",
      class: "buy",
      href: "/"
    },
    {
      name: "BML",
      href: "/"
    },
    {
      name: "下载APP",
      class: "mobile",
      icon: "bili-icon",
      href: "/"
    }
  ],
  headBanner: [], //顶部背景、LOGO
  searchValue: "", //搜索框输入值
  searchWord: [], //默认搜索关键字
  suggest: [], //建议搜索
  menuLeft: [
    {
      name: "首页",
      class: "home",
      href: ""
    },
    {
      name: "动画",
      num: 884,
      href: "",
      items: [
        {
          name: "MAD·AMV",
          href: ""
        },
        {
          name: "MMD·3D",
          href: ""
        },
        {
          name: "短片·手书·配音",
          href: ""
        },
        {
          name: "MAD·AMV",
          href: "综合"
        }
      ]
    },
    {
      name: "番剧",
      num: 105,
      href: "",
      items: [
        {
          name: "连载动画",
          href: ""
        },
        {
          name: "完结动画",
          href: ""
        },
        {
          name: "资讯",
          href: ""
        },
        {
          name: "官方延伸",
          href: ""
        },
        {
          name: "新番时间表",
          href: ""
        },
        {
          name: "番剧索引",
          href: ""
        }
      ]
    },
    {
      name: "国创",
      num: 103,
      href: "",
      items: [
        {
          name: "国产动画",
          href: ""
        },
        {
          name: "国产原创相关",
          href: ""
        },
        {
          name: "布袋戏",
          href: ""
        },
        {
          name: "资讯",
          href: ""
        },
        {
          name: "新番时间表",
          href: ""
        },
        {
          name: "国产动画索引",
          href: ""
        }
      ]
    },
    {
      name: "音乐",
      num: 12389,
      href: "",
      items: [
        {
          name: "原创音乐",
          href: ""
        },
        {
          name: "翻唱",
          href: ""
        },
        {
          name: "VOCALOID·UTAU",
          href: ""
        },
        {
          name: "演奏",
          href: ""
        },
        {
          name: "三次元音乐",
          href: ""
        },
        {
          name: "OP/ED/OST",
          href: ""
        },
        {
          name: "音乐选集",
          href: ""
        }
      ]
    },
    {
      name: "舞蹈",
      num: 199,
      href: "",
      items: [
        {
          name: "宅舞",
          href: ""
        },
        {
          name: "三次元舞蹈",
          href: ""
        },
        {
          name: "舞蹈教程",
          href: ""
        }
      ]
    },
    {
      name: "游戏",
      num: 23890,
      href: "",
      items: [
        {
          name: "单机游戏",
          href: ""
        },
        {
          name: "电子竞技",
          href: ""
        },
        {
          name: "手机游戏",
          href: ""
        },
        {
          name: "网络游戏",
          href: ""
        },
        {
          name: "桌游棋牌",
          href: ""
        },
        {
          name: "GMV",
          href: ""
        },
        {
          name: "音游",
          href: ""
        },
        {
          name: "Mugen",
          href: ""
        }
      ]
    },
    {
      name: "科技",
      num: 27893,
      href: "",
      items: [
        {
          name: "趣味科普人文",
          href: ""
        },
        {
          name: "野生技术协会",
          href: ""
        },
        {
          name: "演讲·公开课",
          href: ""
        },
        {
          name: "星海",
          href: ""
        },
        {
          name: "数码",
          href: ""
        },
        {
          name: "机械",
          href: ""
        },
        {
          name: "汽车",
          href: ""
        }
      ]
    },
    {
      name: "生活",
      num: 12678,
      href: "",
      items: [
        {
          name: "搞笑",
          href: ""
        },
        {
          name: "日常",
          href: ""
        },
        {
          name: "美食圈",
          href: ""
        },
        {
          name: "动物圈",
          href: ""
        },
        {
          name: "手工",
          href: ""
        },
        {
          name: "绘画",
          href: ""
        },
        {
          name: "ASMR",
          href: ""
        },
        {
          name: "运动",
          href: ""
        },
        {
          name: "其他",
          href: ""
        }
      ]
    },
    {
      name: "鬼畜",
      num: 68,
      href: "",
      items: [
        {
          name: "鬼畜调教",
          href: ""
        },
        {
          name: "音MAD",
          href: ""
        },
        {
          name: "人力VOCALOID",
          href: ""
        },
        {
          name: "教程演示",
          href: ""
        }
      ]
    },
    {
      name: "时尚",
      num: 859,
      href: "",
      items: [
        {
          name: "美妆",
          href: ""
        },
        {
          name: "服饰",
          href: ""
        },
        {
          name: "健身",
          href: ""
        },
        {
          name: "资讯",
          href: ""
        }
      ]
    },
    {
      name: "广告",
      num: 205,
      href: "",
      items: []
    },
    {
      name: "娱乐",
      num: 1280,
      href: "",
      items: [
        {
          name: "综艺",
          href: ""
        },
        {
          name: "明星",
          href: ""
        },
        {
          name: "Korea相关",
          href: ""
        }
      ]
    },
    {
      name: "影视",
      num: 3450,
      href: "",
      items: [
        {
          name: "影视杂谈",
          href: ""
        },
        {
          name: "影视剪辑",
          href: ""
        },
        {
          name: "短片",
          href: ""
        },
        {
          name: "预告·资讯",
          href: ""
        },
        {
          name: "特摄",
          href: ""
        }
      ]
    },
    {
      name: "放映厅",
      num: 147,
      href: "",
      items: [
        {
          name: "纪录片",
          href: ""
        },
        {
          name: "电影",
          href: ""
        },
        {
          name: "电视剧",
          href: ""
        }
      ]
    }
  ], //主要菜单左侧
  menuRight: [
    {
      name: "专栏",
      class: "zl",
      icon: "zhuanlan",
      href: "/",
      fieldClass: "",
      fields: []
    },
    {
      name: "广场",
      class: "nav-square",
      icon: "square",
      href: "/",
      fieldClass: "square-wrap",
      fields: [
        {
          name: "会员购",
          icon: "icon-vip-buy",
          href: ""
        },
        {
          name: "活动中心",
          icon: "icon-activity",
          href: ""
        },
        {
          name: "游戏中心",
          icon: "icon-game",
          href: ""
        },
        {
          name: "新闻中心",
          icon: "icon-news",
          href: ""
        },
        {
          name: "画友",
          icon: "icon-hy",
          href: ""
        },
        {
          name: "芒果TV",
          icon: "icon-mango",
          href: ""
        }
      ],
      fieldImgClass: "square-field",
      fieldImg: [
        {
          title: "bilibili 活动",
          href: "",
          src: require("../../assets/square_01.jpg")
        },
        {
          title: "话题列表",
          href: "",
          src: require("../../assets/square_02.jpg")
        }
      ]
    },
    {
      name: "直播",
      class: "",
      icon: "live",
      href: "/",
      fieldClass: "nav-live",
      fields: [
        {
          name: "推荐主播",
          href: ""
        },
        {
          name: "生活娱乐",
          href: ""
        },
        {
          name: "绘画专区",
          href: ""
        },
        {
          name: "唱见舞见",
          href: ""
        },
        {
          name: "御宅文化",
          href: ""
        },
        {
          name: "单机联机",
          href: ""
        },
        {
          name: "网络游戏",
          href: ""
        },
        {
          name: "电子竞技",
          href: ""
        },
        {
          name: "手游直播",
          href: ""
        }
      ],
      fieldImgClass: "live-field",
      fieldImg: [
        {
          title: "有文画",
          href: "",
          imgclass: "pic",
          src: require("../../assets/live_01.png")
        },
        {
          title: "小视频",
          href: "",
          imgclass: "pic",
          src: require("../../assets/live_02.png")
        }
      ]
    },
    {
      name: "小黑屋",
      class: "",
      icon: "blackroom",
      href: "/",
      fieldClass: "",
      fields: []
    }
  ], //主要菜单右侧
  menuIcon: [] //主要菜单右侧icon
};

const getters = {};

const mutations = {
  SET_HEAD_BANNER: (state, data) => {
    state.headBanner = Object.assign({}, data[0]);
  },
  SET_SEARCH_DEFAULT_WORDS: (state, data) => {
    state.searchWord = Object.assign({}, data);
  },
  SET_MENUICON: (state, data) => {
    state.menuIcon = Object.assign({}, data);
  },
  SET_SEARCH_WORD: (state, data) => {
    state.searchValue = data;
  },
  SET_SUGGEST: (state, data) => {
    state.suggest = data;
  }
};

const actions = {
  setHeadBanner({ commit }, data) {
    getLoc(data).then(res => {
      commit("SET_HEAD_BANNER", res.data);
    });
  },
  setSearchDefaultWords({ commit }) {
    getSearchDefaultWords().then(res => {
      commit("SET_SEARCH_DEFAULT_WORDS", res.data);
    });
  },
  setSuggest({ commit, state }) {
    if (state.searchValue.length > 0) {
      getSuggest(state.searchValue).then(res => {
        commit("SET_SUGGEST", res.result);
      });
    }
  },
  setMenuIcon({ commit }) {
    getMenuIcon().then(res => {
      commit("SET_MENUICON", res.data);
    });
  }
};

export default {
  namespaced: true, //注册header空间模块
  state,
  getters,
  actions,
  mutations
};

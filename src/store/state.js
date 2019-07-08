const state = {
  scrollTop: 0,
  //轮播图模块
  slide: {
    time: 2000,
    pagation: true,
    data: []
  },
  //推荐模块
  recommend: {
    rec: [],
    day: 3 //所有
  },
  //推广模块
  popularize: [],
  //当前在线
  online: [],
  //右侧悬浮导航
  elevator: [
    {
      id: "bili_live",
      name: "直播",
      offsetTop: 0
    },
    {
      id: "bili_donghua",
      name: "动画",
      offsetTop: 0
    },
    {
      id: "bili_bangumi",
      name: "番剧",
      offsetTop: 0
    },
    {
      id: "bili_guochuang",
      name: "国创",
      offsetTop: 0
    },
    {
      name: "音乐"
    },
    {
      name: "音频"
    },
    {
      name: "舞蹈"
    },
    {
      name: "游戏"
    },
    {
      name: "科技"
    },
    {
      name: "生活"
    },
    {
      name: "鬼畜"
    },
    {
      name: "时尚"
    },
    {
      name: "广告"
    },
    {
      name: "娱乐"
    },
    {
      name: "电影"
    },
    {
      name: "TV剧"
    },
    {
      name: "影视"
    },
    {
      name: "纪录片"
    }
  ],
  //主要模块
  module: [
    {
      id: 0,
      ref: "bili_donghua", //模型id
      rid: 1,
      title: "动画", //模型名称
      icon: "icon-donghua", //模型图标
      offsetTop: 0,
      tab: [
        {
          name: "有新动态"
        },
        {
          name: "最新投稿"
        }
      ],
      dynamic: 27989, //模型新动态数
      moreUrl: "/v/donghua", //模型更多链接
      data: [], //动态区域数据
      ranktab: [
        {
          name: "全部"
        },
        {
          name: "原创"
        }
      ],
      rankdropdown: [
        {
          name: "三日"
        },
        {
          name: "一周"
        }
      ],
      rankPic: true,
      rankList: 7,
      rankAllData: [], //全部排行
      rankOriginalData: [] //原创排行
    },
    {
      id: 1,
      ref: "bili_bangumi",
      rid: 13,
      title: "番剧",
      title2: "番剧动态",
      icon: "icon-bangumi",
      offsetTop: 0,
      tab: [
        {
          name: "有新动态"
        },
        {
          name: "最新投稿"
        }
      ],
      dynamic: 1514, //模型新动态数
      moreUrl: "/v/bangumi", //模型更多链接
      data: [], //动态区域数据
      ranktab: [],
      rankdropdown: [
        {
          name: "三日"
        },
        {
          name: "一周"
        }
      ],
      rankPic: false,
      rankList: 10,
      rankBangumiData: [], //番剧排行
      rankAllData: [], //全部排行
      rankOriginalData: [], //原创排行
      timeline: {
        tab: [
          {
            name: "最新"
          },
          {
            name: "一"
          },
          {
            name: "二"
          },
          {
            name: "三"
          },
          {
            name: "四"
          },
          {
            name: "五"
          },
          {
            name: "六"
          },
          {
            name: "日"
          }
        ],
        moreUrl: "/v/bangumi",
        data: []
      },
      ad: {
        data: [],
        time: 3000,
        pagation: false
      }
    },
    {
      id: 2,
      ref: "bili_guochuang",
      rid: 168,
      title: "国创",
      title2: "国产原创相关",
      icon: "icon-guochuang",
      offsetTop: 0,
      tab: [
        {
          name: "有新动态"
        },
        {
          name: "最新投稿"
        }
      ],
      dynamic: 1514, //模型新动态数
      moreUrl: "/v/bangumi", //模型更多链接
      data: [], //动态区域数据
      ranktab: [
        {
          name: "全部"
        },
        {
          name: "原创"
        }
      ],
      rankdropdown: [
        {
          name: "三日"
        },
        {
          name: "一周"
        }
      ],
      rankPic: true,
      rankList: 7,
      rankBangumiData: [], //番剧排行
      rankAllData: [], //全部排行
      rankOriginalData: [], //原创排行
      timeline: {
        tab: [
          {
            name: "最新"
          },
          {
            name: "一"
          },
          {
            name: "二"
          },
          {
            name: "三"
          },
          {
            name: "四"
          },
          {
            name: "五"
          },
          {
            name: "六"
          },
          {
            name: "日"
          }
        ],
        moreUrl: "/v/bangumi",
        data: []
      },
      ad: {
        data: [],
        time: 3000,
        pagation: false
      }
    },
    {
      id: 3,
      ref: "bili_music", //模型id
      rid: 3,
      title: "音乐", //模型名称
      icon: "icon-music", //模型图标
      offsetTop: 0,
      tab: [
        {
          name: "有新动态"
        },
        {
          name: "最新投稿"
        }
      ],
      dynamic: 27989, //模型新动态数
      moreUrl: "/v/donghua", //模型更多链接
      data: [], //动态区域数据
      ranktab: [
        {
          name: "全部"
        },
        {
          name: "原创"
        }
      ],
      rankdropdown: [
        {
          name: "三日"
        },
        {
          name: "一周"
        }
      ],
      rankPic: true,
      rankList: 7,
      rankAllData: [], //全部排行
      rankOriginalData: [] //原创排行
    },
    {
      id: 4,
      ref: "bili_dance", //模型id
      rid: 129,
      title: "舞蹈", //模型名称
      icon: "icon-dance", //模型图标
      offsetTop: 0,
      tab: [
        {
          name: "有新动态"
        },
        {
          name: "最新投稿"
        }
      ],
      dynamic: 27989, //模型新动态数
      moreUrl: "/v/donghua", //模型更多链接
      data: [], //动态区域数据
      ranktab: [
        {
          name: "全部"
        },
        {
          name: "原创"
        }
      ],
      rankdropdown: [
        {
          name: "三日"
        },
        {
          name: "一周"
        }
      ],
      rankPic: true,
      rankList: 7,
      rankAllData: [], //全部排行
      rankOriginalData: [] //原创排行
    }
  ]
};
export default state;

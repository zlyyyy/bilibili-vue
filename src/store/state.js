const state = {
    //轮播图模块
    slide: {
        time: 2000,
        pagation: true,
        data: []
    },
    //推荐模块
    recommend: {
        rec: [],
        day: 3//所有
    },
    //推广模块
    popularize: [],
    //当前在线
    online: [],
    //主要模块
    module: [
        {
            id: 0,
            ref: 'bili_donghua',//模型id
            rid: 1,
            title: '动画', //模型名称
            icon: 'icon-donghua',//模型图标
            tab:[
                {
                    name: '有新动态'
                },
                {
                    name: '最新投稿'
                }
            ],
            dynamic: 27989,//模型新动态数
            moreUrl: '/v/donghua',//模型更多链接
            data: [],//动态区域数据
            ranktab: [
                {
                    name: '全部'
                },
                {
                    name: '原创'
                }
            ],
            rankdropdown:[
                {
                    name: '三日'
                },
                {
                    name: '一周'
                }
            ],
            rankPic: true,
            rankList: 7,
            rankAllData: [],//全部排行
            rankOriginalData: []//原创排行
        },
        {
            id: 1,
            ref: 'bili_bangumi',
            rid: 13,
            title: '番剧动态',
            icon: 'icon-bangumi',
            tab:[
                {
                    name: '有新动态'
                },
                {
                    name: '最新投稿'
                }
            ],
            dynamic: 1514,//模型新动态数
            moreUrl: '/v/bangumi',//模型更多链接
            data: [],//动态区域数据
            ranktab: [],
            rankdropdown:[
                {
                    name: '三日'
                },
                {
                    name: '一周'
                }
            ],
            rankPic: false,
            rankList: 10,
            rankBangumiData: [],//番剧排行
            rankAllData: [],//全部排行
            rankOriginalData: [],//原创排行
            timeline: {
                title: '番剧',
                tab:[
                    {
                        name: '最新'
                    },
                    {
                        name: '一'
                    },
                    {
                        name: '二'
                    },
                    {
                        name: '三'
                    },
                    {
                        name: '四'
                    },
                    {
                        name: '五'
                    },
                    {
                        name: '六'
                    },
                    {
                        name: '日'
                    }
                ],
                moreUrl: '/v/bangumi',
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
            ref: 'bili_guochuang',
            rid: 168,
            title: '国产原创相关',
            icon: 'icon-guochuang',
            tab:[
                {
                    name: '有新动态'
                },
                {
                    name: '最新投稿'
                }
            ],
            dynamic: 1514,//模型新动态数
            moreUrl: '/v/bangumi',//模型更多链接
            data: [],//动态区域数据
            ranktab: [
                {
                    name: '全部'
                },
                {
                    name: '原创'
                }
            ],
            rankdropdown:[
                {
                    name: '三日'
                },
                {
                    name: '一周'
                }
            ],
            rankPic: true,
            rankList: 7,
            rankBangumiData: [],//番剧排行
            rankAllData: [],//全部排行
            rankOriginalData: [],//原创排行
            timeline: {
                title: '国创',
                tab:[
                    {
                        name: '最新'
                    },
                    {
                        name: '一'
                    },
                    {
                        name: '二'
                    },
                    {
                        name: '三'
                    },
                    {
                        name: '四'
                    },
                    {
                        name: '五'
                    },
                    {
                        name: '六'
                    },
                    {
                        name: '日'
                    }
                ],
                moreUrl: '/v/bangumi',
                data: []
            },
            ad: {
                data: [],
                time: 3000,
                pagation: false
            }
        }
    ]
}
export default state
// import donghua from '../modules/home/donghua'
// import bangumi from '../modules/home/bangumi'
// import guochuang from '../modules/home/guochuang'

// const modules = {
//     donghua,
//     bangumi,
//     guochuang
// }

const state = {
    //一级导航
    rankMenu: [
        {
            name: '全站榜',
            icon: 'all',
            path: '/ranking/all',
            children: [
                {
                    name: '全站',
                    rid:'0',
                    path: '/ranking/all/0'
                },
                {
                    name: '动画',
                    rid:'1',
                    path: '/ranking/all/1'
                },
                {
                    name: '国创相关',
                    rid:'168',
                    path: '/ranking/all/168'
                },
                {
                    name: '音乐',
                    rid:'3',
                    path: '/ranking/all/3'
                },
                {
                    name: '舞蹈',
                    rid:'129',
                    path: '/ranking/all/129'
                },
                {
                    name: '游戏',
                    rid:'4',
                    path: '/ranking/all/4'
                },
                {
                    name: '科技',
                    rid:'36',
                    path: '/ranking/all/36'
                },
                {
                    name: '生活',
                    rid:'160',
                    path: '/ranking/all/160'
                },
                {
                    name: '鬼畜',
                    rid:'119',
                    path: '/ranking/all/119'
                },
                {
                    name: '时尚',
                    rid:'155',
                    path: '/ranking/all/155'
                },
                {
                    name: '娱乐',
                    rid:'5',
                    path: '/ranking/all/5'
                },
                {
                    name: '影视',
                    rid:'181',
                    path: '/ranking/all/181'
                }
            ]
        },
        {
            name: '原创榜',
            icon: 'origin',
            path: '/ranking/origin',
            children: []
        },
        {
            name: '新番榜',
            icon: 'bangumi',
            path: '/ranking/bangumi',
            children: []
        },
        {
            name: '影视榜',
            icon: 'cinema',
            path: '/ranking/cinema',
            children: []
        },
        {
            name: '新人榜',
            icon: 'rookie',
            path: '/ranking/rookie',
            children: []
        }
    ],
    rankActive: 0,
    rankTips: '',
    rankDropdown: [
        {
            name: '全部投稿'
        },
        {
            name: '近期投稿'
        }
    ],
    rankSelect: 0,
    rankDropdown2: [
        {
            name: '日排行',
            num: 1
        },
        {
            name: '三日排行',
            num: 3
        },
        {
            name: '周排行',
            num: 7
        },
        {
            name: '月排行',
            num: 30
        }
    ],
    rankSelect2: 0 
}

const getters = {}

const mutations = {
	//登录弹窗显示隐藏
    rankActive(state,data) {
        state.rankActive = data
        console.log(data)
    }
}

const actions = {
	setRankActive({commit,state},msg) {
        commit('rankActive',msg)
    }
}

export default {
    namespaced: true,//注册login空间模块
	state,
	getters,
	actions,
	mutations
}
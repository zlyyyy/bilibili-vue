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
                    rid:'0'
                },
                {
                    name: '动画',
                    rid:'1'
                },
                {
                    name: '国创相关',
                    rid:'168',
                },
                {
                    name: '音乐',
                    rid:'3',
                },
                {
                    name: '舞蹈',
                    rid:'129'
                },
                {
                    name: '游戏',
                    rid:'4'
                },
                {
                    name: '科技',
                    rid:'36'
                },
                {
                    name: '生活',
                    rid:'160'
                },
                {
                    name: '鬼畜',
                    rid:'119'
                },
                {
                    name: '时尚',
                    rid:'155'
                },
                {
                    name: '娱乐',
                    rid:'5'
                },
                {
                    name: '影视',
                    rid:'181'
                }
            ]
        },
        {
            name: '原创榜',
            icon: 'origin',
            path: '/ranking/origin',
            children: [
                {
                    name: '全站',
                    rid:'0'
                },
                {
                    name: '动画',
                    rid:'1'
                },
                {
                    name: '国创相关',
                    rid:'168'
                },
                {
                    name: '音乐',
                    rid:'3'
                },
                {
                    name: '舞蹈',
                    rid:'129'
                },
                {
                    name: '游戏',
                    rid:'4'
                },
                {
                    name: '科技',
                    rid:'36'
                },
                {
                    name: '生活',
                    rid:'160'
                },
                {
                    name: '鬼畜',
                    rid:'119'
                },
                {
                    name: '时尚',
                    rid:'155'
                },
                {
                    name: '娱乐',
                    rid:'5'
                },
                {
                    name: '影视',
                    rid:'181'
                }
            ]
        },
        {
            name: '新番榜',
            icon: 'bangumi',
            path: '/ranking/bangumi',
            children: [
                {
                    name: '番剧',
                    rid:'13'
                },
                {
                    name: '国产动画',
                    rid:'167'
                }
            ]
        },
        {
            name: '影视榜',
            icon: 'cinema',
            path: '/ranking/cinema',
            children: [
                {
                    name: '纪录片',
                    rid:'177'
                },
                {
                    name: '电影',
                    rid:'23'
                },
                {
                    name: '电视剧',
                    rid:'11'
                }
            ]
        },
        {
            name: '新人榜',
            icon: 'rookie',
            path: '/ranking/rookie',
            children: [
                {
                    name: '全站',
                    rid:'0'
                },
                {
                    name: '动画',
                    rid:'1'
                },
                {
                    name: '国创相关',
                    rid:'168'
                },
                {
                    name: '音乐',
                    rid:'3'
                },
                {
                    name: '舞蹈',
                    rid:'129'
                },
                {
                    name: '游戏',
                    rid:'4'
                },
                {
                    name: '科技',
                    rid:'36'
                },
                {
                    name: '生活',
                    rid:'160'
                },
                {
                    name: '鬼畜',
                    rid:'119'
                },
                {
                    name: '时尚',
                    rid:'155'
                },
                {
                    name: '娱乐',
                    rid:'5'
                },
                {
                    name: '影视',
                    rid:'181'
                }
            ]
        }
    ],
    firstMenuActive: 0,
    secondMenuActive: 0,
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
    rankSelect2: 0,
    rankAll: [] 
}

const getters = {}

const mutations = {
    rankAll(state,data) {
        // console.log(data)
        state.rankAll = Object.assign({},data)
    },
    // rankTips(state,data) {
    //     state.rankTips = data
    // },
    rankSelect(state,data) {
        state.rankSelect = data
    },
    rankSelect2(state,data) {
        state.rankSelect2 = data
    },
    firstMenuActive(state,data) {
        state.firstMenuActive = data
    },
    secondMenuActive(state,data) {
        state.secondMenuActive = data
    }
}

const actions = {
    setRankAll({commit,state},msg) {
        commit('rankAll',msg)
    },
    // setRankTips({commit,state},msg) {
    //     commit('rankTips',msg)
    // },
    setRankSelect({commit,state},msg) {
        commit('rankSelect',msg)
    },
    setRankSelect2({commit,state},msg) {
        commit('rankSelect2',msg)
    },
    setFirstMenuActive({commit,state},msg) {
        commit('firstMenuActive',msg)
    },
    setSecondMenuActive({commit,state},msg) {
        commit('secondMenuActive',msg)
    }
}

export default {
    namespaced: true,//注册login空间模块
	state,
	getters,
	actions,
	mutations
}
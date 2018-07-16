const state = {
    //分类导航
    searchValue: '',
    searchMenu: [
        {
            title: '综合',
            path: '/search/all',
            resultNum: 0,
            data: []
        },
        {
            title: '视频',
            path: '/search/video',
            resultNum: 0,
            data: []
        },
        {
            title: '番剧',
            path: '/search/bangumi',
            resultNum: 0,
            data: []
        },
        {
            title: '影视',
            path: '/search/pgc',
            resultNum: 0,
            data: []
        },
        {
            title: '直播',
            path: '/search/live',
            resultNum: 0,
            data: []
        },
        {
            title: '专栏',
            path: '/search/article',
            resultNum: 0,
            data: []
        },
        {
            title: '话题',
            path: '/search/topic',
            resultNum: 0,
            data: []
        },
        {
            title: '用户',
            path: '/search/upuser',
            resultNum: 0,
            data: []
        },
        {
            title: '相簿',
            path: '/search/photo',
            resultNum: 0,
            data: []
        }
    ],
    hoverBar: 0
}

const getters = {}

const mutations = {
    updateSearchValue(state,data){
        state.searchValue = data
    },
    updateHoverBar(state,data){
        state.hoverBar = data
    }
}

const actions = {
    setHoverBar({commit,state},msg) {
        commit('updateHoverBar',msg)
    }
}

export default {
    namespaced: true,//注册login空间模块
	state,
	getters,
	actions,
	mutations
}
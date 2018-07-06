const state = {
	id: 'bili_donghua',//模型id
	title: '动画', //模型名称
	doubletitle: false,
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
	newTrends: [],//最新动态
	newSub: [],//最新投稿
	ranktab: [
		{
			name: '全部'
		},
		{
			name: '原创'
		}
	],
	timeline: false,
	rankdropdown:[
		{
			name: '三日'
		},
		{
			name: '一周'
		}
	],
	rankPic: true,
	rankLists: 7,
	rankThreeAllList: [],//三日全部排行
	rankThreeAllMoreUrl: '/ranking/all/1/1/3/',//三日全部排行更多链接
	rankThreeOriginalList: [],//三日原创排行
	rankThreeOriginalMoreUrl: '/ranking/origin/1/1/3/',//三日原创更多链接
	rankSevenAllList: [],//一周全部排行
	rankSevenAllMoreUrl: '/ranking/all/1/1/7/',//一周全部排行更多链接
	rankSevenOriginalList: [],//一周原创排行
	rankSevenOriginalMoreUrl: '/ranking/origin/1/1/7/'//一周原创排行链接
}

const getters = {}

const mutations = {
	setNewTrends(state,data){
		state.newTrends = data
	},
	setNewSub(state,data){
		state.newSub = data
	},
	setRankThreeAllList(state,data){
		state.rankThreeAllList = data
	},
	setRankThreeOriginalList(state,data){
		state.rankThreeOriginalList = data
	},
	setRankSevenAllList(state,data){
		state.rankSevenAllList = data
	},
	setRankSevenOriginalList(state,data){
		state.rankSevenOriginalList = data
	}
}

const actions = {
	getNewTrends({ commit, state },data){
		commit('setNewTrends',data)
	},
	getNewSub({ commit, state },data){
		commit('setNewSub',data)
	},
	getRankThreeAllList({ commit, state },data){
		commit('setRankThreeAllList',data)
	},
	getRankThreeOriginalList({ commit, state },data){
		commit('setRankThreeOriginalList',data)
	},
	getRankSevenAllList({ commit, state },data){
		commit('setRankSevenAllList',data)
	},
	getRankSevenOriginalList({ commit, state },data){
		commit('setRankSevenOriginalList',data)
	}
}

export default {
	namespaced: true,//注册header空间模块
	state,
	getters,
	actions,
	mutations
}
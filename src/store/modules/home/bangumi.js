const state = {
	num: '0',
	id: 'bili_bangumi',//模型id
	title: '番剧', //模型名称
	title2: '番剧动态',
	doubletitle: true,
	icon: 'icon-bangumi',//模型图标
	tab:[
		{
			name: '有新动态'
		},
		{
			name: '最新投稿'
		}
	],
	tab2:[
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
	dynamic: 1514,//模型新动态数
	moreUrl: '/v/bangumi',//模型更多链接
	newTrends: [],//最新动态
	newSub: [],//最新投稿
	ranktab: [],
	timeline: [],
	rankdropdown:[
		{
			name: '三日'
		},
		{
			name: '一周'
		}
	],
	rankPic: false,
	rankLists: 10,
	BrankThreeAllList: [],//三日全部排行
	BrankThreeAllMoreUrl: '/ranking/bangumi/13/1/3/',//三日全部排行更多链接
	BrankSevenAllList: [],//一周全部排行
	BrankSevenAllMoreUrl: '/ranking/bangumi/13/1/7/',//一周全部排行更多链接
	Ad: {
		data: [],
		time: 3000,
		pagation: false
	}
}

const getters = {}

const mutations = {
	setTimeline(state,data){
		state.timeline = Object.assign([],data)
	},
	setNewTrends(state,data){
		state.newTrends = Object.assign([],data)
	},
	setNewSub(state,data){
		state.newSub = Object.assign([],data)
	},
	setRankThreeAllList(state,data){
		state.BrankThreeAllList = Object.assign([],data)
	},
	setRankSevenAllList(state,data){
		state.BrankSevenAllList = Object.assign([],data)
	},
	setAd(state,data){
		state.Ad.data = Object.assign([],data)
	}
}

const actions = {
	getTimeline({ commit, state },data){
		commit('setTimeline',data)
	},
	getNewTrends({ commit, state },data){
		commit('setNewTrends',data)
	},
	getNewSub({ commit, state },data){
		commit('setNewSub',data)
	},
	getRankThreeAllList({ commit, state },data){
		commit('setRankThreeAllList',data)
	},
	getRankSevenAllList({ commit, state },data){
		commit('setRankSevenAllList',data)
	},
	getAd({ commit, state },data){
		commit('setAd',data)
	}
}

export default {
	namespaced: true,//注册header空间模块
	state,
	getters,
	actions,
	mutations
}
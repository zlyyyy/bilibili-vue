const state = {
	num: '1',
	id: 'bili_guochuang',//模型id
	title: '国创', //模型名称
	title2: '国产原创相关',
	doubletitle: true,
	icon: 'icon-guochuang',//模型图标
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
	ranktab: [
		{
			name: '全部'
		},
		{
			name: '原创'
		}
	],
	timeline: [],
	timelineTab: 0,//更新时间轴
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
	BrankThreeAllList: [],//三日全部排行
	BrankThreeAllMoreUrl: '/ranking/bangumi/167/0/3/',//三日全部排行更多链接
	BrankSevenAllList: [],//一周全部排行
	BrankSevenAllMoreUrl: '/ranking/bangumi/167/0/7/',//一周全部排行更多链接
	rankThreeAllList: [],//三日相关全部排行
	rankThreeAllMoreUrl: '/ranking/all/168/1/3/',//三日全部排行更多链接
	rankThreeOriginalList: [],//三日原创全部排行
	rankThreeOriginalMoreUrl: '/ranking/origin/168/1/3/',//三日原创全部排行更多链接
	rankSevenAllList: [],//七日相关全部排行
	rankSevenAllMoreUrl: '/ranking/all/168/1/7/',//七日全部排行更多链接
	rankSevenOriginalList: [],//七日原创全部排行
	rankSevenOriginalMoreUrl: '/ranking/origin/168/1/7/',//七日原创全部排行更多链接
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
	setTimelineTab(state,data){
		state.timelineTab = data
	},
	setBrankThreeAllList(state,data){
		state.BrankThreeAllList = Object.assign([],data)
	},
	setBrankSevenAllList(state,data){
		state.BrankSevenAllList = Object.assign([],data)
	},
	setNewTrends(state,data){
		state.newTrends = Object.assign({},data)
	},
	setNewSub(state,data){
		state.newSub = Object.assign({},data)
	},
	setRankThreeAllList(state,data){
		state.rankThreeAllList = Object.assign([],data)
	},
	setRankThreeOriginalList(state,data){
		state.rankThreeOriginalList = Object.assign([],data)
	},
	setRankSevenAllList(state,data){
		state.rankSevenAllList = Object.assign([],data)
	},
	setRankSevenOriginalList(state,data){
		state.rankSevenOriginalList = Object.assign([],data)
	},
	setAd(state,data){
		state.Ad.data = Object.assign([],data)
	}
}

const actions = {
	getTimeline({ commit, state },data){
		commit('setTimeline',data)
	},
	getTimelineTab({ commit, state },data){
		commit('setTimelineTab',data)
	},
	getBrankThreeAllList({ commit, state },data){
		commit('setBrankThreeAllList',data)
	},
	getBrankSevenAllList({ commit, state },data){
		commit('setBrankSevenAllList',data)
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
	getRankThreeOriginalList({ commit, state },data){
		commit('setRankThreeOriginalList',data)
	},
	getRankSevenAllList({ commit, state },data){
		commit('setRankSevenAllList',data)
	},
	getRankSevenOriginalList({ commit, state },data){
		commit('setRankSevenOriginalList',data)
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
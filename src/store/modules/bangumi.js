import { getTimelineGlobal, getNewTrends, getNewSub,  getRankGlobalThree, getRankGlobalSeven, getGlobalAdSlide } from '../../api'

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
	timelineTab: 0,//更新时间轴
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
	mRankThreeAllList: [],//三日全部排行
	mRankThreeAllMoreUrl: '/ranking/bangumi/13/1/3/',//三日全部排行更多链接
	mRankSevenAllList: [],//一周全部排行
	mRankSevenAllMoreUrl: '/ranking/bangumi/13/1/7/',//一周全部排行更多链接
	Ad: {
		data: [],
		time: 3000,
		pagation: false
	}
}

const getters = {}

const mutations = {
	SET_TIMELINE_GLOBAL: (state, data) => {
		state.timeline = Object.assign([],data)
	},
	SET_TIMELINE_TAB: (state, data) => {
		state.timelineTab = data
	},
	SET_NEW_TRENDS: (state, data) => {
		state.newTrends = Object.assign([],data)
	},
	SET_NEW_SUB: (state, data) => {
		state.newSub = Object.assign([],data)
	},
	SET_RANK_GLOBAL_THREE: (state, data) => {
		state.mRankThreeAllList = Object.assign([],data)
	},
	SET_RANK_GLOBAL_SEVEN: (state, data) => {
		state.mRankSevenAllList = Object.assign([],data)
	},
	SET_AD_SLIDE: (state, data) => {
		state.Ad.data = Object.assign([],data)
	}
}

const actions = {
	setTimeline({ commit, state }){
		getTimelineGlobal().then(res=>{
			commit('SET_TIMELINE_GLOBAL',res.result)
		})
	},
	setNewTrends({ commit, state }){
		getNewTrends().then(res=>{
			commit('SET_NEW_TRENDS',res.data)
		})
	},
	setNewSub({ commit, state }){
		getNewSub().then(res=>{
			commit('SET_NEW_SUB',res.data)
		})
	},
	setRankGlobalThree({ commit, state }){
		getRankGlobalThree().then(res=>{
			commit('SET_RANK_GLOBAL_THREE',res.result.list)
		})
	},
	setRankGlobalSeven({ commit, state }){
		getRankGlobalSeven().then(res=>{
			commit('SET_RANK_GLOBAL_SEVEN',res.result.list)
		})
	},
	setAdSlide({ commit, state }){
		getGlobalAdSlide().then(res=>{
			commit('SET_AD_SLIDE',res.result)
		})
	}
}

export default {
	namespaced: true,//注册header空间模块
	state,
	getters,
	actions,
	mutations
}
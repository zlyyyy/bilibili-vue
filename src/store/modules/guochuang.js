import { getTimelineCn, getRankCnThree, getRankCnSeven, getCnAdSlide } from '../../api'
import axios from 'axios'
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
	mRankThreeAllList: [],//三日全部排行
	mRankThreeAllMoreUrl: '/ranking/bangumi/167/0/3/',//三日全部排行更多链接
	mRankSevenAllList: [],//一周全部排行
	mRankSevenAllMoreUrl: '/ranking/bangumi/167/0/7/',//一周全部排行更多链接
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
	SET_TIMELINE_CN: (state, data) => {
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
	SET_RANK_THREE_ALL_LIST: (state, data) => {
		state.rankThreeAllList = Object.assign([],data)
	},
	SET_RANK_THREE_ORIGINAL_LIST: (state, data) => {
		state.rankThreeOriginalList = Object.assign([],data)
	},
	SET_RANK_SEVEN_ALL_LIST: (state, data) => {
		state.rankSevenAllList = Object.assign([],data)
	},
	SET_RANK_SEVEN_ORIGINAL_LIST: (state, data) => {
		state.rankSevenOriginalList = Object.assign([],data)
	},
	SET_RANK_CN_THREE: (state, data) => {
		state.mRankThreeAllList = Object.assign([],data)
	},
	SET_RANK_CN_SEVEN: (state, data) => {
		state.mRankSevenAllList = Object.assign([],data)
	},
	SET_AD_SLIDE: (state, data) => {
		state.Ad.data = Object.assign([],data)
	}
}

const actions = {
	//七日更新表
	setTimeline({ commit, state }){
		getTimelineCn().then(res=>{
			commit('SET_TIMELINE_CN',res.result)
		})
	},
	//三日排行
	setRankCnThree({ commit, state }){
		getRankCnThree().then(res=>{
			commit('SET_RANK_CN_THREE',res.result.list)
		})
	},
	//七日排行
	setRankCnSeven({ commit, state }){
		getRankCnSeven().then(res=>{
			commit('SET_RANK_CN_SEVEN',res.result.list)
		})
	},
	//广告位
	setAdSlide({ commit, state }){
		getCnAdSlide().then(res=>{
			commit('SET_AD_SLIDE',res.result)
		})
	},
	//相关内容
	setRelatedContent({ commit, state }){
		axios.all([
			axios.get('/static/bangumiData/gc_newTrends.json'),
			axios.get('/static/bangumiData/gc_newSub.json'),
			axios.get('/static/bangumiData/ranking/gc_rankThreeAllList.json'),
			axios.get('/static/bangumiData/ranking/gc_rankThreeOriginalList.json'),
			axios.get('/static/bangumiData/ranking/gc_rankSevenAllList.json'),
			axios.get('/static/bangumiData/ranking/gc_rankSevenOriginalList.json'),
		]).then(axios.spread((
			newTrends,//国创相关新动态
			newSub,//国创相关新投稿
			rankThreeAllList,//国创三日全部排行
			rankThreeOriginalList,//国创三日原创排行
			rankSevenAllList,//国创七日全部排行
			rankSevenOriginalList,//国创七日原创排行
		)=>{
			commit('SET_NEW_TRENDS',newTrends.data.data),
			commit('SET_NEW_SUB',newSub.data.data),
			commit('SET_RANK_THREE_ALL_LIST',rankThreeAllList.data.data),
			commit('SET_RANK_THREE_ORIGINAL_LIST',rankThreeOriginalList.data.data)
			commit('SET_RANK_SEVEN_ALL_LIST',rankSevenAllList.data.data),
			commit('SET_RANK_SEVEN_ORIGINAL_LIST',rankSevenOriginalList.data.data)
		}))
	}
}

export default {
	namespaced: true,//注册header空间模块
	state,
	getters,
	actions,
	mutations
}
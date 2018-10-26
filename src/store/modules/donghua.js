import axios from 'axios'
import { getDynamicRegion, getNewlist, getRankingRegion } from '../../api'
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
	data: [],//动态区域数据
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
	SET_DONGHUA_DATA: (state, data) => {
		state.data = Object.assign({},data)
	},
	SET_NEW_SUB: (state, data) => {
		state.newSub = Object.assign({},data)
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
	}
}

const actions = {
	setDynamicRegion({ commit, state },data){
		//获取新动态
		//设置当前动态区域数据
		getDynamicRegion(data).then(res=>{
			commit('SET_DONGHUA_DATA', res.data)
		})
	},
	setNewlist({ commit, state },data){
		//获取最新投稿
		//设置当前动态区域数据
		getNewlist(data).then(res=>{
			commit('SET_DONGHUA_DATA', res.data)
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
import axios from 'axios'
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
	SET_NEW_TRENDS: (state, data) => {
		state.newTrends = Object.assign({},data)
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
	setDynamic({ commit, state },){
		axios.all([
			axios.get('/static/maindata/dh_newTrends.json'),
			axios.get('/static/maindata/dh_newSub.json'),
			axios.get('/static/maindata/ranking/dh_rankThreeAllList.json'),
        	axios.get('/static/maindata/ranking/dh_rankThreeOriginalList.json'),
        	axios.get('/static/maindata/ranking/dh_rankSevenAllList.json'),
        	axios.get('/static/maindata/ranking/dh_rankSevenOriginalList.json'),
		]).then(axios.spread((
			newTrends,//动画新投稿
			newSub,//动画新动态
			rankThreeAllList,//动画三日全部排行
			rankThreeOriginalList,//动画三日原创排行
			rankSevenAllList,//动画七日全部排行
			rankSevenOriginalList,//动画七日原创排行
		)=>{
			commit('SET_NEW_TRENDS',newTrends.data.data),
			commit('SET_NEW_SUB',newSub.data.data)
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
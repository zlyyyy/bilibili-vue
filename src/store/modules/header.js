const state = {
	headBanner: []
}

const getters = {}

const mutations = {
	headBanner(state,data){
		state.headBanner = data
	}
}

const actions = {
	headBanner({ commit, state },data){
		commit('headBanner',data)
	}
}

export default {
	namespaced: true,//注册header空间模块
	state,
	getters,
	actions,
	mutations
}
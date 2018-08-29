import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
// import createLogger from 'vuex/dist/logger'
import notFound from './modules/404'
import header from './modules/header'
import login from './modules/login'
import home from './modules/index'
import ranking from './modules/ranking'
import search from './modules/search'
import video from './modules/video'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失

export default new Vuex.Store({
	state,
	getters,
    mutations,
    actions,
	// 默认导出vuex模块
	modules: {
		// 导入模块
		notFound,
		header,
		login,
		ranking,
		search,
		video
	},
	strict: debug,
	// plugins: debug ? [createLogger()] : []
	// 是否开启严格模式
})

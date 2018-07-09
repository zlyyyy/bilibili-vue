import donghua from '../modules/home/donghua'
import bangumi from '../modules/home/bangumi'
import guochuang from '../modules/home/guochuang'

const modules = {
    donghua,
    bangumi,
    guochuang
}

const state = {
    //轮播图模块
    slide: {
        time: 2000,
        pagation: true,
        data: []
    },
    //推荐模块
    recommend: {
        rec: [],//所有
        nowRec: [],//当前
        nowLeft: '一周',
        nowRight: '三日'
    },
    //推广模块
    popularize: [],
    //当前在线
    online: [],
    //主要模块
    fjnowtab: 0,//更新时间轴
    gcnowtab: 0,//更新时间轴
    timelineCn:[]
}

const getters = {}

const mutations = {
	//登录弹窗显示隐藏
    setSlide(state,data) {
        state.slide.data = Object.assign([],data)
    },
    setRec(state,data) {
        state.recommend.rec = Object.assign({},data)
    },
    setNowrec(state,data) {
        state.recommend.nowRec = data.now
        state.recommend.nowLeft = data.nowLeft
        state.recommend.nowRight = data.nowRight
    },
    setPopularize(state,data){
        state.popularize = Object.assign([],data)
    },
    setOnline(state,data) {
        state.online = Object.assign({},data)
    }
}

const actions = {
	getSlide({commit,state},msg) {
        commit('setSlide',msg)
    },
    getRec({commit,state},msg){
        commit('setRec',msg)
    },
    getNowrec({commit,state},msg){
        commit('setNowrec',msg)
    },
    getPopularize({commit,state},msg){
        commit('setPopularize',msg)
    },
    getOnline({commit,state},msg) {
        commit('setOnline',msg)
    }
}

export default {
    namespaced: true,//注册login空间模块
    modules,
	state,
	getters,
	actions,
	mutations
}
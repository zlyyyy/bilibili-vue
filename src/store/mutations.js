import * as types from './mutation-types'

const mutations = {
    [types.SET_SLIDE](state,slide){
        //首页轮播图
        state.slide.data = slide
    },
    [types.SET_POPULARIZE](state,popularize){
        //推广模块
        state.popularize = popularize
    },
    [types.SET_RANKING_INDEX](state,data){
        //推荐昨日、三日、一周排行轮播图
        state.recommend.rec = data.data
        state.recommend.day = data.day
    },
    [types.SET_ONLINE](state,online){
        //当前在线
        state.online = online
    }
}
export default mutations
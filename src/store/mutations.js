import * as types from './mutation-types'

const mutations = {
    [types.SET_SLIDE](state,slide){
        state.slide.data = slide
    },
    [types.SET_POPULARIZE](state,popularize){
        state.popularize = popularize
    },
    [types.SET_RECOMMEND](state,recom){
        state.recommend.rec = recom
    },
    [types.SET_RECNOW](state,{ recNow, nowLeft, nowRight }){
        state.recommend.recNow = recNow
        state.recommend.nowLeft = nowLeft
        state.recommend.nowRight = nowRight
    },
    [types.SET_ONLINE](state,online){
        state.online = online
    }
}
export default mutations
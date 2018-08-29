import * as types from './mutation-types'

const mutations = {
    [types.SET_SLIDE](state,slide){
        state.slide.data = slide
    },
    [types.SET_RECOM](state,recom){
        state.recommend.rec = recom
    }
}
export default mutations
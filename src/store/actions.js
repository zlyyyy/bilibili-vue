import * as types from './mutation-types'
import { getSlide, getRecommend } from '../api'

export const setSlide = function({commit}, id) {
    getSlide(id).then(res=>{
        commit(types.SET_SLIDE, res.data[id])
    })
}
import * as types from './mutation-types'
import { getLocs, getRankingIndex, getOnline } from '../api'

//轮播图，推广模块
export const setSlide = function({commit}, data) {
    getLocs(data).then(res=>{
        commit(types.SET_SLIDE, res.data['23'])
        commit(types.SET_POPULARIZE, res.data['34'])
    })
}
//推荐模块
export const setRankingIndex = function({commit}, day){
    getRankingIndex(day).then(res=>{
        commit(types.SET_RANKING_INDEX, {
            data: res.data,
            day: day
        })
    })
}
//当前在线
export const setOnline = function({commit}){
    getOnline().then(res=>{
        commit(types.SET_ONLINE, res.data)
    })
}

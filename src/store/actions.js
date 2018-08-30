import * as types from './mutation-types'
import { getSlidePop, getRecom, getOnline } from '../api'

//轮播图，推广模块
export const setSlidePop = function({commit}, { slide, popularize }) {
    getSlidePop().then(res=>{
        commit(types.SET_SLIDE, res.data[slide])
        commit(types.SET_POPULARIZE, res.data[popularize])
    })
}
//推荐模块
export const setRecom = function({commit}){
    getRecom().then(res=>{
        commit(types.SET_RECOMMEND, res.data)
        commit(types.SET_RECNOW, {
            recNow: res.data.yesterday,
            nowLeft: '一周',
            nowRight: '三日'
        })
    })
}
//当前在线
export const setOnline = function({commit}){
    getOnline().then(res=>{
        commit(types.SET_ONLINE, res.data)
    })
}

import * as types from './mutation-types'
import { 
    getLocs,
    getRankingIndex,
    getOnline,
    getDynamicRegion,
    getNewlist,
    getRankingRegion,
    getTimelineGlobal 
} from '../api'

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
//新动态
export const setDynamicRegion = function({ commit, state },data){
    const params = {
        ps: data.ps,
        rid: data.rid
    }
    //获取新动态
    //设置当前动态区域数据
    getDynamicRegion(params).then(res=>{
        const _data = {
            data: res.data,
            id: data.id
        }
        commit(types.SET_STOREY_DATA, _data)
    })
}
//最新投稿
export const setNewlist = function({ commit, state },data){
    const params = {
        ps: data.ps,
        rid: data.rid
    }
    //获取最新投稿
    //设置当前动态区域数据
    getNewlist(params).then(res=>{
        const _data = {
            data: res.data,
            id: data.id
        }
        commit(types.SET_STOREY_DATA, _data)
    })
}
//排行榜
export const setRankingRegion = function({ commit, state },data){
    const params = {
        rid: data.rid,
        day: data.day,
        original: data.original
    }
    //获取最新投稿
    //设置当前动态区域数据
    getRankingRegion(params).then(res=>{
        const _data = {
            data: res.data,
            id: data.id,
            original: data.original
        }
        commit(types.SET_RANKING_DATA, _data)
    })
}
//番剧更新时间表
export const setTimeline = function({ commit, state },data){
    getTimelineGlobal().then(res=>{
        commit(types.SET_TIMELINE_DATA, res.data)
    })
}

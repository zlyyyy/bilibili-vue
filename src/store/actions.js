import * as types from './mutation-types'
import { 
    getAdSlide,
    getLocs,
    getRankingIndex,
    getOnline,
    getDynamicRegion,
    getNewlist,
    getRankingRegion,
    getTimelineGlobal,
    getRankingGlobal3,
    getRankingGlobal7,
    getTimelineCn,
    getRankingCn3,
    getRankingCn7 
} from '../api'

//广告位轮播图
export const setAdSlide = function({commit}, data) {
    const _data = {
        id: data.id,
        rid: data.rid
    }
    const params = {
        position_id: data.position_id
    }
    getAdSlide(params).then(res=>{
        _data.data = res.result
        commit(types.SET_AD_SLIDE, _data)
    })
}
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
    // console.log(data)
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
    // console.log(data)
    const params = {
        rid: data.rid,
        day: data.day,
        original: data.original
    }
    const _data = {
        id: data.id,
        original: data.original,
        data: []
    }
    switch(data.rid){
        case 13: 
            if(data.day == 3){
                getRankingGlobal3().then(res=>{
                    _data.data = res.result
                    // console.log(_data)
                    commit(types.SET_RANKING_DATA, _data)
                })
            }else{
                getRankingGlobal7().then(res=>{
                    _data.data = res.result
                    commit(types.SET_RANKING_DATA, _data)
                })
            }
            break
        case 168:
            if(data.day == 3){
                getRankingCn3().then(res=>{
                    _data.data = res.result
                    commit(types.SET_RANKING_DATA, _data)
                })
            }else{
                getRankingCn7().then(res=>{
                    _data.data = res.result
                    commit(types.SET_RANKING_DATA, _data)
                })
            }
            break
        default:
            //获取排行榜
            //设置当前排行榜数据
            getRankingRegion(params).then(res=>{
                _data.data = res.data
                commit(types.SET_RANKING_DATA, _data)
            })
            break
    }
}
//番剧更新时间表
export const setTimeline = function({ commit, state },data){
    const _data = {
        id: data.id,
        rid: data.rid
    }
    switch(data.rid){
        case 13:
            getTimelineGlobal().then(res=>{
                _data.data = res.result
                commit(types.SET_TIMELINE_DATA, _data)
            })
            break
        case 168:
            getTimelineCn().then(res=>{
                _data.data = res.result
                commit(types.SET_TIMELINE_DATA, _data)
            })
            break
        default:
            break
    }
    
}

import * as types from './mutation-types'

const mutations = {
    [types.SET_AD_SLIDE](state,data){
        //广告位轮播图
        state.module[data.id].ad.data = data.data
    },
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
    },
    [types.SET_STOREY_DATA](state,data){
        //动态区域数据-新动态、最新投稿
        state.module[data.id].data = data.data
    },
    [types.SET_RANKING_DATA](state,data){
        // console.log(data)
        //相关排行榜
        switch(data.original){
            case 0: 
                state.module[data.id].rankAllData = data.data
                break
            case 1: 
                state.module[data.id].rankOriginalData = data.data
                break
            default:
                state.module[data.id].rankBangumiData = data.data
                break
        }
    },
    [types.SET_TIMELINE_DATA](state,data){
        const id = data.id
        //更新时间表
        state.module[id].timeline.data = data.data
    },
}
export default mutations
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
    },
    [types.SET_STOREY_DATA](state,data){
        //动态区域数据-新动态、最新投稿
        state.module[data.id].data = data.data
    },
    [types.SET_RANKING_DATA](state,data){
        //相关排行榜
        switch(data.original){
            case 0: 
                state.module[data.id].rankAllData = data.data
                break
            case 1: 
                state.module[data.id].rankOriginalData = data.data
                break
            default:
                break
        }
    },
    [types.SET_TIMELINE_DATA](state,data){
        //更新时间表
        // switch(data.original){
        //     case 0: 
        //         state.module[data.id].rankAllData = data.data
        //         break
        //     case 1: 
        //         state.module[data.id].rankOriginalData = data.data
        //         break
        //     default:
        //         break
        // }
    },
}
export default mutations
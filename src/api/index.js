import http from '../utils/http'

//头部背景图
export function getHeadBanner(id) {
    return http.get('/static/headbanner.json',{
        params: {
            pf: 0,
            id: id
        }
    })
}
//搜索框默认关键词
export function getSearchDefaultWords(){
    return http.get('/api/widget/getSearchDefaultWords')
}
//搜索框下gif
export function getMenuIcon(){
    return http.get('/static/menuicon.json')
}

//首页轮播图
export function getSlidePop(){
    return http.get('/static/popularize.json')
}
//首页推广模块
export function getRecom(){
    return http.get('/static/recommend.json')
}
//当前在线数
export function getOnline(){
    return http.get('/static/online.json')
}


//登录获取个人信息
export function getUserInfo(){
    return http.get('/static/login.json')
}
//获取大会员推荐信息
export function getVipInfo(){
    return http.get('/static/topInfo.json')
}

//番剧七日更新表
export function getTimelineGlobal(){
    return http.get('/static/bangumiData/timeline_global.json')
}
//番剧新动态
export function getNewTrends(){
    return http.get('/static/bangumiData/fj_newTrends.json')
}
//番剧最近投稿
export function getNewSub(){
    return http.get('/static/bangumiData/fj_newSub.json')
}
//番剧三日排行
export function getRankGlobalThree(){
    return http.get('/static/bangumiData/ranking/timeline_global_3.json')
}
//番剧七日排行
export function getRankGlobalSeven(){
    return http.get('/static/bangumiData/ranking/timeline_global_7.json')
}
//番剧广告位
export function getGlobalAdSlide(){
    return http.get('/static/fj_ad_slide.json')
}


//国创七日更新表
export function getTimelineCn(){
    return http.get('/static/bangumiData/timeline_cn.json')
}
//国创三日排行
export function getRankCnThree(){
    return http.get('/static/bangumiData/ranking/timeline_cn_3.json')
}
//国创七日排行
export function getRankCnSeven(){
    return http.get('/static/bangumiData/ranking/timeline_cn_7.json')
}
//国创广告位
export function getCnAdSlide(){
    return http.get('/static/gc_ad_slide.json')
}

//排行榜数据
export function getRankData(type, rid, arc_type,day){
    return http.get('/static/ranking/all.json',{
        params: {
            type: type,
            rid: rid,
            arc_type: arc_type,
            day: day
        }
    })
}

//搜索结果
export function getSearchResult(highlight, keyword){
    return http.get('/static/search/all.json',{
        params: {
            highlight: highlight,
            keyword: keyword
        }
    })
}
//根据media_id获取详细信息
export function getSeason(index, id){
    return http.get('/static/search/season'+index+'.json',{
        params: {
            media_id: id
        }
    })
}
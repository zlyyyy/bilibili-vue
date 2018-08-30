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
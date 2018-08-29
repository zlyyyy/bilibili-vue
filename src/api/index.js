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
//搜索框下面gif
export function getMenuIcon(){
    return http.get('/static/menuicon.json')
}
//首页轮播图
export function getSlide(id){
    return http.get('/static/popularize.json',{
        params: {
            id: id
        }
    })
}
//首页推广模块
export function getRecom(now,nowLeft,nowRight){
    return http.get('/static/recommend.json?now='+now+'&nowLeft'+nowLeft+'&nowRight'+nowRight)
}
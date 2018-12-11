import Vue from 'vue'
import VueRouter from 'vue-router'

import Indexpage from '../pages/home/index'
import NotFound from '../pages/notFound/404'

const Ranking = resolve => require(['@/pages/ranking/ranking'], resolve),
          RankingAllList = resolve => require(['@/components/ranking/allList'], resolve),
          Search = resolve => require(['@/pages/search/search'], resolve),
          SearchList = resolve => require(['@/components/search/searchList'], resolve),
          Videopage = resolve => require(['@/pages/video/video'], resolve)

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Indexpage,
            meta: {
                title: 'VUE哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
            },
        },
        {
            name:'Ranking',
            path: '/ranking',
            component: Ranking,
            redirect: '/ranking/all/0/0/0',
            children: [
                {
                    name: 'all',
                    path: ':type/:rid/:rankselect/:rankselect2',
                    component: RankingAllList,
                    meta: {
                        title: 'VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'origin',
                    path: ':type/:rid/:rankselect/:rankselect2',
                    component: RankingAllList,
                    meta: {
                        title: 'VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'bangumi',
                    path: ':type/:rid/:rankselect/:rankselect2',
                    component: RankingAllList,
                    meta: {
                        title: 'VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'cinema',
                    path: ':type/:rid/:rankselect/:rankselect2',
                    component: RankingAllList,
                    meta: {
                        title: 'VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'rookie',
                    path: ':type/:rid/:rankselect/:rankselect2',
                    component: RankingAllList,
                    meta: {
                        title: 'VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                }
            ]
        },
        {
            path: '/search',
            component: Search,
            redirect: '/search/all',
            children: [
                {
                    name: 'searchAll',
                    path: 'all',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'searchVideo',
                    path: 'video',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'searchBangumi',
                    path: 'bangumi',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'searchPgc',
                    path: 'pgc',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'searchLive',
                    path: 'live',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'searchArticle',
                    path: 'article',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'searchTopic',
                    path: 'topic',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'upuser',
                    path: 'upuser',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                },
                {
                    name: 'photo',
                    path: 'photo',
                    component: SearchList,
                    meta: {
                        title: 'VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    }
                }
            ]
        },
        {
            name: 'video',
            path: '/video/:aid',
            component: Videopage,
            meta: {
                title: ':aid - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
            }
        },
        {
            path: '*',
            component: NotFound,
            meta: {
                title: 'VUE出错啦! - bilibili.com'
            }
        }
    ]
})
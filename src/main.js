// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import Axios from 'axios'
import Base from './base/base'
import Indexpage from './pages/index'
import NotFound from './pages/404'
import Ranking from './pages/ranking'
//RankingAllList page
import RankingAllList from './pages/ranking/allList'

import Videopage from './pages/video'

Vue.use(VueRouter)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('../src/assets/loading.png'),
    loading: require('../src/assets/loading.png'),
    attempt: 1
  })
Vue.prototype.$axios = Axios;
Vue.use(Base)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
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

                    // path: 'rookie',
                    // component: RankingAll,
                    // redirect: '/ranking/rookie/0/0/0',
                    // children: [
                    //     {
                    //         name: 'Rookie',
                    //         path: ':rid/:rankselect/:rankselect2',
                    //         component: RankingAllList,
                    //         meta: {
                    //             title: 'VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
                    //         }
                    //     }
                    // ]
                }
            ]
        },
        {
            path: '/video/:aid',
            component: Videopage,
            meta: {
                title: 'VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
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
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    document.title = to.meta.title
    next()
  })
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
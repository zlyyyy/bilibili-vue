// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import Axios from 'axios'
import Base from './base/base'
import Indexpage from './pages/index'
import Ranking from './pages/ranking'
// ranking page
import RankingAll from './pages/ranking/all'
//all page
import RankingAllAll from './pages/ranking/all/all'


import RankingOrigin from './pages/ranking/origin'
import RankingBangumi from './pages/ranking/bangumi'
import RankingCinema from './pages/ranking/cinema'
import RankingRookie from './pages/ranking/rookie'

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
            component: Indexpage
        },
        {
            name:'Ranking',
            path: '/ranking',
            component: Ranking,
            redirect: '/ranking/all',
            children: [
                {
                    path: 'all',
                    component: RankingAll,
                    redirect: '/ranking/all/0/0/0',
                    children: [
                        {
                            name: 'All',
                            path: ':rid/:rankselect/:rankselect2',
                            component: RankingAllAll
                        }
                    ]
                },
                {
                    path: 'origin',
                    component: RankingOrigin
                },
                {
                    path: 'bangumi',
                    component: RankingBangumi
                },
                {
                    path: 'cinema',
                    component: RankingCinema
                },
                {
                    path: 'rookie',
                    component: RankingRookie
                }
            ]
        },
        {
            path: '/video',
            component: Videopage
        }
    ]
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
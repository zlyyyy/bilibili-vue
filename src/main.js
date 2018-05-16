// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Axios from 'axios'
import Indexpage from './pages/index'
import Ranking from './pages/ranking'
// ranking page
import RankingAll from './pages/ranking/all'
//all page
import RankingAllAll from './pages/ranking/all/all'
import RankingAllDonghua from './pages/ranking/all/donghua'
import RankingAllGuochuang from './pages/ranking/all/guochuang'
import RankingAllMusic from './pages/ranking/all/music'
import RankingAllDance from './pages/ranking/all/dance'
import RankingAllGame from './pages/ranking/all/game'
import RankingAllScience from './pages/ranking/all/science'
import RankingAllLife from './pages/ranking/all/life'
import RankingAllGuichu from './pages/ranking/all/guichu'
import RankingAllFashion from './pages/ranking/all/fashion'
import RankingAllEnt from './pages/ranking/all/ent'
import RankingAllMovies from './pages/ranking/all/movies'


import RankingOrigin from './pages/ranking/origin'
import RankingBangumi from './pages/ranking/bangumi'
import RankingCinema from './pages/ranking/cinema'
import RankingRookie from './pages/ranking/rookie'

import Videopage from './pages/video'

Vue.use(VueRouter)
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Indexpage
        },
        {
            path: '/ranking',
            component: Ranking,
            redirect: '/ranking/all',
            children: [
                {
                    path: 'all',
                    component: RankingAll,
                    redirect: '/ranking/all/0',
                    children: [
                        {
                            path: '0',
                            component: RankingAllAll
                        },
                        {
                            path: '1',
                            component: RankingAllDonghua
                        },
                        {
                            path: '168',
                            component: RankingAllGuochuang
                        },
                        {
                            path: '3',
                            component: RankingAllMusic
                        },
                        {
                            path: '129',
                            component: RankingAllDance
                        },
                        {
                            path: '4',
                            component: RankingAllGame
                        },
                        {
                            path: '36',
                            component: RankingAllScience
                        },
                        {
                            path: '160',
                            component: RankingAllLife
                        },
                        {
                            path: '119',
                            component: RankingAllGuichu
                        },
                        {
                            path: '155',
                            component: RankingAllFashion
                        },
                        {
                            path: '5',
                            component: RankingAllEnt
                        },
                        {
                            path: '181',
                            component: RankingAllMovies
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
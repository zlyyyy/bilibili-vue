<template>
    <div class="app-body bili-wrapper">
        <div id="chief_recommend" class="chief-recommend-module">
            <slide :slidedata="slidedata" :slidetimedata="slidetime" :pagation="pagation"></slide>
            <!-- 轮播图  昨日 三日 一周 推荐 -->
            <keep-alive>
                <recommend></recommend>
            </keep-alive>
        </div>
        <!-- 推广模块 -->
        <popularize :popularizeOnline="onlineData"></popularize>
        <!--  动画 --> 
        <zone-module :maindataModule="mainData" @videoInfoxy='videoinforevent'>
        </zone-module>
         <!-- 更新
        <dh-update></dh-update> -->
         <div class="video-info-module" :style="{ left: videodata.leftnum+'px' , top: videodata.topnum+'px' }" v-if="videoinforShow">
            <div class="v-title">
                {{ videoinforitem[videodata.mouseindex].title }}
            </div>
            <div class="v-info">
                <span class="name">{{videoinforitem[videodata.mouseindex].author}}</span><span class="line"></span><span class="time">{{ videoinforitem[videodata.mouseindex].create }}</span>
            </div>
            <div class="v-preview clearfix">
                <div class="lazy-img">
                    <img :alt="videoinforitem[videodata.mouseindex].title" :src=videoinforitem[videodata.mouseindex].pic>
                </div>
                <p class="txt">
                    {{ videoinforitem[videodata.mouseindex].description }}
                </p>
            </div>
            <div class="v-data">
                <span class="play"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].play) }}</span><span class="danmu"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].video_review) }}</span><span class="star"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].favorites) }}</span><span class="coin"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].coins) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Slide from '../components/common/slide'
import Recommend from '../components/common/recommend'
import Popularize from '../components/common/popularize'
import ZoneModule from '../components/common/zoneModule'
import DhUpdate from '../components/common/dhUpdate'
export default {
    created() {
        this.online()
        this.mainDataGet()
        this.slide()
    },
    components:{
        Slide,
        Recommend,
        Popularize,
        ZoneModule,
        DhUpdate
    },
    data () {
        return {
            slidetime:2000,
            pagation: true,
            slidedata: [],
            onlineData: [],
            mainData: [
                {
                    id: 'bili_donghua',//模型id
                    title: '动画', //模型名称
                    icon: 'icon-donghua',//模型图标
                    tab:[
                        {
                            name: '有新动态'
                        },
                        {
                            name: '最新投稿'
                        }
                    ],
                    dynamic: 27989,//模型新动态数
                    moreUrl: '/v/donghua',//模型更多链接
                    newTrends: [],//最新动态
                    newSub: [],//最新投稿
                    ranktab: [
                        {
                            name: '全部'
                        },
                        {
                            name: '原创'
                        }
                    ],
                    timeline: false,
                    rankdropdown:[
                        {
                            name: '三日'
                        },
                        {
                            name: '一周'
                        }
                    ],
                    rankThreeAllList: [],//三日全部排行
                    rankThreeAllMoreUrl: '/ranking/all/1/1/3/',//三日全部排行更多链接
                    rankThreeOriginalList: [],//三日原创排行
                    rankThreeOriginalMoreUrl: '/ranking/origin/1/1/3/',//三日原创更多链接
                    rankSevenAllList: [],//一周全部排行
                    rankSevenAllMoreUrl: '/ranking/all/1/1/7/',//一周全部排行更多链接
                    rankSevenOriginalList: [],//一周原创排行
                    rankSevenOriginalMoreUrl: '/ranking/origin/1/1/7/'//一周原创排行链接
                },
                {
                    id: 'bili_bangumi',//模型id
                    title: '番剧', //模型名称
                    icon: 'icon-bangumi',//模型图标
                    tab:[
                        {
                            name: '最新'
                        },
                        {
                            name: '一'
                        },
                        {
                            name: '二'
                        },
                        {
                            name: '三'
                        },
                        {
                            name: '四'
                        },
                        {
                            name: '五'
                        },
                        {
                            name: '六'
                        },
                        {
                            name: '日'
                        }
                    ],
                    dynamic: 1514,//模型新动态数
                    moreUrl: '/v/bangumi',//模型更多链接
                    newTrends: [],//最新动态
                    newSub: [],//最新投稿
                    ranktab: [],
                    timeline: true,
                    timelineData: [],
                    rankdropdown:[
                        {
                            name: '三日'
                        },
                        {
                            name: '一周'
                        }
                    ],
                    rankThreeAllList: [],//三日全部排行
                    rankThreeAllMoreUrl: '/ranking/bangumi/13/1/3/',//三日全部排行更多链接
                    rankSevenAllList: [],//一周全部排行
                    rankSevenAllMoreUrl: '/ranking/bangumi/13/1/7/'//一周全部排行更多链接
                }
            ],
            timelineCn:[],   
            videodata: [],
            videoinforShow: false,
            videoinforitem: []
        }
    },
    methods: {
        slide() {
            this.$axios.get('/static/popularize.json')
            .then((res)=>{
                this.slidedata = res.data.data["23"]
            }).catch((error)=>{
                console.log(error)
            })
        },
        //当前在线数
        online() {
            this.$axios.get('/static/online.json')
            .then((res)=>{
                this.onlineData = res.data
            }).catch((error)=>{
                console.log(error)
            })
        },
        mainDataGet() {
            //并发处理
                this.$axios.all([
                    this.$axios.get('/static/maindata/dh_newTrends.json'),
                    this.$axios.get('/static/maindata/dh_newSub.json'),
                    this.$axios.get('/static/maindata/dh_rankThreeAllList.json'),
                    this.$axios.get('/static/maindata/dh_rankThreeOriginalList.json'),
                    this.$axios.get('/static/maindata/dh_rankSevenAllList.json'),
                    this.$axios.get('/static/maindata/dh_rankSevenOriginalList.json'),
                    this.$axios.get('/static/timeline_global.json'),
                    this.$axios.get('/static/timeline_cn.json'),
                ])
                .then(this.$axios.spread(( newTrends,newSub,rankThreeAllList,rankThreeOriginalList,rankSevenAllList,rankSevenOriginalList,timelineGlobal,timelineCn ) => {
                    this.mainData[0].newTrends = newTrends.data.data
                    this.mainData[0].newSub = newSub.data.data
                    this.mainData[0].rankThreeAllList = rankThreeAllList.data.data
                    this.mainData[0].rankThreeOriginalList = rankThreeOriginalList.data.data
                    this.mainData[0].rankSevenAllList = rankSevenAllList.data.data
                    this.mainData[0].rankSevenOriginalList = rankSevenOriginalList.data.data
                    this.mainData[1].timelineData = timelineGlobal.data.result
                    this.timelineCn = timelineCn.data.result
                }))
        },
        videotest()  {
            if(this.videodata.ranknowtab === 0 && this.videodata.rankselect ===0){
                this.videoinforitem = this.mainData[0].rankThreeAllList
            }else if(this.videodata.ranknowtab === 1 && this.videodata.rankselect ===0){
                this.videoinforitem = this.mainData[0].rankThreeOriginalList
            }else if(this.videodata.ranknowtab === 0 && this.videodata.rankselect ===1){
                this.videoinforitem = this.mainData[0].rankSevenAllList
            }else if(this.videodata.ranknowtab === 1 && this.videodata.rankselect ===1){
                this.videoinforitem = this.mainData[0].rankSevenOriginalList
            }
        },
        videoinforevent(data){
            this.videodata = data
            this.videoinforShow = data.videoinforShow
            this.videotest()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

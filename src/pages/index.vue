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
        <!--  动画 --> 
        <bangumi-module :bangumiData="bangumiData">
        </bangumi-module>
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
import BangumiModule from '../components/base/bangumiModule'
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
        BangumiModule,
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
                    rankPic: true,
                    rankLists: 7,
                    rankThreeAllList: [],//三日全部排行
                    rankThreeAllMoreUrl: '/ranking/all/1/1/3/',//三日全部排行更多链接
                    rankThreeOriginalList: [],//三日原创排行
                    rankThreeOriginalMoreUrl: '/ranking/origin/1/1/3/',//三日原创更多链接
                    rankSevenAllList: [],//一周全部排行
                    rankSevenAllMoreUrl: '/ranking/all/1/1/7/',//一周全部排行更多链接
                    rankSevenOriginalList: [],//一周原创排行
                    rankSevenOriginalMoreUrl: '/ranking/origin/1/1/7/'//一周原创排行链接
                }
            ],
            bangumiData: [
                {
                    id: 'bili_bangumi',//模型id
                    title: '番剧', //模型名称
                    title2: '番剧动态',
                    icon: 'icon-bangumi',//模型图标
                    tab:[
                        {
                            name: '有新动态'
                        },
                        {
                            name: '最新投稿'
                        }
                    ],
                    tab2:[
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
                    rankPic: false,
                    rankLists: 10,
                    rankThreeAllList: [],//三日全部排行
                    rankThreeAllMoreUrl: '/ranking/bangumi/13/1/3/',//三日全部排行更多链接
                    rankSevenAllList: [],//一周全部排行
                    rankSevenAllMoreUrl: '/ranking/bangumi/13/1/7/',
                    AdShow: true,//一周全部排行更多链接
                    AdData: [
                        {

                        }
                    ]
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
                    this.$axios.get('/static/ranking/timeline_global_3.json'),
                    this.$axios.get('/static/ranking/timeline_global_7.json'),
                    this.$axios.get('/static/maindata/fj_newTrends.json'),
                    this.$axios.get('/static/maindata/fj_newSub.json'),
                    this.$axios.get('/static/fj_ad_slide.json'),
                    this.$axios.get('/static/timeline_cn.json'),
                ])
                .then(this.$axios.spread(( 
                    newTrends,
                    newSub,
                    rankThreeAllList,
                    rankThreeOriginalList,
                    rankSevenAllList,
                    rankSevenOriginalList,
                    timelineGlobal,
                    timelineGlobalThree,
                    timelineGlobalSeven,
                    fjnewTrends,
                    fjnewSub,
                    fjadSlide,
                    timelineCn 
                ) => {
                    this.mainData[0].newTrends = newTrends.data.data
                    this.mainData[0].newSub = newSub.data.data
                    this.mainData[0].rankThreeAllList = rankThreeAllList.data.data
                    this.mainData[0].rankThreeOriginalList = rankThreeOriginalList.data.data
                    this.mainData[0].rankSevenAllList = rankSevenAllList.data.data
                    this.mainData[0].rankSevenOriginalList = rankSevenOriginalList.data.data
                    this.bangumiData[0].timelineData = timelineGlobal.data.result
                    this.bangumiData[0].rankThreeAllList = timelineGlobalThree.data.result.list
                    this.bangumiData[0].rankSevenAllList = timelineGlobalSeven.data.result.list
                    this.bangumiData[0].newTrends = fjnewTrends.data.data
                    this.bangumiData[0].newSub = fjnewSub.data.data
                    this.bangumiData[0].AdData = fjadSlide.data.data
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
<style>
.zone-wrap-module {
    overflow: hidden;
    padding-bottom: 30px;
}
.new-comers-module .zone-title {
    padding: 10px 20px 30px 0;
}
.new-comers-module .zone-title .headline {
    padding: 0 0 15px;
}
.new-comers-module .zone-title .headline .icon_t,
.bangumi-timing-module .headline .icon_t {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    vertical-align: middle;
    float: left;
    margin-top: -10px;
}
.new-comers-module .zone-title .headline .icon_t.icon-donghua {
    background-position: -141px -908px;
}
.bangumi-timing-module .headline .icon_t.icon-bangumi {
    background-position: -141px -140px;
}
.new-comers-module .zone-title .headline .name,
.bangumi-timing-module .headline .name {
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    margin-right: 20px;
    float: left;
    color: #222;
}
.new-comers-module .zone-title .fj .name {
    font-size: 18px;
}
.new-comers-module .zone-title .headline .name:hover {
    color: #00a1d6;
}
.new-comers-module .bili-tab {
    float: left;
    margin: 0 10px 0 0;
}
.bangumi-timing-module .headline {
    position: relative;
    padding: 10px 20px 30px 0;
}
.bangumi-timing-module .headline .bili-tab {
    font-size: 18px;
    width: 650px;
    height: 30px;
    line-height: 30px;
}
.bangumi-timing-module .headline .bili-tab .bili-tab-item {
    width: 70px;
    border-color: #e5e9ef;
    text-align: center;
    margin: 0;
    padding: 2px 4px 7px;
}
.bangumi-timing-module .headline .bili-tab .bili-tab-item.on {
    border-color: #00a1d6;
}
.bangumi-timing-module .headline .c-clink {
    position: absolute;
    right: 20px;
    top: 3px;
    border: 1px solid #f25d8e;
    width: 104px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #f25d8e;
    font-size: 14px;
    border-radius: 4px;
    -webkit-transition: .1s;
    -o-transition: .1s;
    transition: .1s;
}
.bangumi-timing-module .headline .c-clink:hover {
    color: #fff !important;
    background-color: #f25d8e;
}
.bangumi-timing-module .headline .c-clink:hover .icon {
    background-position: -541px -218px;
}
.bangumi-timing-module .headline .c-clink .icon {
    display: inline-block;
    vertical-align: middle;
    background-position: -478px -281px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0 5px;
}
.bangumi-timing-module .timing-box {
    position: relative;
    margin: 0 20px 40px 0;
    height: 398px;
    overflow-y: auto;
}
.bangumi-timing-module .timing-box.gc {
    height: 288px;
}
.bangumi-timing-module .card-timing {
    float: left;
    width: 180px;
    padding: 36px 34px 0 0;
}
.bangumi-timing-module .card-timing:first-child,
.bangumi-timing-module .card-timing:nth-child(2), 
.bangumi-timing-module .card-timing:nth-child(3), 
.bangumi-timing-module .card-timing:nth-child(4) {
    padding-top: 0;
}
.card-timing-module .pic {
    width: 72px;
    height: 72px;
    margin-right: 12px;
    display: block;
    float: left;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}
.card-timing-module .pic img {
    width: 72px;
    height: 72px;
}
.card-timing-module .r-text {
    float: left;
    width: 96px;
    height: 72px;
    position: relative;
}
.card-timing-module .r-text .t {
    display: block;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    text-align: left;
    width: 100%;
    margin-top: -3px;
    word-break: break-all;
    word-wrap: break-word;
    color: #222;
}
.card-timing-module .r-text .update {
    position: absolute;
    bottom: 0;
    text-align: left;
    margin-top: 2px;
    color: #aaa;
    left: 0;
    white-space: nowrap;
    line-height: 18px;
}
.card-timing-module .r-text .update a {
    color: #fff;
    border-radius: 9px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    padding: 0 4px;
    height: 18px;
    line-height: 18px;
    min-width: 28px;
    max-width: 70px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 5px;
    background: #b8c0cc;
}
.card-timing-module .r-text .update.on a {
    background: #ff8eb3;
}
.bili-tab .bili-tab-item {
    float: left;
    position: relative;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    padding: 1px 0 2px;
    border-bottom: 1px solid transparent;
    margin-left: 12px;
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
    -webkit-transition-property: border,color;
    -o-transition-property: border,color;
    transition-property: border,color;
}
.bili-tab .bili-tab-item:first-child {
    margin-left: 0;
}
.bili-tab .bili-tab-item.on {
    background-color: transparent;
    border-color: #00a1d6;
    color: #00a1d6;
}
.bili-tab .bili-tab-item:before {
    content: "";
    display: none;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    bottom: 0;
    width: 0;
    height: 0;
    border: 3px dashed #00a1d6;
    border-bottom-style: solid;
    border-top: 0;
    border-left-color: transparent;
    border-right-color: transparent;
}
.bili-tab .bili-tab-item.on:before {
    display: block;
}

.new-comers-module .zone-title .headline .link-more {
    float: right;
    width: 52px;
    height: 22px;
    line-height: 22px;
    background-color: #fff;
    border: 1px solid #ccd0d7;
    color: #555;
    border-radius: 4px;
    text-align: center;
    margin: 0 0 0 10px;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
}
.new-comers-module .zone-title .headline .link-more i {
    display: inline-block;
    background-position: -478px -218px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0;
    vertical-align: middle;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
}
.new-comers-module .zone-title .headline .link-more:hover {
    background-color: #ccd0d7;
    color: #555 !important;
}
.new-comers-module .zone-title .headline .link-more:hover i {
    margin-left: 5px;
}
.new-comers-module .zone-title .headline .read-push {
    float: right;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #ccd0d7;
    border-radius: 4px;
    height: 22px;
    padding: 0 10px;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
}
.new-comers-module .zone-title .headline .read-push .icon_read {
    display: inline-block;
    width: 12px;
    height: 13px;
    vertical-align: top;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    margin-top: 5px;
    background-position: -475px -89px;
}
.new-comers-module .zone-title .headline .read-push .info {
    display: inline-block;
    vertical-align: top;
    line-height: 22px;
    margin-left: 5px;
}
.new-comers-module .zone-title .headline .read-push .info b {
    font-weight: 700;
}
.new-comers-module .zone-title .headline .read-push:hover {
    background-color: #ccd0d7;
}
.new-comers-module .zone-title .headline .read-push:hover .icon_read {
    -webkit-transform: rotate(1turn);
    -ms-transform: rotate(1turn);
    transform: rotate(1turn);
}
.new-comers-module .storey-box .spread-module {
    float: left;
    margin: 0 20px 20px 0;
}
.zone-module .zone-rank {
    float: right;
    width: 260px;
    min-height: 360px;
    overflow: hidden;
}
.sec-rank .rank-head {
    height: 24px;
    line-height: 24px;
}
.sec-rank .rank-head h3 {
    float: left;
    font-size: 18px;
    font-weight: 400;
}
.sec-rank .rank-head .rank-tab {
    margin-left: 20px;
    float: left;
}
.bili-tab {
    overflow: hidden;
    zoom: 1;
}
.bili-tab .bili-tab-item {
    float: left;
    position: relative;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    padding: 1px 0 2px;
    border-bottom: 1px solid transparent;
    margin-left: 12px;
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
    -webkit-transition-property: border,color;
    -o-transition-property: border,color;
    transition-property: border,color;
}
.bili-tab .bili-tab-item:before {
    content: "";
    display: none;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    bottom: 0;
    width: 0;
    height: 0;
    border: 3px dashed #00a1d6;
    border-bottom-style: solid;
    border-top: 0;
    border-left-color: transparent;
    border-right-color: transparent;
}
.bili-tab .bili-tab-item:first-child {
    margin-left: 0;
}
.bili-tab .bili-tab-item.on {
    background-color: transparent;
    border-color: #00a1d6;
    color: #00a1d6;
}
.bili-tab .bili-tab-item.on:before {
    display: block;
}

.sec-rank .rank-list-wrap {
    width: 200%;
    overflow: hidden;
    zoom: 1;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
}
.sec-rank .rank-list-wrap .rank-list {
    padding-bottom: 15px;
    min-height: 278px;
    width: 50%;
    float: left;
    padding-top: 20px;
    position: relative;
}
.rank-list .rank-item {
    position: relative;
    padding-left: 25px;
    margin-top: 20px;
    overflow: hidden;
}
.rank-list .rank-item.first {
    margin-top: 0;
    margin-bottom: 15px;
}
.rank-list .rank-item .ri-num {
    position: absolute;
    color: #fff;
    height: 18px;
    line-height: 18px;
    top: 0;
    left: 0;
    font-size: 12px;
    min-width: 12px;
    text-align: center;
    background-color: #b8c0cc;
    border-radius: 4px;
    padding: 0 3px;
    font-weight: bolder;
    font-style: normal;
}
.rank-list .rank-item.highlight .ri-num {
    background: #f25d8e;
}
.rank-list .rank-item .ri-info-wrap {
    position: relative;
    display: inline-block;
    cursor: pointer;
}
.rank-list .rank-item .ri-preview {
    margin-right: 5px;
    width: 80px;
    height: 50px;
    float: left;
    display: none;
    border-radius: 4px;
    overflow: hidden;
}
.rank-list .rank-item.show-detail .ri-preview {
    display: block;
}
.rank-list .rank-item .ri-detail {
    float: left;
}
.rank-list .rank-item.show-detail .ri-detail .ri-title {
    height: 36px;
    line-height: 18px;
    margin-top: -3px;
    width: 150px;
    padding: 0;
}
.rank-list .rank-item .ri-detail .ri-point {
    line-height: 12px;
    color: #99a2aa;
    height: 12px;
    margin-top: 5px;
    display: none;
    overflow: hidden;
}
.rank-list .rank-item.show-detail .ri-point {
    display: block;
}
.rank-list .rank-item .ri-info-wrap .w-later {
    right: 160px;
}
.rank-list .rank-item .ri-info-wrap:hover .w-later {
    display: block;
}
.rank-list .rank-item .ri-detail .ri-title {
    line-height: 18px;
    height: 18px;
    overflow: hidden;
    color: #222;
}
.bangumi-rank-list .rank-item .ri-title {
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    max-width: 144px;
    line-height: 18px;
    vertical-align: top;
    color: #222;
    display: inline-block;
    overflow: hidden;
}
.bangumi-rank-list .rank-item .ri-total {
    display: inline-block;
    vertical-align: top;
    color: #99a2aa;
    margin-left: 10px;
    line-height: 18px;
    height: 18px;
}
.rank-list .rank-item:hover .ri-title {
    color: #00a1d6;
}
.sec-rank .more-link {
    display: block;
    height: 24px;
    line-height: 24px;
    background-color: #e5e9ef;
    text-align: center;
    border: 1px solid #e0e6ed;
    color: #222;
    border-radius: 4px;
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
}
.sec-rank .more-link .icon-arrow-r {
    display: inline-block;
    vertical-align: middle;
    background-position: -478px -218px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0 5px;
}
.sec-rank .more-link:hover {
    background-color: #ccd0d7;
    border-color: #ccd0d7;
    color: #222 !important;
}
.sec-rank .rank-list-wrap.show-origin {
    margin-left: -100%;
}
</style>

<template>
    <div class="zone-wrap-module">
        <div class="zone-module" v-for="(item,index) in maindataModule">
            <div class="new-comers-module l-con">
                <div class="zone-title">
                    <div class="headline">
                        <i class="icon icon_t" :class="item.icon"></i>
                        <a :href=item.moreUrl class="name">{{ item.title }}</a>
                        <div class="bili-tab bili-tab">
                            <div class="bili-tab-item" v-for="(item,index) in item.tab" :class="{'on' : index === nowtab }" @click="nowtabclick(index)">{{ item.name }}</div>
                        </div>
                        <a :href=item.moreUrl target="_blank" class="link-more">
                            更多
                            <i class="icon"></i>
                        </a>
                        <div class="read-push">
                            <i class="icon icon_read"></i>
                            <span class="info">
                                <b>{{ item.dynamic }}</b>条新动态
                            </span>
                        </div>
                    </div>
                </div>
                <div class="storey-box">
                    <div class="spread-module" v-for="item in item.newTrends.archives" v-if="nowtab===0">
                        <a :href="'/video/av'+item.aid+'/'" target="_blank" :title=item.title>
                            <div class="pic">
                                <div class="lazy-img">
                                    <img :alt=item.title :src=item.pic>
                                </div>
                                <i class="icon medal "></i>
                                <!-- <div class="cover-preview-module">
                                    <div class="cover" style="background-image: url(&quot;//i3.hdslb.com/bfs/videoshot/37990295.jpg; background-position: 0px 0px; background-size: 1600px;">
                                    </div>
                                    <div class="progress-bar">
                                        <span style="width: 0%;"></span>
                                    </div>
                                </div> -->
                                <div class="mask-video"></div>
                                <!-- <div class="danmu-module">
                                    <p class="dm">这袜。。。。</p>
                                    <p class="dm row2">参见公主殿下</p>
                                </div> -->
                                <span class="dur">{{ count(item.duration) }}</span>
                                <div class="watch-later-trigger w-later"></div>
                            </div>
                            <p :title=item.title class="t">{{ item.title }}</p>
                            <p class="num">
                                <span class="play">
                                    <i class="icon"></i>{{ count2(item.stat.view) }}
                                </span>
                                <span class="danmu">
                                    <i class="icon"></i>{{ count2(item.stat.danmaku) }}
                                </span>
                            </p>
                        </a>
                    </div>
                    <div class="spread-module" v-for="(item,index) in item.newSub.archives" v-if="index<10&&nowtab===1">
                        <a :href="'/video/av'+item.aid+'/'" target="_blank" :title=item.title>
                            <div class="pic">
                                <div class="lazy-img">
                                    <img :alt=item.title :src=item.pic>
                                </div>
                                <i class="icon medal "></i>
                                <!-- <div class="cover-preview-module">
                                    <div class="cover" style="background-image: url(&quot;//i3.hdslb.com/bfs/videoshot/37990295.jpg; background-position: 0px 0px; background-size: 1600px;">
                                    </div>
                                    <div class="progress-bar">
                                        <span style="width: 0%;"></span>
                                    </div>
                                </div> -->
                                <div class="mask-video"></div>
                                <!-- <div class="danmu-module">
                                    <p class="dm">这袜。。。。</p>
                                    <p class="dm row2">参见公主殿下</p>
                                </div> -->
                                <span class="dur">{{ count(item.duration) }}</span>
                                <div class="watch-later-trigger w-later"></div>
                            </div>
                            <p :title=item.title class="t">{{ item.title }}</p>
                            <p class="num">
                                <span class="play">
                                    <i class="icon"></i>{{ count2(item.stat.view) }}
                                </span>
                                <span class="danmu">
                                    <i class="icon"></i>{{ count2(item.stat.danmaku) }}
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div id="ranking-donghua" class="sec-rank zone-rank">
                <div class="rank-head">
                    <h3>排行</h3>
                    <div class="bili-tab rank-tab">
                        <div class="bili-tab-item" v-for="(item,index) in item.ranktab" :class="{'on' : index===ranknowtab}" @mousemove="ranknowtabclick(index)">{{item.name }}</div>
                    </div>
                    <dropdown :dropdownData="item.rankdropdown" :selected="rankselect" @dropselected='rankSelect'></dropdown>
                </div>
                <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}" v-if="rankselect===0">
                    <ul class="rank-list hot-list">
                        <li class="rank-item" v-for="(item,index) in item.rankThreeAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0}]" v-if="index<7" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                            <i class="ri-num">{{ index+1 }}</i>
                            <a href="/video/av23119126/" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                                <div class="lazy-img ri-preview" v-if="index<1">
                                    <img :alt="item.title" :src="item.pic">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">{{ item.title }}</p>
                                    <p class="ri-point">综合评分：{{ count2(item.pts) }}</p>
                                </div>
                                <div class="watch-later-trigger w-later" v-if="index<1"></div>
                            </a>
                        </li>             
                    </ul>
                    <ul class="rank-list origin-list">
                        <li class="rank-item" v-for="(item,index) in item.rankThreeOriginalList" :class="[{ highlight: index<3 }, {'show-detail first':index===0}]" v-if="index<7" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                            <i class="ri-num">{{ index+1 }}</i>
                            <a href="/video/av23119126/" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                                <div class="lazy-img ri-preview" v-if="index<1">
                                    <img :alt="item.title" :src="item.pic">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">{{ item.title }}</p>
                                    <p class="ri-point">综合评分：{{ count2(item.pts) }}</p>
                                </div>
                                <div class="watch-later-trigger w-later" v-if="index<1"></div>
                            </a>
                        </li>   
                    </ul>
                </div>
                <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}" v-if="rankselect===1">
                    <ul class="rank-list hot-list">
                        <li class="rank-item" v-for="(item,index) in item.rankSevenAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0}]" v-if="index<7" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                            <i class="ri-num">{{ index+1 }}</i>
                            <a href="/video/av23119126/" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                                <div class="lazy-img ri-preview" v-if="index<1">
                                    <img :alt="item.title" :src="item.pic">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">{{ item.title }}</p>
                                    <p class="ri-point">综合评分：{{ count2(item.pts) }}</p>
                                </div>
                                <div class="watch-later-trigger w-later" v-if="index<1"></div>
                            </a>
                        </li>             
                    </ul>
                    <ul class="rank-list origin-list">
                        <li class="rank-item" v-for="(item,index) in item.rankSevenOriginalList" :class="[{ highlight: index<3 }, {'show-detail first':index===0}]" v-if="index<7" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                            <i class="ri-num">{{ index+1 }}</i>
                            <a href="/video/av23119126/" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                                <div class="lazy-img ri-preview" v-if="index<1">
                                    <img :alt="item.title" :src="item.pic">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">{{ item.title }}</p>
                                    <p class="ri-point">综合评分：{{ count2(item.pts) }}</p>
                                </div>
                                <div class="watch-later-trigger w-later" v-if="index<1"></div>
                            </a>
                        </li>   
                    </ul>
                </div>
                <a :href="item.rankThreeAllMoreUrl" target="_blank" class="more-link" v-if="ranknowtab===0&&rankselect===0">查看更多<i class="icon icon-arrow-r"></i></a>
                <a :href="item.rankThreeOriginalMoreUrl" target="_blank" class="more-link" v-else-if="ranknowtab===1&&rankselect===0">查看更多<i class="icon icon-arrow-r"></i></a>
                <a :href="item.rankSevenAllMoreUrl" target="_blank" class="more-link" v-else-if="ranknowtab===0&&rankselect===1">查看更多<i class="icon icon-arrow-r"></i></a>
                <a :href="item.rankSevenOriginalMoreUrl" target="_blank" class="more-link" v-else="ranknowtab===1&&rankselect===1">查看更多<i class="icon icon-arrow-r"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '../base/dropdown'
export default {
    created() {
        
    },
    components: {
        Dropdown
    },
    props: {
        maindataModule: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            dropdownData:[],
            nowtab: 0,
            ranknowtab: 0,
            rankselect: 0,
            trends: [],
            newsub: [],
            rankAlllist: [],
            leftnum:'',
            topnum:'',
            videoinforShow: false,
            mouseindex: ''
        }
    },
    methods: {
        nowtabclick(index) {
            this.nowtab =index
        },
        ranknowtabclick(index){
            this.ranknowtab = index
        },
        rankSelect(index){
            this.rankselect = index
        },
        videoInfo(index,e){
            var c = e.currentTarget
            this.leftnum = c.getBoundingClientRect().left
            this.topnum = c.offsetTop+550
            this.mouseindex = index
            this.videoinforShow = true
            setTimeout(()=>{
            this.$emit('videoInfoxy',{
                'leftnum' : this.leftnum, 
                'topnum': this.topnum, 
                'videoinforShow': this.videoinforShow, 
                'mouseindex' : this.mouseindex , 
                'ranknowtab' : this.ranknowtab,
                'rankselect' : this.rankselect
                })
            },1500)
        },
        videoInfoshow() {
            this.videoinforShow = false
            this.$emit('videoInfoxy',{
                'leftnum' : this.leftnum, 
                'topnum': this.topnum, 
                'videoinforShow': false, 
                'mouseindex' : this.mouseindex , 
                'ranknowtab' : this.ranknowtab,
                'rankselect' : this.rankselect
            })
        },
        //时间戳转换
        time(date){
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds(); 
            console.log(Y+M+D+h+m+s);
        },
        // 视频时间计算
        count(num){
			if(num<60){
                return num ="00:"+num
			}else if(num>=60 && num<3600){
				let m
                Math.floor(num/60)<10? m="0"+Math.floor(num/60) : m=Math.floor(num/60)
                num%60<10? num= m+":0"+ num%60 : num = m+":"+num%60
				return num
			}else{
				let h,m
				Math.floor(num%3600/60)<10? m="0"+Math.floor(num%3600/60) : m=Math.floor(num%3600/60)
				return num = Math.floor(num/3600)+":"+ m +":"+ Math.floor(num%3600%60)
			}
        },
        // 视频播放量弹幕数计算
        count2(num){
            if(num>10000){
                return (Math.round(num/1e3)/10).toFixed(1)+'万'
            }else{
                return num
            }
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
.new-comers-module .zone-title .headline .icon_t {
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
.new-comers-module .zone-title .headline .name {
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    margin-right: 20px;
    float: left;
    color: #222;
}
.new-comers-module .zone-title .headline .name:hover {
    color: #00a1d6;
}
.new-comers-module .bili-tab {
    float: left;
    margin: 0 10px 0 0;
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
}
.sec-rank .rank-list-wrap.show-origin {
    margin-left: -100%;
}
</style>

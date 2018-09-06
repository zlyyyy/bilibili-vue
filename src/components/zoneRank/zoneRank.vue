<template>
     <div id="ranking-donghua" class="sec-rank zone-rank">
         <template>
            <div class="rank-head">
                <h3>排行</h3>
                <div class="bili-tab rank-tab" v-if="tag===0">
                    <div class="bili-tab-item" v-for="(item,index) in zoneRank.ranktab" :class="{'on' : index===ranknowtab}" @mousemove="ranknowtabclick(index)">{{item.name }}</div>
                </div>
                <dropdown :dropdownData="zoneRank.rankdropdown" :selected="rankselect" @dropselected='rankSelect'></dropdown>
            </div>
            <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}">
                <ul class="rank-list" :class="zoneRank.id==='bili_bangumi'||zoneRank.id==='bili_guochuang'&&tag===1? 'bangumi-rank-list' : 'hot-lists'" >
                    <li class="rank-item" v-for="(item,index) in rankListHot" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true&&tag===0}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                        <i class="ri-num">{{ index+1 }}</i>
                        <a :href="'https://www.bilibili.com/video/av'+item.aid" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                            <div class="lazy-img ri-preview" v-if="rankPic">
                                <img :alt="item.title" v-lazy="item.pic">
                            </div>
                            <div class="ri-detail">
                                <p class="ri-title">{{ item.title }}</p>
                                <p class="ri-point" v-if="rankPic">综合评分：{{ count2(item.pts) }}</p>
                                <span class="ri-total" v-else>更新至第{{ item.newest_ep_index }}话</span>
                            </div>
                            <div class="watch-later-trigger w-later" v-if="rankPic&&index===0"></div>
                        </a>
                    </li>             
                </ul>
                <ul class="rank-list origin-list"  v-if="rankPic==true">
                    <li class="rank-item" v-for="(item,index) in rankListOrig" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                        <i class="ri-num">{{ index+1 }}</i>
                        <a :href="'https://www.bilibili.com/video/av'+item.aid" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                            <div class="lazy-img ri-preview" v-if="rankPic">
                                <img :alt="item.title" v-lazy="item.pic">
                            </div>
                            <div class="ri-detail">
                                <p class="ri-title">{{ item.title }}</p>
                                <p class="ri-point" v-if="rankPic">综合评分：{{ count2(item.pts) }}</p>
                                <span class="ri-total" v-else>更新至第{{ item.newest_ep_index }}话</span>
                            </div>
                            <div class="watch-later-trigger w-later" v-if="rankPic&&index===0"></div>
                        </a>
                    </li>   
                </ul>
            </div>
            <a :href="moreUrl" target="_blank" class="more-link">查看更多<i class="icon icon-arrow-r"></i></a>
            <ad-slide v-if="tag===1&&zoneRank.num==1" :slidedata="zoneRank.Ad.data" :slidetimedata="zoneRank.Ad.time" :pagation="zoneRank.Ad.pagation"></ad-slide>
        </template>
    </div>
</template>

<script>
import { count, count2 } from '../../utils/utils'
import Dropdown from '../dropdown/dropdown'
import AdSlide from '../ad/adSlide'
export default {
    props: {
        zoneRank: {
            type: [Object,Array],
            default: () => []
        },
        tag: {
            type: Number,
            default: 0
        },
        bangumiRankLists: {
            type: Number,
            default: 0
        }
    },
    components: {
        Dropdown,
        AdSlide
    },
    computed: {
        rankListHot(){
            if(this.tag===0){
                return this.rankselect===0? this.zoneRank.rankThreeAllList : this.zoneRank.rankSevenAllList
            }else{
                return this.rankselect===0? this.zoneRank.mRankThreeAllList : this.zoneRank.mRankSevenAllList
            }
        },
        rankListOrig(){
            if(this.tag===0){
                return this.rankselect===0? this.zoneRank.rankThreeOriginalList : this.zoneRank.rankSevenOriginalList
            }else{
                return this.rankselect===0? this.zoneRank.mRankThreeOriginalList : this.zoneRank.mRankSevenOriginalList
            }
        },
        moreUrl(){
            if(this.ranknowtab===0){
                return this.rankselect===0? this.zoneRank.rankThreeAllMoreUrl : this.zoneRank.rankSevenAllMoreUrl
            }else{
                return this.rankselect===0? this.zoneRank.rankThreeOriginalMoreUrl : this.zoneRank.rankSevenOriginalMoreUrl
            }
        },
        rankLists(){
            if(this.bangumiRankLists===0){
                return this.zoneRank.rankLists
            }else{
                return this.bangumiRankLists
            }
        },
        rankPic(){
            return this.zoneRank.rankPic
        }
    },
    data () {
        return {
            ranknowtab: 0,
            rankselect: 0,
            leftnum:'',
            topnum:'',
            videoinforShow: false,
            mouseindex: ''
        }
    },
    methods: {
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
        count(num){
            return count(num)
        },
        count2(num){
            return count2(num)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

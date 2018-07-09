<template>
     <div id="ranking-donghua" class="sec-rank zone-rank">
         <template v-if="tag===0">
            <div class="rank-head">
                <h3>排行</h3>
                <div class="bili-tab rank-tab">
                    <div class="bili-tab-item" v-for="(item,index) in zoneRank.ranktab" :class="{'on' : index===ranknowtab}" @mousemove="ranknowtabclick(index)">{{item.name }}</div>
                </div>
                <dropdown :dropdownData="zoneRank.rankdropdown" :selected="rankselect" @dropselected='rankSelect'></dropdown>
            </div>
            <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}" v-if="rankselect===0">
                <ul class="rank-list hot-lists">
                    <li class="rank-item" v-for="(item,index) in zoneRank.rankThreeAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
                <ul class="rank-list" :class="'origin-list'" v-if="rankPic==true">
                    <li class="rank-item" v-for="(item,index) in zoneRank.rankThreeOriginalList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
            <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}" v-if="rankselect===1">
                <ul class="rank-list hot-lists">
                    <li class="rank-item" v-for="(item,index) in zoneRank.rankSevenAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
                <ul class="rank-list" :class="'origin-list'" v-if="rankPic==true">
                    <li class="rank-item" v-for="(item,index) in zoneRank.rankSevenOriginalList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
            <a :href="zoneRank.rankThreeAllMoreUrl" target="_blank" class="more-link" v-if="ranknowtab===0&&rankselect===0">查看更多<i class="icon icon-arrow-r"></i></a>
            <a :href="zoneRank.rankThreeOriginalMoreUrl" target="_blank" class="more-link" v-else-if="ranknowtab===1&&rankselect===0">查看更多<i class="icon icon-arrow-r"></i></a>
            <a :href="zoneRank.rankSevenAllMoreUrl" target="_blank" class="more-link" v-else-if="ranknowtab===0&&rankselect===1">查看更多<i class="icon icon-arrow-r"></i></a>
            <a :href="zoneRank.rankSevenOriginalMoreUrl" target="_blank" class="more-link" v-else="ranknowtab===1&&rankselect===1">查看更多<i class="icon icon-arrow-r"></i></a>
         </template>
        <template v-else="tag===1">
            <div class="rank-head">
                <h3>排行</h3>
                <dropdown :dropdownData="zoneRank.rankdropdown" :selected="rankselect" @dropselected='rankSelect'></dropdown>
            </div>
            <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}" v-if="rankselect===0">
                <ul class="rank-list bangumi-rank-list">
                    <li class="rank-item" v-for="(item,index) in zoneRank.BrankThreeAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&tag===0}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                        <i class="ri-num">{{ index+1 }}</i>
                        <a :href="'https://www.bilibili.com/video/av'+item.aid" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                            <div class="lazy-img ri-preview" v-if="tag===0">
                                <img :alt="item.title" v-lazy="item.pic">
                            </div>
                            <div class="ri-detail">
                                <p class="ri-title">{{ item.title }}</p>
                                <p class="ri-point" v-if="tag===0">综合评分：{{ count2(item.pts) }}</p>
                                <span class="ri-total" v-else>更新至第{{ item.newest_ep_index }}话</span>
                            </div>
                            <div class="watch-later-trigger w-later" v-if="tag===0&&index===0"></div>
                        </a>
                    </li>             
                </ul>
            </div>
            <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}" v-if="rankselect===1">
                <ul class="rank-list bangumi-rank-list" >
                    <li class="rank-item" v-for="(item,index) in zoneRank.BrankSevenAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&tag===0}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
                        <i class="ri-num">{{ index+1 }}</i>
                        <a :href="'https://www.bilibili.com/video/av'+item.aid" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                            <div class="lazy-img ri-preview" v-if="tag===0">
                                <img :alt="item.title" v-lazy="item.pic">
                            </div>
                            <div class="ri-detail">
                                <p class="ri-title">{{ item.title }}</p>
                                <p class="ri-point" v-if="tag===0">综合评分：{{ count2(item.pts) }}</p>
                                <span class="ri-total" v-else>更新至第{{ item.newest_ep_index }}话</span>
                            </div>
                            <div class="watch-later-trigger w-later" v-if="tag===0&&index===0"></div>
                        </a>
                    </li>             
                </ul>
            </div>
            <a :href="zoneRank.BrankThreeAllMoreUrl" target="_blank" class="more-link" v-if="ranknowtab===0&&rankselect===0">查看更多<i class="icon icon-arrow-r"></i></a>
            <a :href="zoneRank.BrankSevenAllMoreUrl" target="_blank" class="more-link" v-else-if="ranknowtab===0&&rankselect===1">查看更多<i class="icon icon-arrow-r"></i></a>
            <ad-slide v-if="zoneRank.num==1" :slidedata="zoneRank.Ad.data" :slidetimedata="zoneRank.Ad.time" :pagation="zoneRank.Ad.pagation"></ad-slide>
        </template>
        <!-- <slot></slot> -->
    </div>
</template>

<script>
import Dropdown from '../base/dropdown'
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

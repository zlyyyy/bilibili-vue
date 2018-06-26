<template>
     <div id="ranking-donghua" class="sec-rank zone-rank">
        <div class="rank-head">
            <h3>排行</h3>
            <div class="bili-tab rank-tab">
                <div class="bili-tab-item" v-for="(item,index) in zoneRankdata.ranktab" :class="{'on' : index===ranknowtab}" @mousemove="ranknowtabclick(index)">{{item.name }}</div>
            </div>
            <dropdown :dropdownData="zoneRankdata.rankdropdown" :selected="rankselect" @dropselected='rankSelect'></dropdown>
        </div>
        <div class="rank-list-wrap" :class="{'show-origin' : ranknowtab===1}" v-if="rankselect===0">
            <ul class="rank-list" :class="rankClass">
                <li class="rank-item" v-for="(item,index) in zoneRankdata.rankThreeAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
                <li class="rank-item" v-for="(item,index) in zoneRankdata.rankThreeOriginalList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
            <ul class="rank-list" :class="rankClass">
                <li class="rank-item" v-for="(item,index) in zoneRankdata.rankSevenAllList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
                <li class="rank-item" v-for="(item,index) in zoneRankdata.rankSevenOriginalList" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&rankPic==true}]" v-if="index<rankLists" @mouseover="videoInfo(index,$event)" @mouseout="videoInfoshow">
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
        <a :href="zoneRankdata.rankThreeAllMoreUrl" target="_blank" class="more-link" v-if="ranknowtab===0&&rankselect===0">查看更多<i class="icon icon-arrow-r"></i></a>
        <a :href="zoneRankdata.rankThreeOriginalMoreUrl" target="_blank" class="more-link" v-else-if="ranknowtab===1&&rankselect===0">查看更多<i class="icon icon-arrow-r"></i></a>
        <a :href="zoneRankdata.rankSevenAllMoreUrl" target="_blank" class="more-link" v-else-if="ranknowtab===0&&rankselect===1">查看更多<i class="icon icon-arrow-r"></i></a>
        <a :href="zoneRankdata.rankSevenOriginalMoreUrl" target="_blank" class="more-link" v-else="ranknowtab===1&&rankselect===1">查看更多<i class="icon icon-arrow-r"></i></a>
    </div>
</template>

<script>
import Dropdown from '../base/dropdown'
export default {
    props: {
        zoneRankdata: {
            type: [Object,Array],
            default: () => []
        }
    },
    components: {
        Dropdown
    },
    computed: {
        rankClass(){
            if(this.rankPic==true){
                return {
                    'hot-lists': true
                    }
            }else{
                return {
                    'bangumi-rank-list': true
                }
            }
        },
        rankLists(){
            return this.zoneRankdata.rankLists
        },
        rankPic(){
            return this.zoneRankdata.rankPic
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

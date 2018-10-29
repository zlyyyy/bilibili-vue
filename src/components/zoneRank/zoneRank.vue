<template>
     <div id="ranking-donghua" class="sec-rank zone-rank" :class="{'gc': zoneRank.rid==168}">
         <template>
            <div class="rank-head">
                <h3>排行</h3>
                <div class="bili-tab rank-tab" v-if="tag===0">
                    <div class="bili-tab-item" v-for="(item,index) in zoneRank.ranktab" :class="{'on' : index===tab}" @mousemove="tabMove(index)">{{item.name }}</div>
                </div>
                <dropdown :dropdownData="zoneRank.rankdropdown" @selectClick='selectClick'></dropdown>
            </div>
            <div class="rank-list-wrap" :class="{'show-origin' : tab===1}">
                <ul class="rank-list" :class="zoneRank.rid==13||zoneRank.rid==168&&tag===1? 'bangumi-rank-list' : 'hot-lists'" >
                    <li class="rank-item" v-for="(item,index) in rankData" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&zoneRank.rankPic==true&&tag===0}]" v-if="index<zoneRank.rankList">
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
                    <li class="rank-item" v-for="(item,index) in zoneRank.rankOriginalData" :class="[{ highlight: index<3 }, {'show-detail first':index===0&&zoneRank.rankPic==true}]" v-if="index<zoneRank.rankList">
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
            <ad-slide v-if="tag==1&&zoneRank.rid==168" :slidedata="zoneRank.ad.data" :slidetimedata="zoneRank.ad.time" :pagation="zoneRank.ad.pagation"></ad-slide>
        </template>
    </div>
</template>

<script>
import { count, count2 } from '../../utils/utils'
import Dropdown from '../dropdown/dropdown'
import AdSlide from '../ad/adSlide'
export default {
    created() {
        // 默认三日排行
        this.setData(3)
    },
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
        rankData(){
            return this.zoneRank.rid==13? (this.zoneRank.rankBangumiData?this.zoneRank.rankBangumiData.list:null) : this.zoneRank.rankAllData
        },
        moreUrl(){
            const url = `${this.zoneRank.rid}/1/${this.selectDay}`
            switch(this.tab){
                case 0:
                   return `../ranking/all/${url}` 
                case 1:
                    return `../ranking/origin/${url}`
                default:
                    break
            }
        },
        rankPic(){
            return this.zoneRank.rankPic
        }
    },
    data () {
        return {
            tab: 0,
            selectDay: 3
        }
    },
    methods: {
        tabMove(index){
            //tab鼠标move
            this.tab = index
        },
        selectClick(index){
            //时间筛选设置
            switch(index){
                case 0: 
                    this.selectDay = 3
                    this.setData(3)
                    break
                case 1: 
                    this.selectDay = 7
                    this.setData(7)
                    break
                default:
                    break
            }
        },
        setData(day){
            const _data = {
                id: this.zoneRank.id,
                rid: this.zoneRank.rid,
                day: day
            }
            // id，rid模块ID，day天数，original是否原创
            if(this.zoneRank.rid==13){
                this.$emit('setRankingRegion',_data)
            }else{
                for(let i =0;i<2;i++){
                    _data.original = i
                    this.$emit('setRankingRegion',_data)
                }
            }
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

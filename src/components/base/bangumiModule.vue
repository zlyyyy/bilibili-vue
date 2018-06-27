<template>
    <div class="zone-wrap-module">
        <div class="bangumi-module">
            <div class="up">
                <div class="bangumi-timing-module l-con">
                    <div class="headline">
                        <i class="icon icon_t" :class="bangumiData.icon"></i>
                        <a :href=bangumiData.moreUrl class="name">{{ bangumiData.title }}</a>
                        <div class="bili-tab">
                            <div class="bili-tab-item" v-for="(item,index) in bangumiData.tab2" :class="{'on' : index === nowtab }" @click="nowtabclick(index)">{{ index>0 && index===nowtab? "周"+item.name : item.name}}</div>
                        </div>
                        <a :href=bangumiData.moreUrl target="_blank" class="c-clink">
                            新番时间表
                            <i class="icon"></i>
                        </a>   
                    </div>
                    <timing-box :timelineData="bangumiData.timelineData" :nowtab="nowtab"></timing-box>
                </div>
                <zone-rank :zoneRankdata="bangumiData"></zone-rank>
            </div>
            <storey-box :storeydata="bangumiData"></storey-box>
            <div class="r-con">
                <div class="ad-title">
                    <h3>特别推荐</h3>
                </div>
                <ad-slide :slidedata="bangumiData.AdData" :slidetimedata="bangumiData.AdTime" :pagation="bangumiData.Adpagation"></ad-slide>
            </div>
        </div>
    </div>
</template>

<script>
import TimingBox from '../base/timingBox'
import ZoneRank from '../base/zoneRank'
import StoreyBox from '../base/storeyBox'
import AdSlide from '../ad/adSlide'
export default {
    props: {
        bangumiData: {
            type: [Object,Array],
            default: () => []
        }
    },
    components: {
        TimingBox,
        ZoneRank,
        StoreyBox,
        AdSlide
    },
    computed:{

    },
    data () {
        return {
            nowtab: 0
        }
    },
    methods: {
        nowtabclick(index) {
            this.nowtab =index
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bangumi-module .up {
    overflow: hidden;
    padding-bottom: 15px;
}
.bangumi-rank-list .rank-item:first-child{
    margin-top: 0;
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
.bangumi-module .r-con .ad-title {
    line-height: 50px;
    height: 50px;
}
.bangumi-module .r-con .ad-title h3 {
    font-size: 18px;
    font-weight: 400;
}
.bangumi-module .slide{
    overflow: hidden;
    height: 268px;
    width: 100%;
    border-radius: 4px;
}
.bangumi-timing-module .headline .icon_t.icon-guochuang {
    background-position: -141px -1614px;
}
</style>

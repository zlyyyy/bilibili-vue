<template>
    <div class="zone-wrap-module" id="bili_bangumi">
        <div class="zone-module">
            <div class="bangumi-timing-module l-con">
                <div class="headline">
                    <i class="icon icon_t" :class="bangumiData[0].icon"></i>
                    <a :href=bangumiData[0].moreUrl class="name">{{ bangumiData[0].title }}</a>
                    <div class="bili-tab">
                        <div class="bili-tab-item" v-for="(item,index) in bangumiData[0].tab2" :class="{'on' : index === nowtab }" @click="nowtabclick(index)">{{ item.name }}</div>
                    </div>
                    <a :href=bangumiData[0].moreUrl target="_blank" class="c-clink">
                        新番时间表
                        <i class="icon"></i>
                    </a>   
                </div>
                <timing-box :timelineData="timelineData" :nowtab="nowtab"></timing-box>
            </div>
            <zone-rank :zoneRankdata="bangumiData[0]"></zone-rank>
        </div>
        <storey-box :storeydata="bangumiData[0]"></storey-box>
        <ad-slide ></ad-slide>
    </div>
</template>

<script>
import TimingBox from '../base/timingBox'
import ZoneRank from '../base/zoneRank'
import StoreyBox from '../base/storeyBox'
import AdSlide from '../common/slide'
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
        timelineData(){
            return this.bangumiData[0].timelineData
        }
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

</style>

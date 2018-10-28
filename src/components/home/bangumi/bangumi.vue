<template>
    <div :id="bangumi.ref" class="zone-wrap-module">
        <div class="bangumi-module">
            <div class="up">
                <div class="bangumi-timing-module l-con">
                    <div class="headline">
                        <i class="icon icon_t" :class="bangumi.icon"></i>
                        <a :href=bangumi.moreUrl class="name">{{ bangumi.title }}</a>
                        <div class="bili-tab">
                            <div class="bili-tab-item" v-for="(item,index) in timeline.tab" :class="{'on' : index === timeline.activeTab }" @click="setTab(index)">{{ index>0 && index===bangumi.timelineTab? "周"+item.name : item.name}}</div>
                        </div>
                        <a :href=timeline.moreUrl target="_blank" class="c-clink">
                            新番时间表
                            <i class="icon"></i>
                        </a>   
                    </div>
                    <timing-box :timelineData="timeline.data" :activetab="timeline.activeTab"></timing-box>
                </div>
                <zone-rank :zoneRank="bangumi" :tag="1"> 
                </zone-rank>
            </div>
            <storey-box :storeydata="bangumi"></storey-box>
            <div class="r-con">
                <div class="ad-title">
                    <h3>排行</h3>
                </div>
                <ad-slide :slidedata="bangumi.Ad.data" :slidetimedata="bangumi.Ad.time" :pagation="bangumi.Ad.pagation"></ad-slide>
            </div>
        </div>
    </div>
</template>

<script>
import 	TimingBox 	from '../../timingBox/timingBox'
import 	ZoneRank 	from '../../zoneRank/zoneRank'
import 	StoreyBox 	from '../../storeyBox/storeyBox'
import 	AdSlide	 from '../../ad/adSlide'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    created() {
        // 10.28
    },
    components: {
        TimingBox,
        StoreyBox,
        ZoneRank,
        AdSlide
    },
    props: {
        bangumi: {
            type: [Object,Array],
            default: () => []
        }
    },
    computed: {
        timeline(){
            return this.bangumi.timeline
        }
    },
    data () {
        return {
        }
    },
    methods: {
        setDynamicRegion(data){
            this.$emit('setDynamicRegion',data)
        },
        setNewlist(data){
            this.$emit('setNewlist',data)
        },
        setRankingRegion(data){
            this.$emit('setRankingRegion',data)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

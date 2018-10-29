<template>
    <div :id="guochuang.ref" class="zone-wrap-module">
        <div class="bangumi-module">
            <div class="up">
                <div class="bangumi-timing-module l-con">
                    <div class="headline">
                        <i class="icon icon_t" :class="guochuang.icon"></i>
                        <a :href=guochuang.moreUrl class="name">{{ guochuang.title }}</a>
                        <div class="bili-tab">
                            <div class="bili-tab-item" v-for="(item,index) in timeline.tab" :class="{'on' : index === activeTab }" @click="setActiveTab(index)">{{ index>0 && index==activeTab? "周"+item.name : item.name}}</div>
                        </div>
                        <a :href=timeline.moreUrl target="_blank" class="c-clink">
                            新番时间表
                            <i class="icon"></i>
                        </a>   
                    </div>
                    <timing-box :timelineData="timeline.data" :activetab="activeTab"></timing-box>
                </div>
                <zone-rank 
                    :zoneRank="guochuang" 
                    :tag="1"
                    @setRankingRegion="setRankingRegion"
                /> 
            </div>
            <storey-box 
                :storeydata="guochuang" 
                @setDynamicRegion="setDynamicRegion"
                @setNewlist="setNewlist"
            />
            <div class="r-con">
                <div class="ad-title">
                    <h3>特别推荐</h3>
                </div>
                <ad-slide :slidedata="guochuang.ad.data" :slidetimedata="guochuang.ad.time" :pagation="guochuang.ad.pagation"></ad-slide>
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
        this.setTimeline({
            id: this.guochuang.id,
            rid: this.guochuang.rid
        })
        this.setAdSlide({
            id: this.guochuang.id,
            rid: this.guochuang.rid,
            position_id: 104
        })
    },
    components: {
        TimingBox,
        StoreyBox,
        ZoneRank,
        AdSlide
    },
    props: {
        guochuang: {
            type: [Object,Array],
            default: () => []
        }
    },
    computed: {
        timeline(){
            return this.guochuang.timeline
        }
    },
    data () {
        return {
            activeTab: 0
        }
    },
    methods: {
        setActiveTab(index){
            this.activeTab = index
        },
        setAdSlide(data){
            this.$emit('setAdSlide',data)
        },
        setTimeline(data){
            this.$emit('setTimeline',data)
        },
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

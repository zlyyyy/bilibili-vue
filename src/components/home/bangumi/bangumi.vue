<template>
    <div :id="bangumi.ref" class="zone-wrap-module">
        <div class="bangumi-module">
            <div class="up">
                <div class="bangumi-timing-module l-con">
                    <div class="headline">
                        <i class="icon icon_t" :class="bangumi.icon"></i>
                        <a :href=bangumi.moreUrl class="name">{{ bangumi.title }}</a>
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
                    :scrollTop="scrollTop"
                    :zoneRank="bangumi" 
                    :tag="1"
                    @setRankingRegion="setRankingRegion"
                /> 
            </div>
            <storey-box 
                :storeydata="bangumi" 
                @setDynamicRegion="setDynamicRegion"
                @setNewlist="setNewlist"
            />
            <div class="r-con">
                <div class="ad-title">
                    <h3>特别推荐</h3>
                </div>
                <ad-slide :slidedata="bangumi.ad.data" :slidetimedata="bangumi.ad.time" :pagation="bangumi.ad.pagation"></ad-slide>
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
    },
    watch: {
        offsetTop: function(newVal, oldVal){
            this.getData()
        },
        scrollTop: function (newVal, oldVal) {
            this.getData()
        }
    },
    components: {
        TimingBox,
        StoreyBox,
        ZoneRank,
        AdSlide
    },
    props: {
        scrollTop: {
            type: Number,
            default: 0
        },
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
            loading: false,
            activeTab: 0
        }
    },
    methods: {
        getData(){
            if(this.bangumi.offsetTop - this.scrollTop > 400 && this.bangumi.offsetTop - this.scrollTop < 1200 && this.loading==false){
                console.log(this.bangumi.title)
                this.loading=true
                this.setTimeline({
                    id: this.bangumi.id,
                    rid: this.bangumi.rid
                })
                this.setAdSlide({
                    id: this.bangumi.id,
                    rid: this.bangumi.rid,
                    position_id: 104
                })
            }
        },
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

<template>
    <div class="bangumi-timing-module l-con">
        <div class="headline">
            <i class="icon icon_t" :class="storeydata.icon"></i>
            <a :href=storeydata.moreUrl class="name">{{ storeydata.title }}</a>
            <div class="bili-tab">
                <div class="bili-tab-item" v-for="(item,index) in storeydata.tab2" :class="{'on' : index === nowtab }" @click="nowtabclick(index)">{{ item.name }}</div>
            </div>
            <a :href=storeydata.moreUrl target="_blank" class="c-clink">
                新番时间表
                <i class="icon"></i>
            </a>   
        </div>
        <timing-box :timelineData="timelineData" :nowtab="nowtab"></timing-box>
    </div>
</template>

<script>
import TimingBox from '../base/timingBox'
export default {
    props: {
        storeydata: {
            type: [Object,Array],
            default: () => []
        }
    },
    components: {
        TimingBox
    },
    computed:{
        timelineData(){
            return this.storeydata.timelineData
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

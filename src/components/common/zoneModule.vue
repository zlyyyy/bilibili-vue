<template>
    <div class="zone-wrap-module" id="bili_donghua">
        <!-- v-for="(item,index) in maindataModule" :id="item.id" :key="item.id" -->
        <div class="zone-module">
            <storey-box :storeydata="maindataModule[0]"></storey-box>
            <zone-rank :zoneRankdata="maindataModule[0]" @videoInfoxy='videoinforevent'></zone-rank>
        </div>
    </div>
</template>

<script>
import StoreyBox from '../base/storeyBox'
import ZoneRank from '../base/zoneRank'
export default {
    created() {
        
    },
    components: {
        StoreyBox,
        ZoneRank
    },
    props: {
        maindataModule: {
            type: [Object,Array],
            default: () => []
        }
    },
    computed: {
    },
    data () {
        return {
        }
    },
    methods: {
        videoinforevent(data){
            this.$emit('videoInfoxy',data)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

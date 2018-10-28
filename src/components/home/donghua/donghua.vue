<template>
    <div class="zone-wrap-module" id="bili_donghua">
        <div class="zone-module">
            <storey-box 
                :storeydata="donghua"
                @setDynamicRegion="setDynamicRegion"
                @setNewlist="setNewlist"
            ></storey-box>
            <zone-rank 
                :zoneRank="donghua" 
                :tag="0" 
                @setRankingRegion="setRankingRegion"
            ></zone-rank>
        </div>
    </div>
</template>

<script>
import StoreyBox from '../../storeyBox/storeyBox'
import ZoneRank from '../../zoneRank/zoneRank'
export default {
    created() {
    },
    components: {
        StoreyBox,
        ZoneRank
    },
    props: {
        donghua: {
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

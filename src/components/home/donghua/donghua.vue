<template>
  <div class="zone-wrap-module">
    <div class="zone-module">
      <storey-box
        :scrollTop="scrollTop"
        :storeydata="donghua"
        @setDynamicRegion="setDynamicRegion"
        @setNewlist="setNewlist"
      ></storey-box>
      <zone-rank
        :scrollTop="scrollTop"
        :zoneRank="donghua"
        :tag="0"
        @setRankingRegion="setRankingRegion"
      ></zone-rank>
    </div>
  </div>
</template>

<script>
import StoreyBox from "../../storeyBox/storeyBox";
import ZoneRank from "../../zoneRank/zoneRank";
export default {
  created() {},
  components: {
    StoreyBox,
    ZoneRank
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0
    },
    donghua: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    setDynamicRegion(data) {
      this.$emit("setDynamicRegion", data);
    },
    setNewlist(data) {
      this.$emit("setNewlist", data);
    },
    setRankingRegion(data) {
      this.$emit("setRankingRegion", data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

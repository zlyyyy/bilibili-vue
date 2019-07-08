<template>
  <div :id="guochuang.ref" class="zone-wrap-module">
    <div class="bangumi-module">
      <div class="up">
        <div class="bangumi-timing-module l-con">
          <div class="headline">
            <i class="icon icon_t" :class="guochuang.icon"></i>
            <a :href="guochuang.moreUrl" class="name">{{ guochuang.title }}</a>
            <div class="bili-tab">
              <div
                class="bili-tab-item"
                v-for="(item, index) in timeline.tab"
                :key="`timeline_tab_${index}`"
                :class="{ on: index === activeTab }"
                @click="setActiveTab(index)"
              >
                {{
                  index > 0 && index == activeTab ? "周" + item.name : item.name
                }}
              </div>
            </div>
            <a :href="timeline.moreUrl" target="_blank" class="c-clink">
              新番时间表
              <i class="icon"></i>
            </a>
          </div>
          <timing-box
            :timelineData="timeline.data"
            :activetab="activeTab"
          ></timing-box>
        </div>
        <zone-rank
          :scrollTop="scrollTop"
          :zoneRank="guochuang"
          :tag="1"
          @setRankingRegion="setRankingRegion"
        />
      </div>
      <storey-box
        :scrollTop="scrollTop"
        :storeydata="guochuang"
        @setDynamicRegion="setDynamicRegion"
        @setNewlist="setNewlist"
      />
      <div class="r-con">
        <zone-rank
          :scrollTop="scrollTop"
          :zoneRank="guochuang"
          @setRankingRegion="setRankingRegion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TimingBox from "../../timingBox/timingBox";
import ZoneRank from "../../zoneRank/zoneRank";
import StoreyBox from "../../storeyBox/storeyBox";
export default {
  mounted() {
    // this.getData()
  },
  watch: {
    offsetTop() {
      this.getData();
    },
    scrollTop() {
      this.getData();
    }
  },
  components: {
    TimingBox,
    StoreyBox,
    ZoneRank
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0
    },
    guochuang: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {
    offsetTop() {
      return this.guochuang.offsetTop;
    },
    timeline() {
      return this.guochuang.timeline;
    }
  },
  data() {
    return {
      loading: true,
      activeTab: 0
    };
  },
  methods: {
    getData() {
      if (
        this.scrollTop + 900 > this.guochuang.offsetTop &&
        this.loading == true
      ) {
        this.loading = false;
        this.setTimeline({
          id: this.guochuang.id,
          rid: this.guochuang.rid
        });
        this.setAdSlide({
          id: this.guochuang.id,
          rid: this.guochuang.rid,
          position_id: 101
        });
      }
    },
    setActiveTab(index) {
      this.activeTab = index;
    },
    setAdSlide(data) {
      this.$emit("setAdSlide", data);
    },
    setTimeline(data) {
      this.$emit("setTimeline", data);
    },
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

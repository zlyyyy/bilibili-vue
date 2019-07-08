<template>
  <div class="new-comers-module l-con">
    <div class="zone-title">
      <div
        class="headline"
        :class="{ fj: storeydata.rid == 13 || storeydata.rid == 168 }"
      >
        <i class="icon icon_t" :class="storeydata.icon"></i>
        <a :href="storeydata.moreUrl" class="name">{{ title }}</a>
        <div class="bili-tab">
          <div
            class="bili-tab-item"
            v-for="(item, index) in storeydata.tab"
            :key="`storey_data_${index}`"
            :class="{ on: index === nowtab }"
            @click="nowtabclick(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <a :href="storeydata.moreUrl" target="_blank" class="link-more">
          更多
          <i class="icon"></i>
        </a>
        <div class="read-push">
          <i class="icon icon_read"></i>
          <span class="info">
            <b>{{ storeydata.dynamic }}</b
            >条新动态
          </span>
        </div>
      </div>
    </div>
    <div class="storey-box" v-if="storeydata.data">
      <div
        class="spread-module"
        v-if="index<10"
        v-for="(item, index) in storeydata.data.archives"
        :key="`storeydata_data_archives_${index}`"
      >
        <a
          :href="'/video/av' + item.aid + '/'"
          target="_blank"
          :title="item.title"
        >
          <div class="pic">
            <div class="lazy-img">
              <img :alt="item.title" v-lazy="item.pic" />
            </div>
            <i class="icon medal "></i>
            <!-- <div class="cover-preview-module">
                            <div class="cover" style="background-image: url(&quot;//i3.hdslb.com/bfs/videoshot/37990295.jpg; background-position: 0px 0px; background-size: 1600px;">
                            </div>
                            <div class="progress-bar">
                                <span style="width: 0%;"></span>
                            </div>
                        </div> -->
            <div class="mask-video"></div>
            <!-- <div class="danmu-module">
                            <p class="dm">这袜。。。。</p>
                            <p class="dm row2">参见公主殿下</p>
                        </div> -->
            <span class="dur">{{ count(item.duration) }}</span>
            <div class="watch-later-trigger w-later"></div>
          </div>
          <p :title="item.title" class="t">{{ item.title }}</p>
          <p class="num">
            <span class="play">
              <i class="icon"></i>{{ count2(item.stat.view) }}
            </span>
            <span class="danmu">
              <i class="icon"></i>{{ count2(item.stat.danmaku) }}
            </span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { count, count2 } from "../../utils/utils";
export default {
  mounted() {},
  watch: {
    offsetTop() {
      this.getData();
    },
    scrollTop() {
      this.getData();
    }
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0
    },
    storeydata: {
      type: [Object, Array],
      default: () => []
    }
  },
  components: {},
  computed: {
    offsetTop() {
      return this.storeydata.offsetTop;
    },
    title() {
      return this.storeydata.rid == 13 || this.storeydata.rid == 168
        ? this.storeydata.title2
        : this.storeydata.title;
    }
  },
  data() {
    return {
      loading: true,
      nowtab: 0
    };
  },
  methods: {
    getData() {
      if (
        this.scrollTop + 900 > this.storeydata.offsetTop &&
        this.loading == true
      ) {
        this.loading = false;
        // 默认显示新动态
        this.$emit("setDynamicRegion", {
          id: this.storeydata.id,
          ps: 10,
          rid: this.storeydata.rid
        });
      }
    },
    nowtabclick(index) {
      this.nowtab = index;
      switch (index) {
        case 0:
          this.$emit("setDynamicRegion", {
            id: this.storeydata.id,
            ps: 10,
            rid: this.storeydata.rid
          });
          break;
        case 1:
          this.$emit("setNewlist", {
            id: this.storeydata.id,
            ps: 10,
            rid: this.storeydata.rid
          });
          break;
        default:
          break;
      }
    },
    count(num) {
      return count(num);
    },
    count2(num) {
      return count2(num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

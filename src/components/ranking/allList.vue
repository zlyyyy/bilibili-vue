<template>
  <div class="ranking-list-wrap">
    <ul v-if="!loading" class="rank-list" :class="{ bangumi: type == 2 }">
      <li
        class="rank-item"
        v-for="(item, index) in rankAll.list"
        :key="`rankall_list_${index}`"
      >
        <div class="num">
          {{ index + 1 }}
        </div>
        <div class="content">
          <div class="img">
            <a :href="'/video/av' + item.aid" target="_blank">
              <div class="cover">
                <img
                  :alt="item.title"
                  v-lazy="type == 2 ? item.cover : item.pic"
                />
              </div>
            </a>
            <div class="watch-later-trigger w-later"></div>
          </div>
          <div class="info">
            <a :href="'/video/av' + item.aid" target="_blank" class="title">{{
              item.title
            }}</a>
            <div class="bangumi-info" v-if="type == 2">
              连载中，更新至第
              <span class="bangumi-num">{{ item.newest_ep_index }}</span>
              话
            </div>
            <div class="detail">
              <span class="data-box" v-if="type !== 2">
                <i class="b-icon play"></i>
                {{ count2(item.play) }}
              </span>
              <span class="data-box">
                <i class="b-icon view"></i>
                {{
                  type == 2 ? count2(item.dm_count) : count2(item.video_review)
                }}
              </span>
              <span class="data-box" v-if="type == 2">
                <i class="fav"></i>
                {{ count2(item.fav) }}
              </span>
              <a target="_blank" :href="item.mid" v-if="type !== 2">
                <span class="data-box">
                  <i class="b-icon author"></i>
                  {{ item.author }}
                </span>
              </a>
            </div>
            <div class="pts">
              <div>
                {{ item.pts }}
              </div>
              综合得分
            </div>
          </div>
        </div>
      </li>
    </ul>
    <bili-loading v-if="loading" style="top:20%;"></bili-loading>
  </div>
</template>

<script>
import biliLoading from "../loading/loading";
import { count2 } from "../../utils/utils";
export default {
  props: {
    rankAll: {
      type: [Object, Array],
      default: () => []
    },
    type: {
      type: [Number, String]
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  created() {},
  components: {
    biliLoading
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    count2(num) {
      return count2(num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

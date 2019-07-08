<template>
  <div class="filter-wrap">
    <ul
      class="filter-type clearfix"
      v-for="(item, key, index) in filterType"
      :key="`filter_type_${index}`"
      :class="key"
    >
      <li
        class="filter-item"
        v-for="(item, index) in item"
        :key="`filter_item_${index}`"
        :class="{ active: index === 0 }"
      >
        <a href="javascript:;">{{ item.name }}</a>
      </li>
    </ul>
    <a class="fold up" style="" v-if="fold" @click="fold == !fold">
      收起筛选
      <i class="arrow-up"></i>
    </a>
    <a class="fold down" v-if="!fold" @click="fold == !fold">
      更多筛选
      <i class="arrow-down"></i>
    </a>
    <div class="switch-wrap">
      <div class="aver type active">
        <i class="icon-aver"></i>
      </div>
      <div class="imgleft type">
        <i class="icon-imgleft"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  computed: {},
  components: {},
  data() {
    return {
      filterType: {
        order: [
          {
            name: "综合排序"
          },
          {
            name: "最多点击"
          },
          {
            name: "最新发布"
          },
          {
            name: "最多弹幕"
          },
          {
            name: "最多收藏"
          }
        ],
        duration: [
          {
            name: "全部时长"
          },
          {
            name: "10分钟以下"
          },
          {
            name: "10-30分钟"
          },
          {
            name: "30-60分钟"
          },
          {
            name: "60分钟以上"
          }
        ],
        tids_1: [
          {
            name: "全部分区"
          },
          {
            name: "动画"
          },
          {
            name: "番剧相关"
          },
          {
            name: "国创"
          },
          {
            name: "音乐"
          },
          {
            name: "舞蹈"
          },
          {
            name: "游戏"
          },
          {
            name: "科技"
          },
          {
            name: "生活"
          },
          {
            name: "鬼畜"
          },
          {
            name: "时尚"
          },
          {
            name: "广告"
          },
          {
            name: "娱乐"
          },
          {
            name: "影视"
          },
          {
            name: "纪录片"
          },
          {
            name: "电影"
          },
          {
            name: "电视剧"
          }
        ]
      },
      fold: true
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

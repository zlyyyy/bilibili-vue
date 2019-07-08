<template>
  <div class="bofangqi bili-wrapper">
    <!-- <embed height="452" width="544" src="http://static.hdslb.com/miniloader.swf?aid=35899404&page=1"> -->
    <iframe
      id="videoIframe"
      :src="'https://www.bilibili.com/video/' + aid"
      style="position: relative;top: -56px;left:-70px;"
      width="1300"
      height="4700"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  created() {
    // router.afterEach((to, from, next) => {
    //   /* 路由发生变化修改页面 title */
    //   if (to.meta.title) {
    //     document.title = to.meta.title;
    //   }
    //   next();
    // });
    //地址栏读取params参数，设置对应的参数
    this.aid = this.$route.params.aid;
  },
  mounted() {
    this.$route.meta.title = "test";
  },
  computed: {},
  components: {},
  data() {
    return {
      aid: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.player-box {
  position: relative;
  border-top: 1px solid #e5e9ef;
  border-bottom: 1px solid #e5e9ef;
  background-color: #f6f9fa;
  padding: 22px 0;
  text-align: center;
}
.bofangqi {
  position: relative;
  overflow: hidden;
  min-height: 688px;
}
.guide {
  display: none;
}
</style>

<template>
  <div class="app-body bili-wrapper">
    <div id="chief_recommend" class="chief-recommend-module">
      <!-- 轮播图数据、时间、翻页 -->
      <slide
        :slidedata="slide.data"
        :slidetimedata="slide.time"
        :pagation="slide.pagation"
      ></slide>
      <!-- 推荐模块 昨日 三日 一周  -->
      <keep-alive>
        <recommend :recommend="recommend"></recommend>
      </keep-alive>
    </div>
    <!-- 推广模块 -->
    <!--  推广数据、在线数据 -->
    <popularize :popularize="popularize" :online="online"></popularize>
    <!--  动画 -->
    <donghua
      :ref="donghua.ref"
      :id="donghua.ref"
      :donghua="donghua"
      @setDynamicRegion="setDynamicRegion"
      @setNewlist="setNewlist"
      @setRankingRegion="setRankingRegion"
    />
    <!--  番剧 -->
    <bangumi
      :scrollTop="scrollTop"
      :ref="bangumi.ref"
      :bangumi="bangumi"
      @setAdSlide="setAdSlide"
      @setTimeline="setTimeline"
      @setDynamicRegion="setDynamicRegion"
      @setNewlist="setNewlist"
      @setRankingRegion="setRankingRegion"
    />
    <!--  国创 -->
    <guochuang
      :scrollTop="scrollTop"
      :ref="guochuang.ref"
      :guochuang="guochuang"
      @setAdSlide="setAdSlide"
      @setTimeline="setTimeline"
      @setDynamicRegion="setDynamicRegion"
      @setNewlist="setNewlist"
      @setRankingRegion="setRankingRegion"
    />
    <donghua
      :scrollTop="scrollTop"
      v-for="item in module.filter((ele, index) => index > 2)"
      :key="item.ref"
      :ref="item.ref"
      :id="item.ref"
      :donghua="item"
      @setDynamicRegion="setDynamicRegion"
      @setNewlist="setNewlist"
      @setRankingRegion="setRankingRegion"
    />
    <!-- <div class="video-info-module" :style="{ left: videodata.leftnum+'px' , top: videodata.topnum+'px' }" v-if="videoinforShow">
            <div class="v-title">
                {{ videoinforitem[videodata.mouseindex].title }}
            </div>
            <div class="v-info">
                <span class="name">{{videoinforitem[videodata.mouseindex].author}}</span><span class="line"></span><span class="time">{{ videoinforitem[videodata.mouseindex].create }}</span>
            </div>
            <div class="v-preview clearfix">
                <div class="lazy-img">
                    <img :alt="videoinforitem[videodata.mouseindex].title" :src=videoinforitem[videodata.mouseindex].pic>
                </div>
                <p class="txt">
                    {{ videoinforitem[videodata.mouseindex].description }}
                </p>
            </div>
            <div class="v-data">
                <span class="play"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].play) }}</span><span class="danmu"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].video_review) }}</span><span class="star"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].favorites) }}</span><span class="coin"><i class="icon"></i>{{ count2(videoinforitem[videodata.mouseindex].coins) }}</span>
            </div>
        </div> -->
  </div>
</template>

<script>
import Slide from "../../components/slide/slide";
import Recommend from "../../components/recommend/recommend";
import Popularize from "../../components/popularize/popularize";
import Donghua from "../../components/home/donghua/donghua";
import Bangumi from "../../components/home/bangumi/bangumi";
import Guochuang from "../../components/home/guochuang/guochuang";

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  created() {
    this.setData();
  },
  mounted() {
    this.checkEleOffsetTop();
  },
  watch: {
    scrollTop: function() {
      //校正各模块offsetTop
      this.checkEleOffsetTop();
      this.loading = false;
    }
  },
  components: {
    Slide,
    Recommend,
    Popularize,
    Donghua,
    Bangumi,
    Guochuang
  },
  computed: {
    ...mapGetters([
      "scrollTop", //滚动条距离顶部高度
      "slide", //轮播图
      "recommend", //推荐模块
      "popularize", //推广模块
      "online", //当前在线
      "donghua", //动画
      "bangumi", //番剧
      "guochuang", //国创
      "module"
    ])
  },
  data() {
    return {
      loading: true,
      videodata: [],
      videoinforShow: false,
      videoinforitem: []
    };
  },
  methods: {
    ...mapMutations({
      setEleOffsetTop: "SET_ELE_OFFSETTOP"
    }),
    ...mapActions([
      "setAdSlide",
      "setSlide",
      "setRankingIndex",
      "setOnline",
      "setDynamicRegion",
      "setNewlist",
      "setRankingRegion",
      "setTimeline"
    ]),
    checkEleOffsetTop() {
      if (this.loading == true) {
        this.module.forEach((ele, index) => {
          const _ref = this.$refs[ele.ref];
          setTimeout(() => {
            this.setEleOffsetTop({
              index: index,
              data: _ref.length ? _ref[0].$el.offsetTop : _ref.$el.offsetTop
            });
          }, 2000);
        });
      }
    },
    setData() {
      //轮播图推广模块
      this.setSlide({
        pf: 0,
        ids: "23,34,29,31,40,42,44"
      });
      //推荐排行三日数据
      this.setRankingIndex(3);
      //当前在线
      this.setOnline();
    },
    videotest() {
      if (this.videodata.ranknowtab === 0 && this.videodata.rankselect === 0) {
        this.videoinforitem = this.mainData[0].rankThreeAllList;
      } else if (
        this.videodata.ranknowtab === 1 &&
        this.videodata.rankselect === 0
      ) {
        this.videoinforitem = this.mainData[0].rankThreeOriginalList;
      } else if (
        this.videodata.ranknowtab === 0 &&
        this.videodata.rankselect === 1
      ) {
        this.videoinforitem = this.mainData[0].rankSevenAllList;
      } else if (
        this.videodata.ranknowtab === 1 &&
        this.videodata.rankselect === 1
      ) {
        this.videoinforitem = this.mainData[0].rankSevenOriginalList;
      }
    },
    videoinforevent(data) {
      this.videodata = data;
      this.videoinforShow = data.videoinforShow;
      this.videotest();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

.zone-wrap-module {
  overflow: hidden;
  padding-bottom: 30px;
}
.new-comers-module {
  .zone-title {
    padding: 0 20px 0 0;
    .headline {
      padding: 10px 0 16px;
      overflow: hidden;
      .icon_t {
        &.icon-donghua {
          background-position: -141px -908px;
        }
      }
      .name {
        &:hover {
          color: $blue;
        }
      }
      &.fj {
        .icon_t {
          display: none;
        }
        .name {
          font-size: 18px;
        }
      }
      .link-more {
        float: right;
        @include wh(52px, 22px);
        line-height: 22px;
        background-color: $white;
        border: 1px solid $border_color;
        color: #555;
        @include borderRadius(4px);
        text-align: center;
        margin: 0 0 0 10px;
        @include transition(0.2s);
        i {
          display: inline-block;
          background-position: -478px -218px;
          @include wh(6px, 12px);
          margin: -2px 0 0;
          vertical-align: middle;
          @include transition(0.2s);
        }
        &:hover {
          background-color: $border_color;
          color: #555 !important;
          i {
            margin-left: 5px;
          }
        }
      }
      .read-push {
        float: right;
        cursor: pointer;
        background-color: $white;
        border: 1px solid $border_color;
        @include borderRadius(4px);
        height: 22px;
        padding: 0 10px;
        @include transition(0.2s);
        .icon_read {
          display: inline-block;
          @include wh(12px, 13px);
          vertical-align: top;
          @include transition(0.5s);
          margin-top: 5px;
          background-position: -475px -89px;
        }
        .info {
          display: inline-block;
          vertical-align: top;
          line-height: 22px;
          margin-left: 5px;
          b {
            font-weight: 700;
          }
        }
        &:hover {
          background-color: $border_color;
          .icon_read {
            -webkit-transform: rotate(1turn);
            -ms-transform: rotate(1turn);
            transform: rotate(1turn);
          }
        }
      }
    }
  }
  .bili-tab {
    float: left;
    margin: 0 10px 0 0;
  }
  .storey-box {
    .spread-module {
      float: left;
      margin: 0 20px 20px 0;
    }
  }
}
.new-comers-module .zone-title .headline .icon_t,
.bangumi-timing-module .headline .icon_t {
  @include wh(40px, 40px);
  margin-right: 10px;
  vertical-align: middle;
  float: left;
  margin-top: -10px;
}
.bangumi-timing-module {
  .headline {
    position: relative;
    padding: 10px 20px 30px 0;
    .icon_t {
      &.icon-bangumi {
        background-position: -141px -140px;
      }
      &.icon-guochuang {
        background-position: -141px -1614px;
      }
    }
    .bili-tab {
      font-size: 18px;
      @include wh(650px, 30px);
      line-height: 30px;
      .bili-tab-item {
        width: 60px;
        border-color: #e5e9ef;
        text-align: center;
        margin: 0;
        padding: 2px 4px 7px;
        &.on {
          border-color: $blue;
        }
      }
    }
    .c-clink {
      position: absolute;
      right: 20px;
      top: 3px;
      border: 1px solid $pink;
      @include wh(104px, 34px);
      line-height: 34px;
      text-align: center;
      @include sc(14px, $pink);
      @include borderRadius(4px);
      @include transition(0.1s);
      &:hover {
        color: $white !important;
        background-color: $pink;
        .icon {
          background-position: -541px -218px;
        }
      }
      .icon {
        display: inline-block;
        vertical-align: middle;
        background-position: -478px -281px;
        @include wh(6px, 12px);
        margin: -2px 0 0 5px;
      }
    }
  }
  .timing-box {
    position: relative;
    margin: 0 20px 20px 0;
    height: 398px;
    overflow-y: auto;
    &.gc {
      height: 288px;
    }
  }
  .card-timing {
    float: left;
    width: 180px;
    padding: 36px 34px 0 0;
  }
}
.new-comers-module .zone-title .headline .name,
.bangumi-timing-module .headline .name {
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  margin-right: 20px;
  float: left;
  color: $black;
}
.bangumi-timing-module .card-timing:first-child,
.bangumi-timing-module .card-timing:nth-child(2),
.bangumi-timing-module .card-timing:nth-child(3),
.bangumi-timing-module .card-timing:nth-child(4) {
  padding-top: 0;
}
.icon-music {
    background-position: -140px -266px;
}
.icon-dance {
    background-position: -141px -461px;
}
.card-timing-module {
  .pic {
    @include wh(72px, 72px);
    margin-right: 12px;
    display: block;
    float: left;
    position: relative;
    overflow: hidden;
    @include borderRadius(4px);
    img {
      @include wh(72px, 72px);
    }
  }
  .r-text {
    float: left;
    @include wh(96px, 72px);
    position: relative;
    .t {
      display: block;
      @include wh(100%, 36px);
      line-height: 18px;
      overflow: hidden;
      text-align: left;
      margin-top: -3px;
      word-break: break-all;
      word-wrap: break-word;
      color: $black;
    }
    .update {
      position: absolute;
      bottom: 0;
      text-align: left;
      margin-top: 2px;
      color: #aaa;
      left: 0;
      white-space: nowrap;
      line-height: 18px;
      a {
        color: $white;
        @include borderRadius(9px);
        display: inline-block;
        vertical-align: top;
        text-align: center;
        padding: 0 4px;
        height: 18px;
        line-height: 18px;
        min-width: 28px;
        max-width: 70px;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 5px;
        background: #b8c0cc;
      }
      &.on {
        a {
          background: #ff8eb3;
        }
      }
    }
  }
}
.bili-tab {
  overflow: hidden;
  zoom: 1;
  .bili-tab-item {
    float: left;
    position: relative;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    padding: 1px 0 2px;
    border-bottom: 1px solid transparent;
    margin-left: 12px;
    @include transition(0.2s);
    -webkit-transition-property: border, color;
    -o-transition-property: border, color;
    transition-property: border, color;
    &:first-child {
      margin-left: 0;
    }
    &.on {
      background-color: transparent;
      border-color: $blue;
      color: $blue;
      &:before {
        display: block;
      }
    }
    &:before {
      content: "";
      display: none;
      position: absolute;
      left: 50%;
      margin-left: -3px;
      bottom: 0;
      @include wh(0, 0);
      border: 3px dashed $blue;
      border-bottom-style: solid;
      border-top: 0;
      border-left-color: transparent;
      border-right-color: transparent;
    }
  }
}
.zone-module .zone-rank,
.bangumi-module .zone-rank {
  float: right;
  width: 260px;
  overflow: hidden;
}
.sec-rank {
  .rank-head {
    height: 24px;
    line-height: 24px;
    h3 {
      float: left;
      font-size: 18px;
      font-weight: 400;
    }
    .rank-tab {
      margin-left: 20px;
      float: left;
    }
  }
  .rank-list-wrap {
    width: 200%;
    overflow: hidden;
    zoom: 1;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    .rank-list {
      padding-bottom: 15px;
      width: 50%;
      float: left;
      padding-top: 20px;
      position: relative;
    }
    &.show-origin {
      margin-left: -100%;
    }
  }
  .more-link {
    display: block;
    height: 24px;
    line-height: 24px;
    background-color: #e5e9ef;
    text-align: center;
    border: 1px solid #e0e6ed;
    color: $black;
    @include borderRadius(4px);
    @include transition(0.2s);
    .icon-arrow-r {
      display: inline-block;
      vertical-align: middle;
      background-position: -478px -218px;
      @include wh(6px, 12px);
      margin: -2px 0 0 5px;
    }
    &:hover {
      background-color: $border_color;
      border-color: $border_color;
      color: $black !important;
    }
  }
}
.rank-list {
  .rank-item {
    position: relative;
    padding-left: 25px;
    margin-top: 20px;
    overflow: hidden;
    &.first {
      margin-top: 0;
      margin-bottom: 15px;
    }
    .ri-num {
      position: absolute;
      color: $white;
      height: 18px;
      line-height: 18px;
      top: 0;
      left: 0;
      font-size: 12px;
      min-width: 12px;
      text-align: center;
      background-color: #b8c0cc;
      @include borderRadius(4px);
      padding: 0 3px;
      font-weight: bolder;
      font-style: normal;
    }
    &.highlight {
      .ri-num {
        background: $pink;
      }
    }
    .ri-info-wrap {
      position: relative;
      display: inline-block;
      cursor: pointer;
      .w-later {
        right: 160px;
      }
      &:hover {
        .w-later {
          display: block;
        }
      }
    }
    .ri-preview {
      margin-right: 5px;
      @include wh(80px, 50px);
      float: left;
      display: none;
      @include borderRadius(4px);
      overflow: hidden;
    }
    .ri-detail {
      float: left;
      .ri-point {
        line-height: 12px;
        color: $grau;
        height: 12px;
        margin-top: 5px;
        display: none;
        overflow: hidden;
      }
      .ri-title {
        line-height: 18px;
        height: 18px;
        overflow: hidden;
        color: $black;
      }
    }
    &.show-detail {
      .ri-preview {
        display: block;
      }
      .ri-detail {
        .ri-title {
          @include wh(150px, 36px);
          line-height: 18px;
          margin-top: -3px;
          padding: 0;
        }
      }
      .ri-point {
        display: block;
      }
    }
    &:hover {
      .ri-title {
        color: $blue;
      }
    }
  }
}
.bangumi-module {
  .up {
    overflow: hidden;
    padding-bottom: 15px;
  }
  .r-con {
    .ad-title {
      line-height: 50px;
      height: 50px;
      h3 {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
  .gc {
    .slide {
      margin-top: 15px;
      height: 90px;
    }
  }
  .slide {
    overflow: hidden;
    @include wh(100%, 268px);
    @include borderRadius(4px);
  }
}
.bangumi-rank-list {
  .rank-item {
    &:first-child {
      margin-top: 0;
    }
    .ri-title {
      white-space: nowrap;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      max-width: 144px;
      line-height: 18px;
      vertical-align: top;
      color: $black;
      display: inline-block;
      overflow: hidden;
    }
    .ri-total {
      display: inline-block;
      vertical-align: top;
      color: $grau;
      margin-left: 10px;
      line-height: 18px;
      height: 18px;
    }
  }
}
.sec-gc {
  .slide {
    overflow: hidden;
    margin-top: 15px;
    @include wh(100%, 90px);
    @include borderRadius(4px);
  }
}
</style>

<template>
  <div class="body-contain">
    <div class="all-contain">
      <search-filter></search-filter>
      <div class="result-wrap clearfix">
        <ul class="bangumi-list all-class" v-if="allResult.result">
          <li
            class="synthetical"
            v-for="(item, index) in allResult.result.media_bangumi"
            :key="`allResult_result_media_bangumi_${index}`"
          >
            <div class="cardBangumibox" v-if="item.season">
              <div class="left-img">
                <a
                  :href="
                    'https://www.bilibili.com/bangumi/play/ss' +
                      item.season_id +
                      '/'
                  "
                  target="_blank"
                  :title="item.season.title"
                >
                  <div class="modal-box">
                    <div class="bangumi-tag vip" v-if="item.season.payment">
                      会员专享
                    </div>
                    <div class="lazy-img">
                      <img alt="" v-lazy="item.cover" />
                    </div>
                  </div>
                </a>
              </div>
              <div class="right-info">
                <div class="headline">
                  <span class="bangumi-label">番剧</span>
                  <a
                    :href="
                      'https://www.bilibili.com/bangumi/media/md' +
                        item.media_id +
                        '/'
                    "
                    target="_blank"
                    :title="item.season.title"
                    class="title"
                    v-html="item.title"
                  >
                  </a>
                </div>
                <div class="info-items">
                  <div class="top-info">
                    <div class="des lf">
                      风格：
                      <span class="type-s">{{ item.styles }}</span>
                    </div>
                    <div class="des">
                      地区：
                      <span class="type-s">{{ item.areas }}</span>
                    </div>
                    <div class="des lf">
                      开播时间：
                      <span class="type-s">{{ timeChange(item.pubtime) }}</span>
                    </div>
                    <div class="des cv">
                      声优：
                      <span :title="item.cv" class="type-s">
                        {{ item.cv }}
                      </span>
                    </div>
                  </div>
                  <div :title="item.desc" class="des info">
                    简介：{{ item.desc }}
                  </div>
                </div>
                <div class="nav">
                  <div class="main-container">
                    <div class="nav-container">
                      <div class="ep-card">
                        <div class="single-box">
                          <ul class="ep-box clearfix close" v-if="item.season">
                            <li
                              class="ep-sub"
                              v-for="(item, index) in item.season.episodes"
                              :key="`item_season_episodes_${index}`"
                            >
                              <a
                                :href="
                                  'https://www.bilibili.com/bangumi/play/ep' +
                                    item.ep_id +
                                    '/'
                                "
                                target="_blank"
                              >
                                <div
                                  :title="item.index + ' ' + item.index_title"
                                  class="ep-item"
                                >
                                  {{ item.index }}
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="score">
                  <div class="score-num">
                    {{ item.media_score.score }}
                    <span class="fen">分</span>
                  </div>
                  <div class="user-count">
                    {{ userCount(item.media_score.user_count) + "人点评" }}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="card-more">
            共找到{{ allResult.top_tlist.media_bangumi }}部相关番剧，
            <router-link :to="{ path: '/search/bangumi' }" class=""
              >点击查看</router-link
            >
            &gt;
          </li>
        </ul>
        <ul class="video-contain clearfix" v-if="allResult.result">
          <li
            class="video matrix"
            v-for="(item, index) in allResult.result.video"
            :key="`allResult_result_video_${index}`"
          >
            <a :href="'/video/av' + item.aid + '/'" target="_blank" title="">
              <div class="img">
                <div class="lazy-img">
                  <img alt="" v-lazy="item.pic" />
                </div>
                <span class="so-imgTag_rb">
                  {{ item.duration }}
                </span>
                <div class="watch-later-trigger watch-later"></div>
              </div>
            </a>
            <div class="info">
              <div class="headline clearfix">
                <span class="type avid">{{ "av" + item.aid }}</span>
                <span class="type hide">综合</span>
                <a
                  title=""
                  :href="'/video/av' + item.aid + '/'"
                  target="_blank"
                  class="title"
                  v-html="item.title"
                >
                </a>
              </div>
              <div class="des hide">
                {{ item.description }}
              </div>
              <div class="tags">
                <span title="观看" class="so-icon watch-num">
                  <i class="icon-playtime"></i>
                  {{ userCount(item.play) }}
                </span>
                <span title="弹幕" class="so-icon hide">
                  <i class="icon-subtitle"></i>
                  {{ item.video_review }}
                </span>
                <span title="上传时间" class="so-icon time">
                  <i class="icon-date"></i>
                  {{ timeChange(item.pubdate) }}
                </span>
                <span title="up主" class="so-icon">
                  <i class="icon-uper"></i>
                  <a
                    :href="'//space.bilibili.com/' + item.mid + '/'"
                    target="_blank"
                    class="up-name"
                    >{{ item.author }}</a
                  >
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { count2, timeChange } from "../../utils/utils";
import searchFilter from "../searchFilter/searchFilter";

export default {
  props: {
    allResult: {
      type: [Object, Array],
      default: () => []
    }
  },
  created() {},
  computed: {},
  components: {
    searchFilter
  },
  data() {
    return {};
  },
  methods: {
    timeChange(time) {
      return timeChange(time);
    },
    userCount(num) {
      return count2(num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

//筛选
.filter-wrap {
  padding: 20px 0 10px;
  position: relative;
  border-bottom: 1px solid #e5e9ef;
  display: table;
  @include wh(100%, auto);
  .filter-type {
    display: block;
    overflow: hidden;
    margin-bottom: 10px;
    &.tids_1 {
      position: relative;
      & > .filter-item {
        margin-right: 9px;
      }
    }
  }
  .filter-item {
    float: left;
    padding-left: 8px;
    padding-right: 8px;
    @include borderRadius(4px);
    margin-right: 15px;
    a {
      @include sc(12px, $black);
      line-height: 20px;
    }
    &:not(.active):hover {
      a {
        color: $blue;
      }
    }
    &.active {
      background-color: $blue;
      a {
        color: $white;
      }
    }
  }
  .fold {
    position: absolute;
    @include borderRadius(4px);
    line-height: 24px;
    @include sc(12px, #6d757a);
    right: 0;
    display: inline-block;
    width: 74px;
    text-align: center;
    &.up {
      bottom: 18px;
    }
    &:hover {
      background-color: #e5e9ef;
      color: $blue;
    }
    &.down {
      left: 416px;
      top: 18px;
    }
  }
}
.arrow-down,
.arrow-up {
  display: inline-block;
  @include wh(12px, 6px);
  vertical-align: middle;
  margin-top: -2px;
  margin-left: 3px;
}
.arrow-up {
  background-image: url(../../assets/search/sprite.png);
  background-position: -442px -403px;
}
.arrow-down {
  background-image: url(../../assets/search/sprite.png);
  background-position: -442px -439px;
}
.switch-wrap {
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 999;
  .type {
    position: absolute;
    top: 0;
    cursor: pointer;
  }
  .aver {
    right: 26px;
  }
  i {
    display: inline-block;
    background-image: url(../../assets/search/sprite.png);
    @include wh(16px, 16px);
    &.icon-imgleft {
      background-position: -148px -376px;
    }
  }
  .imgleft {
    right: 0;
  }
}
.all-contain {
  .switch-wrap {
    top: 20px;
  }
}
.switch-wrap .aver.active:hover i,
.switch-wrap .aver.active i {
  background-position: -206px -139px;
}
.result-wrap {
  padding-bottom: 10px;
}
.all-class {
  border-bottom: 1px solid #e5e9ef;
}
.synthetical {
  margin-right: -10px;
  height: 120px;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  width: 878px;
  padding: 15px 0 15px 102px;
  position: relative;
  border-bottom: 1px solid #e5e9ef;
  .left-img {
    position: absolute;
    left: 0;
    top: 15px;
    @include wh(90px, 120px);
  }
  .headline {
    height: 24px;
  }
  .title {
    display: inline-block;
    height: 24px;
    max-width: 600px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    margin-right: 6px;
    font-weight: 700;
    line-height: 24px;
    @include sc(16px, $black);
    .keyword {
      font-weight: 700;
    }
  }
  .des {
    margin-top: 14px;
    margin-bottom: 7px;
    width: 762px;
    height: 36px;
    @include sc(12px, $grau);
    line-height: 18px;
  }
}
.all-class .movie-item,
.all-class .synthetical {
  border-bottom: none;
}
.bangumi-list {
  .synthetical {
    height: auto;
    .cardBangumibox {
      min-height: 168px;
      .modal-box {
        top: 0;
        position: absolute;
        @include wh(100%, 100%);
        &:hover {
          background: rgba(0, 0, 0, 0.5);
          background-image: url(../../assets/search/play.png);
          background-repeat: no-repeat;
          background-size: 38%;
          background-position: 40px 60px;
          @include borderRadius(4px);
        }
        .bangumi-tag {
          border-radius: 0 4px 0 4px;
          @include wh(56px, 21px);
          line-height: 21px;
          text-align: center;
          position: absolute;
          right: 0;
          background: #ffa726;
          color: $white;
          &.vip {
            background: $pink;
          }
        }
        .lazy-img {
          position: relative;
          z-index: -1;
          img {
            display: block;
            width: 100%;
            min-height: 100%;
            @include borderRadius(4px);
          }
        }
      }
    }
    .left-img {
      @include wh(126px, 168px);
    }
    .headline {
      margin-bottom: 15px;
      margin-top: 3px;
      font-size: medium;
      .bangumi-label {
        display: inline-block;
        height: 22px;
        padding: 0 10px;
        border: 1px solid #979797;
        text-align: center;
        line-height: 24px;
        margin-right: 12px;
        @include sc(12px, #979797);
        @include borderRadius(100px);
      }
    }
    .des {
      overflow: hidden;
      display: inline-block;
      @include wh(35%, auto);
      margin-top: 0;
      line-height: 17px;
      margin-bottom: 0;
      color: #b0b7bd;
      .type-s {
        color: $black;
      }
      &.info {
        display: block;
        @include wh(100%, 34px);
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &.cv {
        height: 17px;
        line-height: 17px;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .score {
      position: absolute;
      right: 0;
      top: 20px;
      @include wh(100px, auto);
      .score-num {
        @include sc(20px, #ffa726);
        position: absolute;
        text-align: right;
        top: 8px;
        right: 0;
        .fen {
          font-size: 14px;
        }
      }
      .user-count {
        position: absolute;
        top: 34px;
        text-align: right;
        font-size: 14px;
        right: 0;
      }
    }
  }
  .right-info {
    margin-left: 40px;
    .info-items {
      height: 80px;
      .top-info {
        width: 90%;
      }
    }
  }
}
.keyword {
  color: $pink;
}
.main-container {
  position: relative;
}
.nav-container {
  .ep-card {
    overflow: hidden;
  }
  .single-box {
    .ep-box {
      margin-left: -7px;
      padding-top: 10px;
      z-index: -1;
    }
    .ep-sub {
      float: left;
      cursor: pointer;
    }
    .ep-item {
      margin-top: 1px;
      display: inline-block;
      @include wh(40px, 32px);
      @include borderRadius(4px);
      border: 1px solid #e5e9ef;
      text-align: center;
      line-height: 32px;
      padding: 0 5px;
      overflow: hidden;
      margin-left: 7px;
      color: #000;
      &:hover {
        background: $blue;
        color: $white;
      }
    }
  }
}
.card-more {
  padding-bottom: 15px;
  padding-right: 8px;
  line-height: 12px;
  color: $grau;
  text-align: right;
}
.video-contain {
  display: block;
  position: relative;
  overflow: hidden;
}
.video {
  &.matrix {
    @include wh(168px, 208px);
    border: 1px solid #e5e9ef;
    @include borderRadius(4px);
    float: left;
    margin-right: 32px;
    margin-top: 20px;
    &:nth-child(5n) {
      margin-right: 0;
    }
    .img {
      height: 100px;
      @include borderRadius(4px);
      position: relative;
      overflow: hidden;
    }
    .info {
      padding: 8px 10px 0;
      .so-icon {
        margin-right: 8px;
        margin-bottom: 12px;
        float: left;
        &.watch-num {
          width: 41px;
          overflow: inherit;
        }
      }
      .time {
        margin-right: 0;
        width: 67px;
      }
    }
    .headline {
      margin-bottom: 12px;
      height: 40px;
      overflow: hidden;
    }
    .type {
      &.avid {
        display: none;
      }
    }
    .hide {
      display: none;
    }
    .title {
      @include sc(12px, $black);
      line-height: 20px;
    }
  }
  .so-imgTag_rb {
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: 18px;
    padding: 0 5px;
    color: $white;
    background-color: #333;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 4px;
  }
  .img {
    &:hover {
      .watch-later {
        display: block;
      }
      .so-imgTag_rb {
        display: none;
      }
    }
  }
  .so-icon {
    &.watch-num {
      white-space: nowrap;
    }
    & > a {
      color: $grau;
      cursor: pointer;
    }
    .up-name {
      display: inline-block;
      max-width: 132px;
      height: 16px;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.watch-later-trigger {
  display: none;
  @include wh(22px, 22px);
  position: absolute;
  right: 6px;
  bottom: 4px;
  cursor: pointer;
  background-image: url(../../assets/play.png);
}
.so-icon {
  display: inline-block;
  @include sc(12px, $grau);
  height: 12px;
  vertical-align: text-top;
  line-height: 12px;
  padding-left: 16px;
  position: relative;
  i {
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(//s1.hdslb.com/bfs/static/jinkela/search/images/sprite-690be8a6ea.png);
    @include wh(11px, 11px);
    &.icon-playtime {
      background-position: -485px -543px;
    }
    &.icon-subtitle {
      background-image: url(//s1.hdslb.com/bfs/static/jinkela/search/images/sprite-690be8a6ea.png);
      background-position: -442px -124px;
      @include wh(11px, 11px);
    }
    &.icon-date {
      background-position: -442px -165px;
    }
    &.icon-uper {
      background-position: -442px -83px;
    }
  }
}
</style>

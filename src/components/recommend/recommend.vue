<template>
  <div class="recommend-module">
    <div
      class="groom-module home-card"
      v-for="(item, index) in recommend.rec"
      :key="`recommend_${index}`"
    >
      <a :href="'/video/av' + item.aid" target="_blank" :title="item.title">
        <img
          v-lazy="item.pic"
          :alt="item.title"
          width="160"
          height="100"
          class="pic"
        />
        <div class="card-mark">
          <p class="title">{{ item.title }}</p>
          <p class="author">up主：{{ item.author }}</p>
          <p class="play">播放：{{ item.play }}</p>
        </div>
      </a>
      <div class="watch-later-trigger w-later"></div>
    </div>
    <template>
      <span class="rec-btn rec-left" @click="left()">{{ recTextLeft }}</span>
      <span class="rec-btn rec-right" @click="right()">{{ recTextRight }}</span>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    recommend: {
      default: []
    }
  },
  computed: {
    recTextLeft() {
      switch (this.recommend.day) {
        case 1:
          return "一周";
        case 3:
          return "昨日";
        case 7:
          return "三日";
        default:
          return "三日";
      }
    },
    recTextRight() {
      switch (this.recommend.day) {
        case 1:
          return "三日";
        case 3:
          return "一周";
        case 7:
          return "昨日";
        default:
          return "一周";
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setRankingIndex"]),
    left() {
      switch (this.recommend.day) {
        case 1:
          this.setRankingIndex(7);
          break;
        case 3:
          this.setRankingIndex(1);
          break;
        case 7:
          this.setRankingIndex(3);
          break;
        default:
          this.setRankingIndex(3);
          break;
      }
    },
    right() {
      switch (this.recommend.day) {
        case 1:
          this.setRankingIndex(3);
          break;
        case 3:
          this.setRankingIndex(7);
          break;
        case 7:
          this.setRankingIndex(1);
          break;
        default:
          this.setRankingIndex(7);
          break;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../style/mixin";

.recommend-module {
  height: 220px;
  position: relative;
  overflow: hidden;
  &:hover {
    .rec-btn {
      opacity: 1;
    }
  }
}
.groom-module {
  float: left;
  margin: 0 0 20px 20px;
  @include wh(160px, 100px);
  @include borderRadius(4px);
  position: relative;
  overflow: hidden;
  background: $white;
  .pic {
    @include wh(160px, 100px);
  }
  .type-name {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5em;
    padding: 0 5px;
    height: 20px;
    line-height: 20px;
    @include borderRadius(4px);
    color: $white;
    font-style: normal;
    background-color: $blue;
    background-color: rgba(0, 161, 214, 0.8);
  }
  .card-mark {
    position: absolute;
    left: 0;
    top: 68px;
    @include wh(150px, 20px);
    font-size: 12px;
    line-height: 20px;
    padding: 10px 5px;
    overflow: hidden;
    background: #000;
    background: -webkit-linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.2) 35%,
      rgba(0, 0, 0, 0.6) 65%,
      rgba(0, 0, 0, 0.9)
    );
    background: -o-linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.2) 35%,
      rgba(0, 0, 0, 0.6) 65%,
      rgba(0, 0, 0, 0.9)
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      color-stop(20%, rgba(0, 0, 0, 0.1)),
      color-stop(35%, rgba(0, 0, 0, 0.2)),
      color-stop(65%, rgba(0, 0, 0, 0.6)),
      to(rgba(0, 0, 0, 0.9))
    );
    background: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.2) 35%,
      rgba(0, 0, 0, 0.6) 65%,
      rgba(0, 0, 0, 0.9)
    );
    .title {
      height: 40px;
      @include sc(12px, $white);
      overflow: hidden;
      margin-bottom: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 20px;
    }
  }
  &:hover {
    .card-mark {
      top: 0;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      .title {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        white-space: inherit;
      }
    }
    .w-later {
      display: block;
    }
  }
}
.groom-module .card-mark .author,
.groom-module .card-mark .play {
  opacity: 0;
  @include sc(12px, $grau);
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  @include transition(0.6s);
}
.groom-module:hover .card-mark .author,
.groom-module:hover .card-mark .play {
  opacity: 1;
}
.rec-btn {
  opacity: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url(../../assets/icons2.png);
  background-repeat: no-repeat;
  width: 20px;
  top: calc(50% - 28px);
  cursor: pointer;
  @include sc(12px, $white);
  @include transition(0.3s);
  text-align: center;
  line-height: 1.3;
}
.rec-left {
  left: 20px;
  border-radius: 0 4px 4px 0;
  padding: 13px 5px 13px 10px;
  background-position: 6px -1211px;
}
.rec-right {
  right: 0;
  border-radius: 4px 0 0 4px;
  padding: 13px 10px 13px 5px;
  background-position: 25px -1262px;
}
</style>

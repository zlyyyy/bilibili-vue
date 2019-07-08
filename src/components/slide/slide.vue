<template>
  <div class="slide" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img" v-if="slidedata[nowIndex]">
      <a
        :href="slidedata[nowIndex].url"
        target="_blank"
        :title="slidedata[nowIndex].name"
      >
        <transition name="slide-trans">
          <img v-if="isShow" :src="slidedata[nowIndex].pic" />
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slidedata[nowIndex].pic" />
        </transition>
      </a>
    </div>
    <div class="slide-title" v-if="slidedata[nowIndex]">
      <a
        :href="slidedata[nowIndex].url"
        target="_blank"
        :title="slidedata[nowIndex].name"
        >{{ slidedata[nowIndex].name }}</a
      >
    </div>
    <ul class="slide-page">
      <li
        v-for="(item, index) in slidedata"
        :key="`slide_data_${index}`"
        :class="{ on: index === nowIndex }"
        @click="goto(index)"
      ></li>
    </ul>
    <div class="slide-button" v-if="pagation">
      <div class="slide-prev-button" @click="goto(prevIndex)">上一页</div>
      <div class="slide-next-button" @click="goto(nextIndex)">下一页</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slidedata: {
      type: [Object, Array],
      default: () => []
    },
    slidetimedata: {
      type: Number,
      default: 2000
    },
    pagation: {
      default: false
    }
  },
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slidedata.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slidedata.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  methods: {
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    runInv() {
      this.inVld = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.slidetimedata);
    },
    clearInv() {
      clearInterval(this.inVld);
    }
  },
  mounted() {
    this.runInv();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

.slide-trans-enter-active {
  @include transition(0.5s);
}
.slide-trans-enter {
  transform: translateX(440px);
}
.slide-trans-old-leave-active {
  @include transition(0.5s);
  transform: translateX(-440px);
}
.slide {
  position: relative;
  @include wh(440px, 220px);
  float: left;
  .slide-img {
    position: absolute;
    @include wh(100%, 100%);
    overflow: hidden;
    a {
      position: relative;
      display: block;
      height: 100%;
      img {
        position: absolute;
        top: 0;
        @include borderRadius(4px);
      }
    }
  }
  .slide-title {
    position: absolute;
    bottom: 0;
    left: 0;
    @include wh(100%, 36px);
    line-height: 36px;
    background: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    font-size: 14px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    a {
      width: 100%;
      color: $white;
      text-decoration: none;
      padding-left: 10px;
      @include transition(0.3s);
    }
  }
  .slide-page {
    position: absolute;
    height: 22px;
    bottom: 7px;
    right: 20px;
    li {
      display: inline-block;
      @include wh(12px, 12px);
      margin: 5px;
      cursor: pointer;
      @include borderRadius(50%);
      background: $white;
      @include transition(0.3s);
      &:hover {
        background: $blue;
        box-sizing: border-box;
        border: 2px solid $white;
      }
    }
  }
  &:hover {
    .slide-button {
      opacity: 1;
      @include transition(0.3s);
    }
  }
  .slide-button {
    opacity: 0;
    position: absolute;
    top: calc(50% - 29px);
    width: 100%;
    @include transition(0.3s);
    .slide-prev-button {
      cursor: pointer;
      position: absolute;
      left: 0;
      height: 22px;
      line-height: 22px;
      background: rgba(0, 0, 0, 0.5);
      color: $white;
      padding: 5px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .slide-next-button {
      cursor: pointer;
      position: absolute;
      right: 0;
      height: 22px;
      line-height: 22px;
      background: rgba(0, 0, 0, 0.5);
      color: $white;
      padding: 5px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
}
.slide .slide-page li:hover,
.slide .slide-page li.on {
  background: $blue;
  width: 30px;
  @include borderRadius(6px);
  box-sizing: border-box;
  border: 2px solid $white;
}
</style>

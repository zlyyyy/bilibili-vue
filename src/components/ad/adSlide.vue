<template>
  <div class="slide" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img" v-if="slidedata[nowIndex]">
      <a
        :href="slidedata[nowIndex].link"
        target="_blank"
        :title="slidedata[nowIndex].title"
      >
        <transition name="slide-trans">
          <img v-if="isShow" :src="slidedata[nowIndex].img" />
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slidedata[nowIndex].img" />
        </transition>
      </a>
    </div>
    <div class="slide-title" v-if="slidedata[nowIndex]">
      <a
        :href="slidedata[nowIndex].link"
        target="_blank"
        :title="slidedata[nowIndex].title"
        >{{ slidedata[nowIndex].title }}</a
      >
    </div>
    <ul class="slide-page">
      <li
        v-for="(item, index) in slidedata"
        :key="`slide_page_${index}`"
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
  watch: {
    slidedata: function(newVal) {
      newVal.length > 0 ? this.runInv() : null;
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
      loading: true,
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
      if (this.loading) {
        this.loading = false;
        this.inVld = setInterval(() => {
          this.goto(this.nextIndex);
        }, this.slidetimedata);
      }
    },
    clearInv() {
      clearInterval(this.inVld);
    }
  },
  mounted() {
    this.slidedata.length > 0 ? this.runInv() : null;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

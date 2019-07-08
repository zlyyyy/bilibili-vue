<template>
  <div class="error-container">
    <div class="error-panel server-error error-404">
      <img src="../../assets/error/very_sorry.png" />
      <div>
        <div class="left-panel">
          <a class="rollback-btn" @click="goBack()">返回上一页</a>
        </div>
        <div class="right-panel"><b>错误号:</b> 404&nbsp;&nbsp;<br /></div>
      </div>
    </div>
    <div class="error-split" id="up"></div>
    <div class="error-manga" v-if="error.list">
      <img :src="error.list[randomNum].data.img" />
      <a class="change-img-btn" @click="test()">换一张</a>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("notFound");

export default {
  created() {
    this.$axios.get("/api/activity/web/view/data/31").then(res => {
      this.setError(res.data.data);
    });
  },
  computed: {
    ...mapState([
      //命名空间获取state
      "error",
      "randomNum"
    ])
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setError", "setRandomNum"]),
    goBack() {
      window.history.go(-1);
    },
    test() {
      let num = Math.floor(Math.random() * this.error.list.length);
      this.setRandomNum(num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../style/mixin";

.error-container {
  width: 1160px;
  margin: 30px auto 30px;
  background: $white;
  @include borderRadius(10px);
}
.error-panel {
  overflow: hidden;
  &.server-error {
    .left-panel {
      @include wh(404px, 150px);
      display: inline-block;
      position: absolute;
      .rollback-btn {
        @include wh(140px, 40px);
        margin: 25px 40px 0 0;
      }
    }
    .right-panel {
      display: inline-block;
      width: 100%;
      margin: 32px 0 25px 0;
      margin-left: 404px;
      padding-left: 26px;
      @include sc(24px, $grau);
      border-left: 1px $border_color dashed;
    }
  }
  &.article-error {
    height: 307px;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    .rollback-btn {
      position: absolute;
      left: 720px;
      top: 220px;
      padding: 0 20px;
      &.login-btn {
        display: inline-block;
        position: absolute;
        top: 144px;
        left: 906px;
      }
    }
    .msg-text {
      position: absolute;
      @include wh(500px, 40px);
      top: 160px;
      left: 540px;
      @include sc(14px, $border_color);
      overflow: hidden;
    }
  }
  .rollback-btn {
    display: block;
    line-height: 40px;
    text-align: center;
    background: $blue;
    @include sc(16px, $white);
    @include borderRadius(4px);
    float: right;
    @include transition(0.2s);
    cursor: pointer;
    &:hover {
      background: #00b5e5;
    }
  }
}
.error-split {
  @include wh(100%, 40px);
  background: url("../../assets/error/have_rest.png") center no-repeat;
}
.error-manga {
  padding: 30px;
  text-align: center;
  img {
    max-width: 800px;
  }
  .change-img-btn {
    display: block;
    @include wh(150px, 48px);
    margin: 30px auto 0;
    line-height: 48px;
    text-align: center;
    @include sc(16px, $white);
    background: $blue;
    @include borderRadius(4px);
    @include transition(0.2s);
    &.off {
      background-color: #e5e9ef;
      color: #b8c0cc;
    }
  }
}
</style>

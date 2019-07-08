<template>
  <div id="app" class="app">
    <app-header></app-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <elevator v-if="elevatorShow"></elevator>
    <div class="go-top-m" v-show="gotop" @click="goTop()">
      <div title="返回顶部" class="go-top icon"></div>
    </div>
    <app-footer></app-footer>
    <login v-if="loginShow"></login>
  </div>
</template>

<script>
import AppHeader from "./components/head/header";
import Elevator from "./components/home/elevator/elevator";
import AppFooter from "./components/foot/footer";
import Login from "./components/loginIn/login";

export default {
  components: {
    AppHeader,
    AppFooter,
    Elevator,
    Login
  },
  data() {
    return {
      gotop: false,
      step: 100
    };
  },
  computed: {
    loginShow() {
      return this.$store.state.login.loginShow;
    },
    elevatorShow() {
      return this.$route.name == "home";
    }
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created() {
    let vm = this;
    window.onscroll = function() {
      if (document.documentElement.scrollTop > 60) {
        vm.gotop = true;
      } else {
        vm.gotop = false;
      }
    };
  }
};
</script>

<style lang="scss">
@import "../src/style/common";
@import "../src/style/mixin";

body {
  position: relative;
  min-height: 100%;
  box-sizing: border-box;
  padding-bottom: 242px;
  font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei,
    Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif;
}
.bili-icon,
.icon {
  display: inline-block;
  background: url(assets/icons.png);
}
/* .app{
    position: relative;
    min-height: calc(100%);
    box-sizing: border-box;
    padding-bottom: 242px;
} */
.bili-wrapper {
  margin: 0 auto;
  width: 1160px;
  .l-con {
    float: left;
    width: 900px;
  }
  .r-con {
    width: 260px;
    float: right;
    width: 260px;
    float: right;
  }
}
/* heaer-banner */
.app-header {
  .head-banner {
    position: relative;
    z-index: 199;
    height: 170px;
    margin-top: -42px;
    background: #eee;
    background-position: center -10px;
    background-repeat: no-repeat;
    .head-content {
      position: relative;
      height: 170px;
      .head-logo {
        position: absolute;
        width: 220px;
        height: 105px;
        left: 24px;
        top: 55px;
        background: transparent no-repeat 0;
        z-index: 10;
      }
    }
    .banner-link {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }
  .search {
    position: absolute;
    bottom: 20px;
    right: 0;
    height: 32px;
    padding: 2px 2px 2px 72px;
    background-color: #e5e9ef;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    font-size: 12px;
    z-index: 10;
    .searchform {
      background-color: $white;
      background-color: hsla(0, 0%, 100%, 0.88);
      display: block;
      height: 32px;
      border-radius: 4px;
      -webkit-transition: background-color 0.2s;
      -o-transition: 0.2s background-color;
      transition: background-color 0.2s;
    }
    .search-keyword {
      float: left;
      width: 200px;
      color: $black;
      font-size: 12px;
      overflow: hidden;
      height: 32px;
      line-height: 32px;
      padding: 0 60px 0 12px;
      border: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
      background-color: transparent;
    }
    button {
      &.search-submit {
        display: block;
        position: absolute;
        right: 0;
        width: 48px;
        min-width: 0;
        cursor: pointer;
        height: 32px;
        background: url(assets/icons.png) -653px -720px;
        margin: 0;
        padding: 0;
        border: 0;
        &:hover {
          background-position: -718px -720px;
        }
      }
    }
    .link-ranking {
      position: absolute;
      left: 2px;
      top: 2px;
      height: 32px;
      line-height: 32px;
      background-color: $white;
      background-color: hsla(0, 0%, 100%, 0.88);
      border-radius: 4px;
      width: 68px;
      -webkit-transition: background-color 0.2s;
      -o-transition: 0.2s background-color;
      transition: background-color 0.2s;
      span {
        padding-left: 26px;
        color: $pink;
        display: inline-block;
        background: url(assets/icons.png) -659px -655px no-repeat;
      }
    }
  }
  .bilibili-suggest {
    position: relative;
    border: 1px solid #e5e9ef;
    margin-top: 2px;
    background: $white;
    z-index: 99999;
    border-radius: 4px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    padding-bottom: 5px;
    font-size: 12px;
    .b-line {
      border-top: 1px solid #e5e9ef;
      position: relative;
      height: 10px;
      margin: 10px 10px 0;
      p {
        margin-top: -10px;
        text-align: center;
      }
      span {
        display: inline-block;
        padding: 0 10px;
        height: 18px;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        color: $grau;
        background: $white;
      }
    }
    .suggest-item {
      padding: 8px 10px;
      cursor: pointer;
      word-wrap: break-word;
      word-break: break-all;
      display: block;
      color: $black;
      position: relative;
      a {
        color: $black;
        display: block;
        max-width: 200px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        .suggest_high_light {
          color: $pink;
        }
      }
      &:hover {
        background-color: #e5e9ef;
      }
    }
    .cancel {
      position: absolute;
      right: 10px;
      top: 0;
      width: 38px;
      height: 28px;
      background: url(assets/icons.png) -461px -530px no-repeat;
    }
  }
}
.primary-menu {
  position: relative;
  width: 1160px;
  height: 50px;
  margin: 0 auto;
  padding: 8px 0 0;
  margin-bottom: 4px;
  z-index: 99;
  border-bottom: 1px solid $white;
  .nav-menu {
    display: inline-block;
    position: relative;
    z-index: 200;
    height: 42px;
    color: $black;
    & > li {
      float: left;
      display: block;
      position: relative;
      margin-right: 11px;
      & > a {
        &:not(.side-link) {
          width: 48px;
          text-align: center;
          display: block;
          height: 48px;
          .num-wrap {
            position: absolute;
            top: 8px;
            left: 0;
            height: 14px;
            width: 100%;
            text-align: center;
            span {
              display: inline-block;
              vertical-align: top;
              font-size: 12px;
              -webkit-transform: scale(0.85);
              -ms-transform: scale(0.85);
              transform: scale(0.85);
              color: $white;
              background-color: #ffafc9;
              border-radius: 3px;
              height: 14px;
              line-height: 14px;
              max-width: 34px;
              padding: 1px 3px;
              font-family: sans-serif;
            }
          }
          .nav-name {
            display: inline-block;
            vertical-align: middle;
            color: $black;
            font-size: 12px;
            height: 40px;
            padding-top: 10px;
            line-height: 50px;
          }
        }
      }
      &:hover {
        .sub-nav {
          display: block;
        }
      }
      .nav-live {
        width: 350px;
        padding: 10px 0;
        ul {
          float: left;
          & > li {
            min-width: 100px;
          }
        }
        .live-field {
          float: left;
          padding-left: 20px;
          width: 210px;
          height: 250px;
          border-left: 1px solid #e5e9ef;
          margin: 10px 0;
          .pic {
            display: inline-block;
            margin-bottom: 20px;
          }
        }
      }
    }
    li {
      &.home {
        margin-right: 9px;
        & > a {
          width: auto;
          background: url(assets/icons.png) -660px -1170px no-repeat;
          .nav-name {
            position: relative;
            top: 15px;
            line-height: 20px;
          }
        }
      }
    }
    .sub-nav {
      display: none;
      position: absolute;
      left: 0;
      overflow: hidden;
      top: 44px;
      background: $white;
      border: 1px solid\9;
      border-top: 0;
      -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      border-radius: 0 0 4px 4px;
      z-index: 2;
      li {
        font-size: 12px;
        line-height: 20px;
        min-width: 120px;
        height: auto;
        text-align: left;
        & > a {
          display: block;
          padding: 5px 15px 5px 25px;
          margin-right: 10px;
          background: url(assets/icons2.png) no-repeat 12px -1613px;
          white-space: nowrap;
          left: 0;
          color: $black;
          span {
            position: relative;
            &:after {
              content: "";
              background: url(assets/icons2.png) no-repeat 0 -1581px;
              width: 15px;
              height: 18px;
              display: block;
              position: absolute;
              right: -100px;
              top: -3px;
              -webkit-transition: all 0.2s;
              -o-transition: 0.2s all;
              transition: all 0.2s;
              opacity: 0;
            }
          }
        }
        &:hover {
          background-color: #e5e9ef;
          & > a {
            left: 5px;
          }
        }
      }
      &:not(.square-wrap) {
        li {
          &:hover {
            & > a {
              span {
                &:after {
                  right: -21px;
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
    .side-nav {
      margin: 0 6px;
      width: 40px;
      text-align: center;
      .side-link {
        display: inline-block;
        position: relative;
        overflow: hidden;
        zoom: 1;
        &:hover {
          span {
            color: #00a1d6;
          }
        }
        i {
          display: block;
          width: 18px;
          height: 18px;
          margin: 3px auto 2px;
          background: url(assets/icons.png) no-repeat;
          display: block;
          width: 18px;
          height: 18px;
          margin: 5px auto 6px;
          background: url(assets/icons.png) no-repeat;
          &.square {
            background-position: -87px -2006px;
          }
          &.live {
            background-position: -87px -1878px;
          }
          &.blackroom {
            background-position: -87px -1942px;
          }
          &.zhuanlan {
            background-position: -87px -1814px;
          }
        }
        span {
          display: block;
          color: $black;
          margin: 0;
          font-size: 12px;
        }
      }
      .square-wrap {
        padding-top: 20px;
        padding-bottom: 20px;
        white-space: nowrap;
        width: 387px;
        height: 188px;
        ul {
          width: 107px;
          margin-top: -6px;
          & > li {
            min-width: 107px;
            margin-top: 8px;
            &:first-child {
              margin-top: 0;
            }
            a {
              background: none;
              padding: 2px 10px 2px 18px;
            }
          }
        }
        .square-field {
          position: absolute;
          top: 20px;
          right: 0;
          display: block;
          width: 240px;
          height: 188px;
          padding: 0 20px 0 19px;
          border-left: 1px solid #e5e9ef;
          & > a {
            margin-top: 20px;
            &:first-child {
              margin-top: 0;
            }
          }
          a {
            color: $black;
            line-height: normal;
            display: block;
          }
          img {
            width: 240px;
            height: 84px;
            border-radius: 4px;
          }
        }
        .icon-prim {
          width: 16px;
          height: 13px;
          margin-right: 4px;
          margin-top: 4px;
          vertical-align: top;
          display: inline-block;
          background-image: url(assets/icons.png);
        }
        .icon-activity {
          background-position: -280px -1179px;
        }
        .icon-game {
          background-position: -279px -1241px;
        }
        .icon-news {
          background-position: -344px -1178px;
        }
        .icon-hy {
          background-position: -280px -1370px;
        }
        .icon-mango {
          background-position: -280px -1433px;
        }
        .icon-vip-buy {
          display: inline-block;
          width: 16px;
          height: 13px;
          margin-top: 0;
          vertical-align: inherit;
          background-repeat: no-repeat;
          background-image: url(assets/vipbuy.png);
          background-position: 50%;
        }
      }
    }
  }
}
.primary-menu .nav-menu .sub-nav li,
.primary-menu .nav-menu .sub-nav li > a {
  position: relative;
  overflow: hidden;
  -webkit-transition: all 0.2s;
  -o-transition: 0.2s all;
  transition: all 0.2s;
}
.nav-gif {
  position: absolute;
  right: 0;
  top: 0;
  height: 50px;
  padding: 4px 0;
}
.gif-menu {
  .random-p {
    width: 69px;
    height: 40px;
    display: inline-block;
    vertical-align: top;
    margin: 3px 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      border-radius: 3px;
    }
  }
}
/* app-body */
.chief-recommend-module {
  padding-bottom: 30px;
}
.app-body {
  overflow: hidden;
  margin-bottom: 40px;
}
.video-info-module {
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  border: 1px solid $border_color;
  border-radius: 4px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10020;
  overflow: hidden;
  background-color: $white;
  padding: 12px;
  .v-title {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
    line-height: 12px;
  }
  .v-info {
    color: $grau;
    padding: 4px 0 6px;
    span {
      display: inline-block;
      vertical-align: top;
      height: 16px;
      line-height: 12px;
    }
    .name {
      white-space: nowrap;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      max-width: 150px;
    }
    .line {
      display: inline-block;
      border-left: 1px solid $grau;
      height: 12px;
      margin: 1px 10px 0;
    }
  }
  .v-preview {
    padding: 8px 0 12px;
    border-top: 1px solid #e5e9ef;
    height: 64px;
    .lazy-img {
      width: auto;
      float: left;
      margin-right: 8px;
      margin-top: 4px;
      height: auto;
      border-radius: 4px;
      overflow: hidden;
      width: 96px;
      height: 60px;
    }
    .txt {
      height: 60px;
      overflow: hidden;
      line-height: 21px;
      word-wrap: break-word;
      word-break: break-all;
      color: #99a2aa;
    }
  }
  .v-data {
    border-top: 1px solid #e5e9ef;
    padding-top: 10px;
    span {
      white-space: nowrap;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: inline-block;
      width: 70px;
      color: $grau;
      line-height: 12px;
      .icon {
        margin-right: 4px;
        vertical-align: top;
        display: inline-block;
        width: 12px;
        height: 12px;
      }
    }
    .play {
      .icon {
        background-position: -282px -90px;
      }
    }
    .danmu {
      .icon {
        background-position: -282px -218px;
      }
    }
    .star {
      .icon {
        background-position: -282px -346px;
      }
    }
    .coin {
      .icon {
        background-position: -282px -410px;
      }
    }
  }
}
/*  推广popularize */
.popularize-module {
  overflow: hidden;
  padding-bottom: 15px;
  .headline {
    padding: 10px 0 15px;
    height: 30px;
    .icon_t {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      vertical-align: middle;
      float: left;
      margin-top: -10px;
      &.icon-promote {
        background-position: -141px -75px;
      }
    }
    .name {
      font-size: 24px !important;
      line-height: 24px;
      font-weight: 400;
      margin-right: 20px;
      float: left;
    }
  }
  .storey-box {
    height: 168px;
    overflow: hidden;
    .spread-module {
      float: left;
      margin: 0 20px 20px 0;
    }
  }
  .online {
    position: relative;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    border-radius: 4px;
    text-align: center;
    background: #e5e9ef;
    white-space: nowrap;
    a {
      color: #6d757a;
      &:hover {
        color: $blue;
      }
    }
    em {
      display: inline-block;
      border-left: 1px solid #b8c0cc;
      height: 10px;
      line-height: 10px;
      margin: 12px 15px 0;
      vertical-align: top;
    }
  }
  .adpos {
    margin-top: 10px;
    border-radius: 4px;
    overflow: hidden;
    width: 260px;
    height: 150px;
    position: relative;
    a {
      display: block;
    }
    .gg-pic {
      position: absolute;
      bottom: 2px;
      left: 2px;
    }
  }
}
.spread-module {
  position: relative;
  width: 160px;
  height: 148px;
  font-size: 12px;
  overflow: hidden;
  a {
    &:hover {
      .t {
        color: #00a1d6;
      }
    }
  }
  .pic {
    position: relative;
    width: 160px;
    height: 100px;
    display: block;
    overflow: hidden;
    text-align: center;
    border-radius: 4px;
    img {
      margin: 0 auto;
      outline: 0;
    }
    .mask-video {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      -webkit-transition: opacity 0.3s;
      -o-transition: opacity 0.3s;
      transition: opacity 0.3s;
    }
    .gg-pic {
      position: absolute;
      right: 0;
      top: 0;
    }
    .dur {
      opacity: 0;
      position: absolute;
      bottom: 2px;
      left: 6px;
      color: $white;
      height: 12px;
      line-height: 12px;
      padding: 0 5px 1px 0;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }
    .promote {
      overflow: hidden;
      position: absolute;
      bottom: 0;
      padding: 0 5px;
      border-radius: 0 5px 0 0;
      color: $white;
      left: 0;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.4);
      line-height: 20px;
    }
    .medal {
      position: absolute;
      left: 0;
      top: 0;
      width: 40px;
      height: 24px;
      pointer-events: none;
      &.golden {
        background-position: -849px -148px;
      }
      &.silvery {
        background-position: -849px -212px;
      }
    }
    .w-later {
      display: none;
    }
    &:hover {
      .w-later {
        display: block;
      }
    }
  }
  .t {
    padding-top: 8px;
    height: 40px;
    line-height: 20px;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    color: $black;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: left;
    font-size: 12px;
  }
  .num {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 20px;
    line-height: 20px;
    color: $grau;
    background-color: $white;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    font-size: 0;
    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      vertical-align: top;
      margin-right: 5px;
    }
    span {
      line-height: 12px;
      height: 14px;
      display: inline-block;
      width: 50%;
      overflow: hidden;
      font-size: 12px;
      vertical-align: bottom;
    }
    .play {
      .icon {
        background-position: -282px -90px;
      }
    }
    .danmu {
      .icon {
        background-position: -282px -218px;
      }
    }
  }
  &:hover {
    .dur {
      opacity: 1;
    }
    .num {
      bottom: -20px;
    }
    .mask-video {
      opacity: 1;
    }
  }
}
.cover-preview-module {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  .cover {
    position: absolute;
    left: 0;
    top: 7px;
    height: 98px;
    width: 100%;
    margin-top: 2px;
  }
  .progress-bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 10px;
    border-width: 4px 8px;
    border-style: solid;
    border-color: #000;
    background: #444;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    span {
      display: block;
      background: $white;
      height: 2px;
    }
  }
}
.danmu-module {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  pointer-events: none;
  .dm {
    position: absolute;
    color: $white;
    left: 100%;
    top: 8px;
    white-space: pre;
    text-shadow: 1px 1px 2px #001;
    &.row2 {
      top: 25px;
    }
  }
}
.watch-later-trigger {
  display: none;
  width: 22px;
  height: 22px;
  position: absolute;
  right: 6px;
  bottom: 4px;
  cursor: pointer;
  background-image: url(assets/play.png);
}
/*  返回顶部 */
.go-top-m {
  bottom: 50px;
  width: 48px;
  position: fixed;
  left: 50%;
  margin-left: 590px;
  -webkit-transition: top 0.3s;
  -o-transition: top 0.3s;
  transition: top 0.3s;
  z-index: 999;
  .go-top {
    cursor: pointer;
    width: 46px;
    height: 48px;
    background-color: #f6f9fa;
    background-position: -648px -72px;
    background-repeat: no-repeat;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
  }
}
/* app-footer */
.app-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 60px 0 10px 0;
  text-align: center;
  font-size: 12px;
  background-color: #f6f9fa;
  a {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    color: $black;
    &:hover {
      color: $blue;
    }
  }
  .footer-cnt {
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
  }
  .boston-postcards {
    list-style: none;
    margin: 0 auto;
    display: flex;
    margin-bottom: 30px;
    li {
      flex: 1;
      text-align: left;
      list-style: none;
      height: 112px;
      line-height: 1;
      border-left: solid 1px #e5e9ef;
      font-size: 14px;
      padding: 0 0 0 25px;
      &:first-child {
        border-left: 0;
        padding: 0 20px 0 0;
      }
      &:last-child {
        padding: 0 20px 0 25px;
      }
      .tips {
        margin-bottom: 22px;
        color: $grau;
      }
      .cards {
        float: left;
        width: 33%;
        position: relative;
        margin-bottom: 16px;
      }
    }
  }
  .block {
    position: relative;
    width: 100%;
    div {
      position: relative;
      width: 82px;
      height: 80px;
      float: left;
    }
    .pic {
      position: relative;
      margin-left: 11px;
      width: 60px;
      height: 60px;
    }
    .phone {
      .pic {
        background: url(assets/icons.png) no-repeat -1024px -194px;
      }
    }
    .weibo {
      .pic {
        background: url(assets/icons.png) no-repeat -1024px -322px;
      }
    }
    .weixin {
      .pic {
        color: $black;
        background: url(assets/icons.png) no-repeat -1024px -66px;
      }
    }
    em {
      position: absolute;
      width: 82px;
      line-height: 14px;
      float: left;
      bottom: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
    .qrcode-box-wrp {
      width: 130px;
      height: 130px;
      background: $white;
      margin-top: -146px;
      right: -23px;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      transition: 0.2s;
      z-index: 100000;
    }
    .qrcode-box {
      width: 128px;
      height: 128px;
      border: 1px solid #e5e9ef;
    }
  }
  .copyright {
    p {
      line-height: 30px;
      color: $grau;
    }
  }
}
</style>

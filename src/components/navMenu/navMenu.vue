<template>
  <div class="nav-menu">
    <div
      v-if="menuShow"
      class="blur-bg"
      :style="{ background: 'url(' + headBanner.pic + ')' }"
    ></div>
    <div class="nav-mask"></div>
    <div class="bili-wrapper">
      <div class="nav-con fl">
        <ul>
          <li
            class="nav-item"
            v-for="(item, index) in leftNav"
            :key="`leftNav_${index}`"
            :class="item.class"
          >
            <a class="t" :href="item.href">
              <i :class="item.icon" v-if="item.icon"></i>
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="up-load fr">
        <a href="" target="_blank" class="u-link">
          投 稿
        </a>
      </div>
      <div class="nav-con fr">
        <ul>
          <li
            class="nav-item profile-info"
            :class="{ on: signIn == 1 }"
            @mouseover="profileFadeIn"
            @mouseout="profileFadeOut"
          >
            <a
              class="t"
              v-if="signIn == 1"
              :href="'https://space.bilibili.com/' + proInfo.mid"
              target="_blank"
            >
              <div class="i-face">
                <img v-if="proInfo" :src="proInfo.face" class="face" />
                <img class="pendant" />
              </div>
            </a>
            <a
              class="t"
              v-else
              @click="
                setLoginShow();
                setLoginTab(0);
              "
            >
              <div class="i-face">
                <img src="../../assets/akari.jpg" class="face" />
              </div>
            </a>
            <transition name="nav-trans">
              <div
                class="profile-m dd-bubble"
                v-if="signIn == 1"
                v-show="profileShow"
              >
                <div class="header-u-info" v-if="proInfo">
                  <div class="header-uname">
                    <b class="">{{ proInfo.uname }}</b>
                  </div>
                  <div class="btns-profile clearfix">
                    <div class="coin fl">
                      <a
                        href="https://account.bilibili.com/site/coin"
                        target="_blank"
                        title="硬币"
                      >
                        <i class="bili-icon bi"></i>
                        <i class="bili-icon jia"></i>
                        <span class="num">{{ Math.ceil(proInfo.money) }}</span>
                        <span class="num-move">{{ proInfo.money }}</span>
                        <span title="" class="num-tip">登录奖励</span>
                      </a>
                    </div>
                    <div class="currency fl">
                      <a
                        href="https://pay.bilibili.com/bb_balance.html"
                        target="_blank"
                        title="B币"
                      >
                        <i class="bili-icon"></i>
                        <span class="num">0</span>
                      </a>
                    </div>
                    <div class="ver phone fr verified">
                      <a
                        href="https://passport.bilibili.com/site/site.html"
                        target="_blank"
                      >
                        <i class="bili-icon"></i>
                        <span class="tips">已绑定</span>
                      </a>
                    </div>
                    <div class="ver email fr verified">
                      <a
                        href="https://passport.bilibili.com/site/site.html"
                        target="_blank"
                      >
                        <i class="bili-icon"></i>
                        <span class="tips">已绑定</span>
                      </a>
                    </div>
                    <div class="link-to-bind-mobile"></div>
                  </div>
                  <div class="grade clearfix">
                    <span class="hd fl">等级</span>
                    <a
                      href="https://account.bilibili.com/site/record.html"
                      target="_blank"
                    >
                      <div class="bar fr">
                        <div class="lt" :class="level"></div>
                        <div
                          class="rate"
                          :style="{ width: proInfo.moral + '%' }"
                        ></div>
                        <div class="num">
                          <div v-if="proInfo.level_info">
                            {{ proInfo.level_info.current_exp }}
                            <span>{{ "/" + proInfo.level_info.next_exp }}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="desc-tips">
                      <span class="arrow-left"></span>
                      <div class="lv-row">
                        作为<strong>LV4</strong>，你可以：
                      </div>
                      <div>
                        1、发射个性弹幕（彩色、高级、顶部、底部）<br />
                        2、参与视频互动（评论、添加tag）<br />
                        3、投稿成为偶像
                      </div>
                      <a href="#" target="_blank" class="help-link"
                        >会员等级相关说明 &gt;</a
                      >
                    </div>
                  </div>
                </div>
                <div class="member-menu">
                  <ul class="clearfix">
                    <li>
                      <a
                        href="https://account.bilibili.com/account/home"
                        target="_blank"
                        class="account"
                      >
                        <i class="bili-icon b-icon-p-account"></i>
                        个人中心
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://member.bilibili.com/v2#/home"
                        target="_blank"
                        class="member"
                      >
                        <i class="bili-icon b-icon-p-member"></i>
                        投稿管理
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://pay.bilibili.com/paywallet-fe/bb_balance.html"
                        target="_blank"
                        class="wallet"
                      >
                        <i class="bili-icon b-icon-p-wallet"></i>
                        B币钱包
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://link.bilibili.com/p/center/index#/user-center/my-info/operation"
                        target="_blank"
                        class="live"
                      >
                        <i class="bili-icon b-icon-p-live"></i>
                        直播中心
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://show.bilibili.com/orderlist"
                        target="_blank"
                        class="bml"
                      >
                        <i class="bili-icon b-icon-p-ticket"></i>
                        订单中心
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
                <div class="member-bottom">
                  <a href="#" class="logout" @click="signOut()">退出</a>
                </div>
              </div>
            </transition>
            <div class="i_menu i_menu_login" v-if="signIn == 0">
              <p class="tip">
                登录后你可以：
              </p>
              <div class="img">
                <img src="../../assets/danmu.png" />
                <img src="../../assets/danmu.png" />
              </div>
              <a
                class="login-btn"
                @click="
                  setLoginShow();
                  setLoginTab(0);
                "
                >登录</a
              >
              <p class="reg">
                首次使用？<a
                  @click="
                    setLoginShow();
                    setLoginTab(1);
                  "
                  >点我去注册</a
                >
              </p>
            </div>
          </li>
          <template v-if="signIn == 1">
            <li class="nav-item" @mouseover="vipFadeIn" @mouseout="vipFadeOut">
              <a href="#" target="_blank" class="t">
                大会员
              </a>
              <transition name="nav-trans">
                <div class="app-header vip-m dd-bubble" v-show="vipShow">
                  <div class="bubble-traditional">
                    <div class="recommand">
                      <div class="title">
                        精彩推荐
                        <a href="#" target="_blank" class="more"
                          >更多<i class="b-icon b-icon-arrow-r"></i
                        ></a>
                      </div>
                      <div class="bubble-col bubble-col-1 bubble-col-3">
                        <div
                          class="item"
                          v-for="(item, index) in topInfo.picAndWords.filter(
                            (ele, index) => index < 3
                          )"
                          :key="`topInfo_picAndWords_${index}`"
                        >
                          <a target="_blank" :href="item.linkUrl" class="pic">
                            <div class="lazy-img">
                              <img
                                :alt="item.content"
                                v-lazy="item.image1Url"
                              />
                            </div>
                          </a>
                          <a
                            target="_blank"
                            :href="item.linkUrl"
                            class="recommand-link"
                            >{{ item.content }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
            <li
              class="nav-item"
              @mouseover="messageFadeIn"
              @mouseout="messageFadeOut"
            >
              <a href="#" target="_blank" title="消息" class="t">
                <div class="num">
                  1
                </div>
                消息
              </a>
              <transition name="nav-trans">
                <div class="im-list-box" v-show="messageShow">
                  <a class="im-list" target="_blank" href="#">
                    回复我的
                    <div
                      class="im-notify im-number im-center"
                      style="display: none"
                    >
                      0
                    </div>
                  </a>
                  <a class="im-list" target="_blank" href="#">
                    @我的
                    <div
                      class="im-notify im-number im-center"
                      style="display: none"
                    >
                      0
                    </div>
                  </a>
                  <a class="im-list" target="_blank" href="#">
                    收到的赞
                    <div
                      class="im-notify im-number im-center"
                      style="display: none"
                    >
                      0
                    </div>
                  </a>
                  <a class="im-list" target="_blank" href="#">
                    系统通知
                    <div class="im-notify im-number im-center" style="">
                      1
                    </div>
                  </a>
                  <a class="im-list" target="_blank" href="#">
                    我的消息
                    <div
                      class="im-notify im-number im-center"
                      style="display: none"
                    >
                      0
                    </div>
                  </a>
                </div>
              </transition>
            </li>
            <li class="nav-item">
              <a href="#" target="_blank" class="t">
                动态
              </a>
            </li>
            <li class="nav-item">
              <a href="#" target="_blank" class="t">
                稍后再看
              </a>
            </li>
            <li class="nav-item">
              <a href="#" target="_blank" class="t">
                收藏夹
              </a>
            </li>
          </template>
          <li class="nav-item">
            <a
              href="//www.bilibili.com/account/history"
              target="_blank"
              class="t"
            >
              历史
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("login");

export default {
  props: {
    leftNav: {
      default: []
    },
    headBanner: {
      default: []
    },
    menuShow: {
      default: []
    }
  },
  data() {
    return {
      profileShow: false, //个人信息默认隐藏
      vipShow: false, //会员推荐默认隐藏
      messageShow: false //消息通知默认隐藏
    };
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      //命名空间获取state
      signIn: state => state.signIn, //登录状态获取
      proInfo: state => state.proInfo, //个人信息获取
      topInfo: state => state.topInfo //会员推荐信息获取
    }),
    //个人等级
    level() {
      if (this.proInfo.level_info) {
        return "lv" + this.proInfo.level_info.current_level;
      }
      return "";
    }
  },
  methods: {
    ...mapMutations({
      setLoginShow: "SET_LOGIN_SHOW", //登录弹窗显示隐藏
      setLoginTab: "SET_LOGIN_TAB" //注册登录tab状态
    }),
    ...mapActions([
      "setSignIn", //登录
      "setUserInfo", //获取个人信息
      "setVipInfo", //获取大会员推荐信息
      "signOut" //退出登录
    ]),
    //个人信息显示隐藏
    profileFadeIn() {
      this.profileShow = true;
    },
    profileFadeOut() {
      this.profileShow = false;
    },
    //会员推荐显示隐藏
    vipFadeIn() {
      this.vipShow = true;
    },
    vipFadeOut() {
      this.vipShow = false;
    },
    //消息通知显示隐藏
    messageFadeIn() {
      this.messageShow = true;
    },
    messageFadeOut() {
      this.messageShow = false;
    }
  },
  created() {
    const login = localStorage.getItem("signIn"); //读取缓存登录状态
    if (!login) {
      //无状态即未登录状态，修改state值
      this.setSignIn({
        signIn: localStorage.setItem("signIn", 0)
      });
    } else {
      //已登录状态
      //读取缓存状态
      this.setSignIn({
        signIn: localStorage.getItem("signIn")
      });
      // //获取个人信息
      // this.setUserInfo()
      // //获取大会员推荐信息
      // this.setVipInfo()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../style/mixin";

//菜单偏移，透明度过渡效果
.nav-trans-enter,
.nav-trans-leave-to {
  transform: translateY(5px);
  opacity: 0;
}
.nav-trans-enter-to,
.nav-trans-leave {
  transform: translateY(0px);
  opacity: 1;
}
.nav-trans-enter-active,
.nav-trans-leave-active {
  transition: all 0.3s ease;
}
//app-header
.app-header {
  position: relative;
  background: $white;
  .bili-wrapper {
    margin: 0 auto;
    width: 1160px;
  }
  .nav-menu {
    position: relative;
    z-index: 200;
    height: 42px;
    color: $black;
    .blur-bg {
      position: absolute;
      top: 0;
      left: 0;
      @include wh(100%, 100%);
      background-position: center -10px;
      background-repeat: no-repeat;
      -webkit-filter: blur(4px);
      filter: blur(4px);
    }
    .nav-mask {
      position: absolute;
      top: 0;
      left: 0;
      @include wh(100%, 100%);
      background-color: hsla(0, 0%, 100%, 0.4);
      -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    .bili-wrapper {
      .nav-con {
        .nav-item {
          float: left;
          text-align: center;
          line-height: 42px;
          height: 42px;
          position: relative;
          background-color: hsla(0, 0%, 100%, 0);
          @include transition(0.3s);
          &:hover {
            background-color: hsla(0, 0%, 100%, 0.3);
          }
          a {
            &.t {
              color: $black;
              height: 100%;
              display: block;
              padding: 0 11px;
            }
          }
          &.home {
            margin-left: -10px;
            padding-left: 12px;
            a {
              padding-left: 20px;
            }
            i {
              position: absolute;
              @include wh(17px, 14px);
              left: 10px;
              top: 12px;
              background-position: -919px -88px;
            }
          }
          &.mobile {
            i {
              display: inline-block;
              vertical-align: middle;
              background-position: -1367px -1175px;
              @include wh(21px, 21px);
            }
          }
        }
      }
    }
    .nav-con {
      .nav-item {
        .t {
          .num {
            height: 12px;
            line-height: 12px;
            background-color: $pink;
            position: absolute;
            padding: 1px 2px;
            @include sc(12px, $white);
            @include borderRadius(10px);
            top: 1px;
            right: -4px;
            min-width: 16px;
            z-index: 30;
            text-align: center;
          }
        }
        .im-list-box {
          width: 110px;
          position: absolute;
          top: 100%;
          left: calc(50% - 55px);
          background: $white;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
          border-radius: 0 0 4px 4px;
          overflow: hidden;
          transition: all 300ms;
        }
        .reg {
          a {
            display: initial;
            cursor: pointer;
            padding: 0;
            color: $blue;
          }
        }
      }
    }
    .dd-bubble {
      position: absolute;
      z-index: 1;
    }
    .up-load {
      position: relative;
      @include wh(58px, 42px);
      .u-link {
        position: relative;
        display: block;
        @include wh(100%, 48px);
        @include sc(14px, $white);
        line-height: 42px;
        text-align: center;
        z-index: 0;
        &:after {
          position: absolute;
          left: 0;
          content: "";
          @include wh(100%, 100%);
          background: $pink;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          z-index: -1;
        }
      }
    }
  }
  //右侧
  .profile-info {
    width: 58px;
    .i-face {
      position: absolute;
      z-index: 20;
      @include wh(36px, 36px);
      left: 11px;
      top: 0;
      @include transition(0.3s);
      .face {
        border: 0 solid $white;
        @include wh(100%, 100%);
        @include borderRadius(50%);
      }
      .pendant {
        position: absolute;
        @include wh(84px, 84px);
        left: -11px;
        bottom: -3px;
        visibility: hidden;
        -webkit-transition-delay: 0s;
        -o-transition-delay: 0s;
        transition-delay: 0s;
      }
    }
    &.on {
      &:hover {
        .i-face {
          left: -4px;
          top: 15px;
          @include wh(64px, 64px);
          .face {
            border: 2px solid $white;
          }
        }
      }
    }
    &:hover {
      .i_menu_login {
        display: block;
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
  //个人信息开始
  .profile-m {
    left: 50%;
    margin-left: -130px;
    width: 260px;
    padding: 50px 0 0;
    top: 42px;
    background: $white;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    border-radius: 0 0 4px 4px;
    line-height: normal;
    .header-u-info {
      a {
        color: $black;
      }
    }
    .header-uname {
      padding-bottom: 15px;
      b {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
      }
    }
    .btns-profile {
      position: relative;
      margin: 0 20px;
      height: 18px;
      .bili-icon {
        display: inline-block;
        @include wh(18px, 18px);
        vertical-align: middle;
        background-repeat: no-repeat;
      }
      .coin {
        .bi {
          background-position: -343px -471px;
          margin-right: 2px;
          position: relative;
          z-index: 2;
        }
        .jia {
          z-index: 1;
          left: 0;
          position: absolute;
          top: 0;
          @include wh(18px, 18px);
          background-position: -279px -1495px;
        }
      }
      .num {
        vertical-align: middle;
        display: inline-block;
        @include transition(2s);
      }
      .num-move {
        position: absolute;
        @include transition(2s);
        left: 23px;
        top: -10px;
        opacity: 0;
        line-height: 14px;
      }
      .num-tip {
        color: #2cc06f;
        position: absolute;
        @include transition(0.3s);
        left: 60px;
        top: -18px;
        opacity: 0;
        background: $white;
        padding: 3px 5px;
        z-index: 10;
      }
      .currency {
        position: absolute;
        left: 58px;
        z-index: 0;
        .bili-icon {
          background-position: -407px -471px;
          margin: 0 5px 0 8px;
        }
      }
      .ver {
        position: relative;
        a {
          display: block;
        }
        .tips {
          display: none;
          padding: 0 6px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #ccc;
          @include borderRadius(4px);
          position: absolute;
          right: 30px;
          top: -2px;
          white-space: nowrap;
          background-color: $white;
          color: $black;
          z-index: 10;
          &:after {
            content: "";
            position: absolute;
            @include wh(8px, 8px);
            background: url(../../assets/horn.png);
            right: -8px;
            top: 6px;
          }
        }
        &:hover {
          .tips {
            display: block;
          }
        }
      }
      .phone {
        &.verified {
          .bili-icon {
            background-position: -343px -599px;
          }
        }
      }
      .email {
        margin-right: 10px;
        &.verified {
          .bili-icon {
            background-position: -343px -534px;
          }
        }
      }
    }
    .grade {
      position: relative;
      margin: 24px 0 30px;
      height: 16px;
      padding: 0 20px;
      .bar {
        position: relative;
        top: 6px;
        @include wh(170px, 8px);
        background: #eee;
        .lt {
          @include wh(18px, 18px);
          @include borderRadius(9px);
          position: absolute;
          left: -17px;
          top: -6px;
          @include sc(12px, $white);
          line-height: 18px;
          text-align: center;
          background-color: #f3cb85;
          background-image: url(../../assets/level.png);
          background-repeat: no-repeat;
          &.lv4 {
            background-position: -153px -152px;
          }
        }
        .rate {
          @include wh(20%, 8px);
          background-color: #f3cb85;
        }
        .num {
          position: absolute;
          right: 0;
          bottom: -18px;
          span {
            color: #ccc;
          }
        }
      }
      .desc-tips {
        display: none;
        padding: 15px 15px 15px 20px;
        position: absolute;
        top: -16px;
        left: 260px;
        @include borderRadius(2px);
        background-color: $white;
        z-index: 100;
        width: 220px;
        line-height: 24px;
        word-break: break-word;
        word-wrap: break-word;
        min-height: 65px;
        color: #676b73;
        -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
        text-align: left;
        .arrow-left {
          position: absolute;
          display: inline-block;
          top: 16px;
          left: -10px;
          @include wh(10px, 20px);
          background: transparent url(../../assets/level.png) -182px -224px
            no-repeat;
        }
        .lv-row {
          margin-bottom: 10px;
          strong {
            @include sc(14px, $black);
            padding: 0 3px;
          }
        }
        .help-link {
          margin-top: 15px;
          float: right;
          color: $blue;
        }
      }
      &:hover {
        .desc-tips {
          display: block;
        }
      }
    }
    .member-menu {
      border-top: 1px solid #e5e9ef;
      padding: 10px 20px 40px;
      overflow: hidden;
      ul {
        width: 240px;
        clear: both;
        zoom: 1;
      }
      li {
        float: left;
        width: 100px;
        margin-right: 20px;
        position: relative;
        a {
          white-space: nowrap;
          color: $black;
          text-align: left;
          margin: 0 auto;
          display: block;
          padding: 5px 0;
          line-height: 16px;
          &:hover {
            color: $blue;
            .bili-icon {
              &.b-icon-p-account {
                background-position: -536px -407px;
              }
              &.b-icon-p-member {
                background-position: -601px -1046px;
              }
              &.b-icon-p-wallet {
                background-position: -536px -472px;
              }
              &.b-icon-p-live {
                background-position: -537px -855px;
              }
              &.b-icon-p-ticket {
                background-position: -535px -2075px;
              }
            }
          }
          .bili-icon {
            @include wh(16px, 16px);
            margin-right: 10px;
            vertical-align: top;
            &.b-icon-p-account {
              background-position: -472px -407px;
            }
            &.b-icon-p-member {
              background-position: -536px -1046px;
            }
            &.b-icon-p-wallet {
              background-position: -472px -472px;
            }
            &.b-icon-p-live {
              background-position: -473px -855px;
            }
            &.b-icon-p-ticket {
              @include wh(18px, 15px);
              background-position: -471px -2075px;
            }
          }
        }
      }
    }
    .member-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      @include wh(100%, 30px);
      line-height: 30px;
      background-color: #f4f5f7;
      border-radius: 0 0 4px 4px;
      .logout {
        float: right;
        padding-right: 20px;
        color: $black;
      }
    }
  }
  //大会员开始
  &.vip-m {
    width: 260px;
    margin-left: -107px;
    position: absolute;
    border-radius: 0 0 4px 4px;
    background-color: $white;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    border: 1px solid #e5e9ef;
    text-align: left;
    z-index: 7000;
  }
  .bubble-traditional {
    padding: 14px;
    .recommand {
      .title {
        @include sc(14px, #212121);
        margin: 5px 0 12px;
        font-weight: 900;
        .more {
          float: right;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border: 1px solid $border_color;
          font-weight: 400;
          text-align: center;
          @include borderRadius(4px);
          @include wh(52px, 22px);
          @include sc(12px, #6d757a);
          line-height: 22px;
          -webkit-transition: background 0.2s;
          -o-transition: background 0.2s;
          transition: background 0.2s;
        }
      }
      .bubble-col {
        display: flex;
        margin-bottom: 7px;
        .item {
          flex: 1;
          .pic {
            display: inline-block;
          }
          .recommand-link {
            display: block;
            margin-top: 10px;
            @include sc(12px, $black);
            text-align: left;
            line-height: 18px;
            height: 36px;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            &:hover {
              color: #fb7299;
            }
          }
        }
        &.bubble-col-3 {
          img {
            @include wh(72px, 94px);
            @include borderRadius(4px);
            background: #ccc;
          }
        }
      }
    }
  }
  .b-icon {
    &.b-icon-arrow-r {
      background-position: -478px -218px;
      @include wh(6px, 12px);
      margin: -2px 0 0 5px;
    }
  }
  img {
    border: none;
    vertical-align: middle;
  }
  .i_menu_login {
    opacity: 0;
    display: none;
    background: $white;
    left: 50%;
    margin-left: -130px;
    padding-bottom: 0;
    padding-top: 50px;
    border-top: none;
    width: 320px;
    margin-left: -160px;
    padding: 12px;
    text-align: left;
    line-height: normal;
    border: 1px solid #e5e9ef;
    @include transition(0.3s);
    .tip {
      @include sc(14px, #666);
    }
    .img {
      @include wh(320px, 200px);
      margin: 12px 0;
      overflow: hidden;
      position: relative;
      background: url(../../assets/danmu_bg.png) no-repeat 50%;
      img {
        &:first-child {
          @include wh(320px, 200px);
          position: absolute;
          left: 0;
          top: 0;
          animation: one 5s linear infinite;
        }
        &:last-child {
          @include wh(320px, 200px);
          position: absolute;
          left: 320px;
          top: 0;
          animation: two 5s linear infinite;
        }
      }
    }
    .reg {
      margin-top: 8px;
      text-align: center;
      @include sc(12px, #282828);
    }
  }
}
//动态开始
.im-list {
  display: block;
  text-align: center;
  position: relative;
  line-height: 42px;
  height: 42px;
  &:hover {
    color: $blue;
    background-color: #e5e9ef;
  }
}
.im-notify {
  position: absolute;
  background-color: #fb7299;
  &.im-number {
    height: 14px;
    line-height: 15px;
    border-radius: 10px;
    padding: 1px 3px;
    @include sc(12px, $white);
    min-width: 20px;
    text-align: center;
    &.im-center {
      top: 13px;
      left: 80px;
    }
  }
}
@keyframes one {
  0% {
    left: 0;
  }

  100% {
    left: -320px;
  }
}
@keyframes two {
  0% {
    left: 320px;
  }

  100% {
    left: 0px;
  }
}
.app-header {
  .nav-menu {
    .nav-con {
      .nav-item {
        .login-btn {
          display: block;
          height: 43px;
          line-height: 43px;
          text-align: center;
          background: $blue;
          @include borderRadius(4px);
          @include sc(14px, $white);
          cursor: pointer;
        }
      }
    }
  }
}
</style>

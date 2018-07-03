<template>
    <div class="nav-menu">
        <div class="blur-bg" :style="{background:'url('+menubgsrc+')'}"></div>
        <div class="nav-mask"></div>
        <div class="bili-wrapper">
            <div class="nav-con fl">
                <ul>
                    <li class="nav-item" v-for="item in navdata" :class="item.class">
                        <a href="" class="t">
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
                    <li class="nav-item profile-info" :class="{on: signIn==true}" @mouseover="profileFadeIn" @mouseout="profileFadeOut">
                        <a class="t">
                            <div class="i-face">
                                <template v-if="signIn==true">
                                    <img v-if="navData" :src="navData.face" class="face">
                                    <img class="pendant">
                                </template>
                                <img @click="loginShow()" v-else src="../../assets/akari.jpg" class="face">
                            </div>
                        </a>
                        <div class="profile-m dd-bubble" v-if="signIn==true" v-show="profileShow">
                            <div class="header-u-info">
                                <div class="header-uname">
                                    <b class="">丨旧丶城</b><!---->
                                </div>
                                <div class="btns-profile clearfix">
                                    <div class="coin fl">
                                        <a href="#" target="_blank" title="硬币"><i class="bili-icon bi"></i><i class="bili-icon jia"></i><span class="num">616</span><span class="num-move">616.58</span><span title="" class="num-tip">登录奖励</span></a>
                                    </div>
                                    <div class="currency fl">
                                        <a href="#" target="_blank" title="B币"><i class="bili-icon"></i><span class="num">0</span></a>
                                    </div>
                                    <div class="ver phone fr verified">
                                        <a href="#" target="_blank"><i class="bili-icon"></i><span class="tips">已绑定</span></a>
                                    </div>
                                    <div class="ver email fr verified">
                                        <a href="#" target="_blank"><i class="bili-icon"></i><span class="tips">已绑定</span></a>
                                    </div>
                                    <div class="link-to-bind-mobile">
                                    </div>
                                </div>
                                <div class="grade clearfix">
                                    <span class="hd fl">等级</span><a href="#" target="_blank">
                                    <div class="bar fr">
                                        <div class="lt lv4">
                                        </div>
                                        <div class="rate" style="width: 70%;">
                                        </div>
                                        <div class="num">
                                            <div>
                                7567
                                                <span>/10800</span>
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
                                            1、发射个性弹幕（彩色、高级、顶部、底部）<br>
                                            2、参与视频互动（评论、添加tag）<br>
                                            3、投稿成为偶像
                                        </div>
                                        <a href="#" target="_blank" class="help-link">会员等级相关说明 &gt;</a>
                                    </div>
                                </div>
                            </div>
                            <div class="member-menu">
                                <ul class="clearfix">
                                    <li><a href="#" target="_blank" class="account"><i class="bili-icon b-icon-p-account"></i>个人中心
                                    </a></li>
                                    <li><a href="#" target="_blank" class="member"><i class="bili-icon b-icon-p-member"></i>投稿管理
                                    </a></li>
                                    <li><a href="#" target="_blank" class="wallet"><i class="bili-icon b-icon-p-wallet"></i>B币钱包
                                    </a></li>
                                    <li><a href="#" target="_blank" class="live"><i class="bili-icon b-icon-p-live"></i>直播中心
                                    </a></li>
                                    <li><a href="#" target="_blank" class="bml"><i class="bili-icon b-icon-p-ticket"></i>订单中心
                                    </a></li>
                                    <li><!----></li>
                                </ul>
                            </div>
                            <div class="member-bottom">
                                <a href="#" class="logout">退出</a>
                            </div>
                        </div>
                        <div class="i_menu i_menu_login" v-if="!signIn">
                            <p class="tip">
                                登录后你可以：
                            </p>
                            <div class="img">
                                <img src="../../assets/danmu.png" >
                                <img src="../../assets/danmu.png" >
                            </div>
                            <a class="login-btn" @click="loginShow()">登录</a>
                            <p class="reg">
                                首次使用？<a href="//passport.bilibili.com/register/phone.html">点我去注册</a>
                            </p>
                        </div>
                    </li>
                    <template v-if="signIn==true">
                        <li class="nav-item" @mouseover="vipFadeIn" @mouseout="vipFadeOut">
                            <a href="#" target="_blank" class="t">
                                大会员
                            </a>
                            <div class="app-header vip-m dd-bubble" v-show="vipShow">
                                <div class="bubble-traditional">
                                    <div class="recommand">
                                        <div class="title">
                                            精彩推荐
                                            <a href="#" target="_blank" class="more">更多<i class="b-icon b-icon-arrow-r"></i></a>
                                        </div>
                                        <div class="bubble-col bubble-col-1 bubble-col-3">
                                            <div class="item" v-for="item in vipRec">
                                                <a target="_blank" :href="item.url" class="pic">
                                                    <div class="lazy-img">
                                                        <img :alt="item.name" v-lazy=item.img>
                                                    </div>
                                                </a>
                                                <a target="_blank" :href="item.url" class="recommand-link">{{item.name}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item" @mouseover="messageFadeIn" @mouseout="messageFadeOut">
                            <a href="#" target="_blank" title="消息" class="t">
                                <div class="num">
                                    1
                                </div>
                                消息
                            </a>
                            <div class="im-list-box" v-show="messageShow">
                                <a class="im-list" target="_blank" href="#">
                                    回复我的
                                    <div class="im-notify im-number im-center" style="display: none">
                                        0
                                    </div>
                                </a>
                                <a class="im-list" target="_blank" href="#">
                                    @我的
                                    <div class="im-notify im-number im-center" style="display: none">
                                        0
                                    </div>
                                </a>
                                <a class="im-list" target="_blank" href="#">
                                    收到的赞
                                    <div class="im-notify im-number im-center" style="display: none">
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
                                    <div class="im-notify im-number im-center" style="display: none">
                                        0
                                    </div>
                                </a>
                            </div>
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
                        <a href="//www.bilibili.com/account/history" target="_blank" class="t">
                        历史
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            menubgsrc: require('../../assets/nav-bg.png'),
            navdata: [
                {
                    name: '主站',
                    class: 'home',
                    icon: 'bili-icon',
                    href: '/'
                },
                {
                    name: '画友',
                    class: 'hbili',
                    href: '/'
                },
                {
                    name: '游戏中心',
                    class: 'game',
                    href: '/'
                },
                {
                    name: '直播',
                    class: 'live',
                    href: '/'
                },
                {
                    name: '会员购',
                    class: 'buy',
                    href: '/'
                },
                {
                    name: 'BML',
                    href: '/'
                },
                {
                    name: '下载APP',
                    class: 'mobile',
                    icon: 'bili-icon',
                    href: '/'
                }
            ],
            profileShow: false,
            vipShow: false,
            messageShow: false
        }
    },
    computed: {
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            signIn: state => state.login.signIn,//命名空间获取state
            navData: state => state.login.navData,
            vipRec: state => state.login.vipRec
        })
    },
    methods: {
        loginShow(){
            this.$store.dispatch('loginShow',{
                user: this.user,
                password: this.password,
                signIn: sessionStorage.getItem('signIn'),
            })
        },
        profileFadeIn(){
            this.profileShow = true
        },
        profileFadeOut(){
            this.profileShow = false
        },
        vipFadeIn(){
            this.vipShow = true
        },
        vipFadeOut(){
            this.vipShow = false
        },
        messageFadeIn(){
            this.messageShow = true
        },
        messageFadeOut(){
            this.messageShow = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* app-header */
.app-header{
    position: relative;
    background: #fff;
}
.app-header .bili-wrapper {
    margin: 0 auto;
    width: 1160px;
}
.app-header .nav-menu {
    position: relative;
    z-index: 200;
    height: 42px;
    color: #222;
}
.app-header .nav-menu .blur-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center -10px;
    background-repeat: no-repeat;
    -webkit-filter: blur(4px);
    filter: blur(4px);
}
.app-header .nav-menu .nav-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0,0%,100%,.4);
    -webkit-box-shadow: rgba(0,0,0,.1) 0 1px 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
}
.app-header .nav-menu .bili-wrapper .nav-con .nav-item {
    float: left;
    text-align: center;
    line-height: 42px;
    height: 42px;
    position: relative;
    background-color: hsla(0,0%,100%,0);
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.app-header .nav-menu .bili-wrapper .nav-con .nav-item:hover {
    background-color: hsla(0,0%,100%,.3);
}
.app-header .nav-menu .bili-wrapper .nav-con .nav-item a.t {
    color: #222;
    height: 100%;
    display: block;
    padding: 0 11px;
}
.app-header .nav-menu .nav-con .nav-item .t .num {
    height: 12px;
    line-height: 12px;
    color: #fff;
    background-color: #f25d8e;
    border-radius: 10px;
    position: absolute;
    padding: 1px 2px;
    font-size: 12px;
    top: 1px;
    right: -4px;
    min-width: 16px;
    z-index: 30;
    text-align: center;
}
.app-header .nav-menu .bili-wrapper .nav-con .nav-item.home {
    margin-left: -10px;
    padding-left: 12px;
}
.app-header .nav-menu .bili-wrapper .nav-con .nav-item.home a {
    padding-left: 20px;
}
.app-header .nav-menu .bili-wrapper .nav-con .nav-item.home i {
    position: absolute;
    width: 17px;
    height: 14px;
    left: 10px;
    top: 12px;
    background-position: -919px -88px;
}
/* .nav-menu .nav-con .nav-item.mobile {
    padding: 0 10px;
} */
.app-header .nav-menu .bili-wrapper .nav-con .nav-item.mobile i {
    display: inline-block;
    vertical-align: middle;
    background-position: -1367px -1175px;
    width: 21px;
    height: 21px;
}
/*  右侧 */
.app-header .profile-info {
    width: 58px;
}
.app-header .profile-info .i-face {
    position: absolute;
    z-index: 20;
    width: 36px;
    height: 36px;
    left: 11px;
    top: 0;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}
.app-header .profile-info .i-face .face {
    border: 0 solid #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.app-header .profile-info .i-face .pendant {
    position: absolute;
    width: 84px;
    height: 84px;
    left: -11px;
    bottom: -3px;
    visibility: hidden;
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
}
.app-header .profile-info.on:hover .i-face {
    left: -4px;
    top: 15px;
    height: 64px;
    width: 64px;
}
.app-header .profile-info.on:hover .i-face .face{
    border: 2px solid #fff;
}
/*  个人信息开始 */
.app-header .profile-m {
    left: 50%;
    margin-left: -130px;
    width: 260px;
    padding: 50px 0 0;
    top: 42px;
    background: #fff;
    -webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
    border-radius: 0 0 4px 4px;
    line-height: normal;
}
.app-header .nav-menu .dd-bubble {
    position: absolute;
    z-index: 1;
}
.app-header .profile-m .header-u-info a {
    color: #222;
}
.app-header .profile-m .header-uname {
    padding-bottom: 15px;
}
.app-header .profile-m .header-uname b {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}
.app-header .profile-m .btns-profile {
    position: relative;
    margin: 0 20px;
    height: 18px;
}
.app-header .profile-m .btns-profile .bili-icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    background-repeat: no-repeat;
}
.app-header .profile-m .btns-profile .coin .bi {
    background-position: -343px -471px;
    margin-right: 2px;
    position: relative;
    z-index: 2;
}
.app-header .profile-m .btns-profile .coin .jia {
    z-index: 1;
    left: 0;
    position: absolute;
    top: 0;
    width: 18px;
    height: 18px;
    background-position: -279px -1495px;
}
.app-header .profile-m .btns-profile .num {
    vertical-align: middle;
    display: inline-block;
    -webkit-transition: 2s;
    -o-transition: 2s;
    transition: 2s;
}
.app-header .profile-m .btns-profile .num-move {
    position: absolute;
    -webkit-transition: 2s;
    -o-transition: 2s;
    transition: 2s;
    left: 23px;
    top: -10px;
    opacity: 0;
    line-height: 14px;
}
.app-header .profile-m .btns-profile .num-tip {
    color: #2cc06f;
    position: absolute;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    left: 60px;
    top: -18px;
    opacity: 0;
    background: #fff;
    padding: 3px 5px;
    z-index: 10;
}
.app-header .profile-m .btns-profile .currency {
    position: absolute;
    left: 58px;
    z-index: 0;
}
.app-header .profile-m .btns-profile .currency .bili-icon {
    background-position: -407px -471px;
    margin: 0 5px 0 8px;
}
.app-header .profile-m .btns-profile .ver {
    position: relative;
}
.app-header .profile-m .btns-profile .ver a {
    display: block;
}
.app-header .profile-m .btns-profile .phone.verified .bili-icon {
    background-position: -343px -599px;
}
.app-header .profile-m .btns-profile .ver .tips {
    display: none;
    padding: 0 6px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    position: absolute;
    right: 30px;
    top: -2px;
    white-space: nowrap;
    background-color: #fff;
    color: #222;
    z-index: 10;
}
.app-header .profile-m .btns-profile .email {
    margin-right: 10px;
}
.app-header .profile-m .btns-profile .email.verified .bili-icon {
    background-position: -343px -534px;
}
.app-header .profile-m .grade {
    position: relative;
    margin: 24px 0 30px;
    height: 16px;
    padding: 0 20px;
}
.app-header .profile-m .grade .bar {
    position: relative;
    top: 6px;
    width: 170px;
    height: 8px;
    background: #eee;
}
.app-header .profile-m .grade .bar .lt {
    width: 18px;
    height: 18px;
    border-radius: 9px;
    position: absolute;
    left: -17px;
    top: -6px;
    color: #fff;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    background-color: #f3cb85;
    background-image: url(../../assets/level.png);
    background-repeat: no-repeat;
}
.app-header .profile-m .grade .bar .lt.lv4 {
    background-position: -153px -152px;
}
.app-header .profile-m .grade .bar .rate {
    height: 8px;
    background-color: #f3cb85;
    width: 20%;
}
.app-header .profile-m .grade .bar .num {
    position: absolute;
    right: 0;
    bottom: -18px;
}
.app-header .profile-m .grade .bar .num span {
    color: #ccc;
}
.app-header .profile-m .grade .desc-tips {
    display: none;
    padding: 15px 15px 15px 20px;
    position: absolute;
    top: -16px;
    left: 260px;
    border-radius: 2px;
    background-color: #fff;
    z-index: 100;
    width: 220px;
    line-height: 24px;
    word-break: break-word;
    word-wrap: break-word;
    min-height: 65px;
    color: #676b73;
    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,.25);
    box-shadow: 0 0 2px 0 rgba(0,0,0,.25);
    text-align: left;
}
.app-header .profile-m .grade:hover .desc-tips {
    display: block;
}
.app-header .profile-m .grade .desc-tips .arrow-left {
    position: absolute;
    display: inline-block;
    top: 16px;
    left: -10px;
    width: 10px;
    height: 20px;
    background: transparent url(../../assets/level.png) -182px -224px no-repeat;
}
.app-header .profile-m .grade .desc-tips .lv-row {
    margin-bottom: 10px;
}
.app-header .profile-m .grade .desc-tips .lv-row strong {
    font-size: 14px;
    color: #222;
    padding: 0 3px;
}
.app-header .profile-m .grade .desc-tips .help-link {
    margin-top: 15px;
    float: right;
    color: #00a1d6;
}
.app-header .profile-m .member-menu {
    border-top: 1px solid #e5e9ef;
    padding: 10px 20px 40px;
    overflow: hidden;
}
.app-header .profile-m .member-menu ul {
    width: 240px;
    clear: both;
    zoom: 1;
}
.app-header .profile-m .member-menu li {
    float: left;
    width: 100px;
    margin-right: 20px;
    position: relative;
}
.app-header .profile-m .member-menu li a {
    white-space: nowrap;
    color: #222;
    text-align: left;
    margin: 0 auto;
    display: block;
    padding: 5px 0;
    line-height: 16px;
}
.app-header .profile-m .member-menu li a:hover {
    color: #00a1d6;
}
.app-header .profile-m .member-menu li a .bili-icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    vertical-align: top;
}
.app-header .profile-m .member-menu li a .bili-icon.b-icon-p-account {
    background-position: -472px -407px;
}
.app-header .profile-m .member-menu li a:hover .bili-icon.b-icon-p-account {
    background-position: -536px -407px;
}
.app-header .profile-m .member-menu li a .bili-icon.b-icon-p-member {
    background-position: -536px -1046px;
}
.app-header .profile-m .member-menu li a:hover .bili-icon.b-icon-p-member {
    background-position: -601px -1046px;
}
.app-header .profile-m .member-menu li a .bili-icon.b-icon-p-wallet {
    background-position: -472px -472px;
}
.app-header .profile-m .member-menu li a:hover .bili-icon.b-icon-p-wallet {
    background-position: -536px -472px;
}
.app-header .profile-m .member-menu li a .bili-icon.b-icon-p-live {
    background-position: -473px -855px;
}
.app-header .profile-m .member-menu li a:hover .bili-icon.b-icon-p-live {
    background-position: -537px -855px;
}
.app-header .profile-m .member-menu li a .bili-icon.b-icon-p-ticket {
    width: 18px;
    height: 15px;
    background-position: -471px -2075px;
}
.app-header .profile-m .member-menu li a:hover .bili-icon.b-icon-p-ticket {
    background-position: -535px -2075px;
}
.app-header .profile-m .member-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #f4f5f7;
    border-radius: 0 0 4px 4px;
}
.app-header .profile-m .member-bottom .logout {
    float: right;
    padding-right: 20px;
    color: #222;
}
/*  个人信息结束 */
/*  大会员开始 */
.app-header.vip-m {
    width: 260px;
    margin-left: -107px;
    position: absolute;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    -webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
    border: 1px solid #e5e9ef;
    text-align: left;
    font-size: 0;
    z-index: 7000;
}
.app-header .bubble-traditional {
    padding: 14px;
}
.app-header .bubble-traditional .recommand .title {
    color: #212121;
    font-size: 14px;
    margin: 5px 0 12px;
    font-weight: 900;
}
.app-header .bubble-traditional .recommand .title .more {
    float: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #ccd0d7;
    font-weight: 400;
    text-align: center;
    border-radius: 4px;
    width: 52px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #6d757a;
    -webkit-transition: background .2s;
    -o-transition: background .2s;
    transition: background .2s;
}
.app-header .b-icon.b-icon-arrow-r {
    background-position: -478px -218px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0 5px;
}
.app-header .bubble-traditional .recommand .bubble-col{
    display: flex;
    margin-bottom: 7px;
}
.app-header .bubble-traditional .recommand .bubble-col .item {
    flex: 1;
}
.app-header .bubble-traditional .recommand .bubble-col .item .pic {
    display: inline-block;
}
.app-header .bubble-traditional .recommand .bubble-col.bubble-col-3 img {
    width: 72px;
    height: 94px;
    border-radius: 4px;
    background: #ccc;
}
.app-header .bubble-traditional .recommand .bubble-col .item .recommand-link {
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: #222;
    text-align: left;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
/*  大会员结束 */
/* 动态开始 */
.app-header .nav-menu .nav-con .nav-item .im-list-box {
    width: 110px;
    position: absolute;
    top: 100%;
    left: calc(50% - 55px);
    background: #fff;
    box-shadow: rgba(0,0,0,0.16) 0px 2px 4px;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    transition: all 300ms;
}
.im-list {
    display: block;
    text-align: center;
    position: relative;
    line-height: 42px;
    height: 42px;
}
.im-notify {
    position: absolute;
    background-color: #fb7299;
}
.im-notify.im-number {
    height: 14px;
    line-height: 15px;
    border-radius: 10px;
    padding: 1px 3px;
    font-size: 12px;
    min-width: 20px;
    text-align: center;
    color: #fff;
}
.im-notify.im-number.im-center {
    top: 13px;
    left: 80px;
}
/* 动态结束 */
.app-header img {
    border: none;
    vertical-align: middle;
}
/* .app-header .nav-menu .nav-con .nav-item .t {
    color: #222;
    height: 100%;
    display: block;
    padding: 0 10px;
} */
.app-header .i_menu_login {
    opacity: 0;
    display: none;
    background: #fff;
    left: 50%;
    margin-left: -130px;
    width: 260px;
    padding-bottom: 0;
    padding-top: 50px;
    border-top: none;
    width: 320px;
    margin-left: -160px;
    padding: 12px;
    text-align: left;
    line-height: normal;
    border: 1px solid #e5e9ef;
    transition: all .3s;
}
.app-header .profile-info:hover .i_menu_login {
    display: block;
    opacity: 1;
    transition: all .3s;
}
.app-header .i_menu_login .tip {
    font-size: 14px;
    color: #666;
}
.app-header .i_menu_login .img {
    width: 320px;
    height: 200px;
    margin: 12px 0;
    overflow: hidden;
    position: relative;
    background: url(../../assets/danmu_bg.png) no-repeat 50%;
}
.app-header .i_menu_login .img img:first-child{
    width: 320px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    animation: one 5s linear infinite;
}
.app-header .i_menu_login .img img:last-child{
    width: 320px;
    height: 200px;
    position: absolute;
    left: 320px;
    top: 0;
    animation: two 5s linear infinite;
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
.app-header .nav-menu .nav-con .nav-item .login-btn {
    display: block;
    height: 43px;
    line-height: 43px;
    text-align: center;
    background: #00a1d6;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
}
.app-header .i_menu_login .reg {
    margin-top: 8px;
    text-align: center;
    font-size: 12px;
    color: #282828;
}
.app-header .nav-menu .nav-con .nav-item .reg a {
    display: initial;
    padding: 0;
    color: #00a1d6;
}
.app-header .nav-menu .up-load {
    position: relative;
    width: 58px;
    height: 42px;
}
.app-header .nav-menu .up-load .u-link {
    position: relative;
    display: block;
    width: 100%;
    height: 48px;
    line-height: 42px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    z-index: 0;
}
.app-header .nav-menu .up-load .u-link:after{
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: #DF5584;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: -1;
}
</style>

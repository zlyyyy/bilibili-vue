<template>
  <div id="app" class="app">
        <app-header></app-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <div class="go-top-m" v-show="gotop" @click="goTop()">
            <div title="返回顶部" class="go-top icon">
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './components/header'
import AppFooter from './components/footer'

export default {
    components: {
        AppHeader,
        AppFooter
    },
    data () {
        return {
            gotop: false,
            step: 100
        }
    },
    methods: {
        goTop(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    },
    created() {
        let vm = this
        window.onscroll=function(){
                if (document.documentElement.scrollTop>60) {
                    vm.gotop=true;
                }else {
                    vm.gotop=false;
                }
            }
    },
}
</script>

<style>
/* reset */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  /* -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; */
  color: #333;
}
body { font-size: 62.5%; line-height: 1; font-family: Arial, Tahoma, sans-serif; }
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong { font-weight: bold; }
table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }
p { font-size: 1.2em; line-height: 1.0em; color: #333; }
a{
	text-decoration: none;
	-webkit-transition: background 0.2s, color 0.2s;
    	transition: background 0.2s, color 0.2s;
    }
a:hover {
    outline: 0;
    color: #00a1d6!important;
    text-decoration: none;
    cursor: pointer;
}
button{outline:none;}
button,input,select,textarea{
	font-family:inherit;
}
input{
	outline: none;
	font-family: inherit;
}
img {
    display: block;
    margin: 0 auto;
    border: none;
    /* vertical-align: middle; */
}
.fl{
    float: left;
}
.fr{
    float: right;
}
body{
	/* background: #f3f3f3; */
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    padding-bottom: 242px;
	font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
}
.bili-icon, .icon {
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
.nav-menu .nav-con .nav-item {
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
.nav-menu .nav-con .nav-item:hover {
    background-color: hsla(0,0%,100%,.3);
}
.nav-menu .nav-con .nav-item a {
    color: #222;
    height: 100%;
    display: block;
    padding: 0 11px;
}
.nav-menu .nav-con .nav-item.home {
    margin-left: -10px;
    padding-left: 12px;
}
.nav-menu .nav-con .nav-item.home a {
    padding-left: 20px;
}
.nav-menu .nav-con .nav-item.home i {
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
.nav-menu .nav-con .nav-item.mobile i {
    display: inline-block;
    vertical-align: middle;
    background-position: -1367px -1175px;
    width: 21px;
    height: 21px;
}
.app-header .head-banner {
    position: relative;
    z-index: 199;
    height: 170px;
    margin-top: -42px;
    background: #eee;
    background-position: center -10px;
    background-repeat: no-repeat;
}
.app-header .head-banner .head-content {
    position: relative;
    height: 170px;
}
.app-header .head-banner .banner-link {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}
.app-header .search {
    position: absolute;
    bottom: 20px;
    right: 0;
    height: 32px;
    padding: 2px 2px 2px 72px;
    background-color: #e5e9ef;
    background-color: rgba(0,0,0,.12);
    border-radius: 6px;
    font-size: 12px;
    z-index: 10;
}
.app-header .search .searchform {
    background-color: #fff;
    background-color: hsla(0,0%,100%,.88);
    display: block;
    height: 32px;
    border-radius: 4px;
    -webkit-transition: background-color .2s;
    -o-transition: .2s background-color;
    transition: background-color .2s;
}
.app-header .search .search-keyword {
    float: left;
    width: 200px;
    color: #222;
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
.app-header .search button.search-submit {
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
}
.app-header .search button.search-submit:hover {
    background-position: -718px -720px;
}
.app-header .bilibili-suggest {
    position: relative;
    border: 1px solid #e5e9ef;
    margin-top: 2px;
    background: #fff;
    z-index: 99999;
    border-radius: 4px;
    -webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
    padding-bottom: 5px;
    font-size: 12px;
}
.app-header .bilibili-suggest .b-line {
    border-top: 1px solid #e5e9ef;
    position: relative;
    height: 10px;
    margin: 10px 10px 0;
}
.app-header .bilibili-suggest .b-line p {
    margin-top: -10px;
    text-align: center;
}
.app-header .bilibili-suggest .b-line span {
    display: inline-block;
    padding: 0 10px;
    height: 18px;
    text-align: center;
    cursor: pointer;
    color: #99a2aa;
    background: #fff;
}
.app-header .bilibili-suggest .suggest-item {
    padding: 6px 10px;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-all;
    display: block;
    color: #222;
    position: relative;
}
.app-header .bilibili-suggest .suggest-item a {
    color: #222;
    display: block;
    max-width: 200px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.app-header .bilibili-suggest .cancel {
    position: absolute;
    right: 10px;
    top: 0;
    width: 38px;
    height: 28px;
    background: url(assets/icons.png) -461px -530px no-repeat;
}
.app-header .search .link-ranking {
    position: absolute;
    left: 2px;
    top: 2px;
    height: 32px;
    line-height: 32px;
    background-color: #fff;
    background-color: hsla(0,0%,100%,.88);
    border-radius: 4px;
    width: 68px;
    -webkit-transition: background-color .2s;
    -o-transition: .2s background-color;
    transition: background-color .2s;
}
.app-header .search .link-ranking span {
    padding-left: 26px;
    color: #f25d8e;
    display: inline-block;
    background: url(assets/icons.png) -659px -655px no-repeat;
}
.app-header .head-banner .head-content .head-logo {
    position: absolute;
    width: 220px;
    height: 105px;
    left: 24px;
    top: 55px;
    background: transparent no-repeat 0;
    z-index: 10;
}
.primary-menu{
    position: relative;
    width: 1160px;
    height: 50px;
    margin: 0 auto;
    padding: 8px 0 0;
    margin-bottom: 4px;
    z-index: 99;
    border-bottom: 1px solid #fff;
}
.primary-menu .nav-menu {
    display: inline-block;
    position: relative;
    z-index: 200;
    height: 42px;
    color: #222;
}
.primary-menu .nav-menu>li {
    float: left;
    display: block;
    position: relative;
    margin-right:11px;
}
.primary-menu .nav-menu>li>a:not(.side-link) {
    width: 48px;
    text-align: center;
    display: block;
    height: 48px;
}
.primary-menu .nav-menu>li:hover .sub-nav{
    display: block;
}
.primary-menu .nav-menu>li>a:not(.side-link) .num-wrap {
    position: absolute;
    top: 8px;
    left: 0;
    height: 14px;
    width: 100%;
    text-align: center;
}
.primary-menu .nav-menu>li>a:not(.side-link) .num-wrap span {
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
    -webkit-transform: scale(.85);
    -ms-transform: scale(.85);
    transform: scale(.85);
    color: #fff;
    background-color: #ffafc9;
    border-radius: 3px;
    height: 14px;
    line-height: 14px;
    max-width: 34px;
    padding: 1px 3px;
    font-family: sans-serif;
}
.primary-menu .nav-menu>li>a:not(.side-link) .nav-name {
    display: inline-block;
    vertical-align: middle;
    color: #222;
    font-size: 12px;
    height: 40px;
    padding-top: 10px;
    line-height: 50px;
}
.primary-menu .nav-menu li.home {
    margin-right: 9px;
}
.primary-menu .nav-menu li.home>a {
    width: auto;
    background: url(assets/icons.png) -660px -1170px no-repeat;
}
.primary-menu .nav-menu li.home>a .nav-name {
    position: relative;
    top: 15px;
    line-height: 20px;
}
.primary-menu .nav-menu .sub-nav {
    display: none;
    position: absolute;
    left: 0;
    overflow: hidden;
    top: 44px;
    background: #fff;
    border: 1px solid\9;
    border-top: 0;
    -webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
    border-radius: 0 0 4px 4px;
    z-index: 2;
}
.primary-menu .nav-menu .sub-nav li {
    font-size: 12px;
    line-height: 20px;
    min-width: 120px;
    height: auto;
    text-align: left;
}
.primary-menu .nav-menu .sub-nav li, .primary-menu .nav-menu .sub-nav li>a {
    position: relative;
    overflow: hidden;
    -webkit-transition: all .2s;
    -o-transition: .2s all;
    transition: all .2s;
}
.primary-menu .nav-menu .sub-nav li>a {
    display: block;
    padding: 5px 15px 5px 25px;
    margin-right: 10px;
    background: url(assets/icons2.png) no-repeat 12px -1613px;
    white-space: nowrap;
    left: 0;
    color: #222;
}
.primary-menu .nav-menu .sub-nav li>a span {
    position: relative;
}
.primary-menu .nav-menu .sub-nav li:hover {
    background-color: #e5e9ef;
}
.primary-menu .nav-menu .sub-nav li:hover>a {
    left: 5px;
}
.primary-menu .nav-menu .sub-nav li>a span:after {
    content: "";
    background: url(assets/icons2.png) no-repeat 0 -1581px;
    width: 15px;
    height: 18px;
    display: block;
    position: absolute;
    right: -100px;
    top: -3px;
    -webkit-transition: all .2s;
    -o-transition: .2s all;
    transition: all .2s;
    opacity: 0;
}
.primary-menu .nav-menu .sub-nav:not(.square-wrap) li:hover>a span:after {
    right: -21px;
    opacity: 1;
}
.primary-menu .nav-menu .side-nav {
    margin: 0 6px;
    width: 40px;
    text-align: center;
}
.primary-menu .nav-menu .side-nav .side-link {
    display: inline-block;
    position: relative;
    overflow: hidden;
    zoom: 1;
}
.primary-menu .nav-menu .side-nav .side-link:hover span {
	color: #00a1d6
}
.primary-menu .nav-menu .side-nav .side-link i {
    display: block;
    width: 18px;
    height: 18px;
    margin: 3px auto 2px;
    background: url(assets/icons.png) no-repeat;
}
.primary-menu .nav-menu .side-nav .side-link i {
	display: block;
	width: 18px;
	height: 18px;
    margin: 5px auto 6px;
	background: url(assets/icons.png) no-repeat
}
.primary-menu .nav-menu .side-nav .side-link i.square {
	background-position: -87px -2006px
}
.primary-menu .nav-menu .side-nav .side-link i.live {
	background-position: -87px -1878px
}
.primary-menu .nav-menu .side-nav .side-link i.blackroom {
	background-position: -87px -1942px
}

.primary-menu .nav-menu .side-nav .side-link i.zhuanlan {
	background-position: -87px -1814px
}

.primary-menu .nav-menu .side-nav .side-link span {
	display: block;
	color: #222;
	margin: 0;
	font-size: 12px
}
.primary-menu .nav-menu .side-nav .square-wrap {
	padding-top: 20px;
	padding-bottom: 20px;
	white-space: nowrap;
	width: 387px;
	height: 188px
}
.primary-menu .nav-menu .side-nav .square-wrap ul {
	width: 107px;
	margin-top: -6px
}
.primary-menu .nav-menu .side-nav .square-wrap ul>li {
	min-width: 107px;
	margin-top: 8px
}
.primary-menu .nav-menu .side-nav .square-wrap ul>li:first-child {
	margin-top: 0
}
.primary-menu .nav-menu .side-nav .square-wrap ul>li a {
	background: none;
	padding: 2px 10px 2px 18px
}
.primary-menu .nav-menu .side-nav .square-wrap .square-field {
	position: absolute;
	top: 20px;
	right: 0;
	display: block;
	width: 240px;
	height: 188px;
	padding: 0 20px 0 19px;
	border-left: 1px solid #e5e9ef
}
.primary-menu .nav-menu .side-nav .square-wrap .square-field>a {
	margin-top: 20px
}
.primary-menu .nav-menu .side-nav .square-wrap .square-field>a:first-child {
	margin-top: 0
}
.primary-menu .nav-menu .side-nav .square-wrap .square-field a {
	color: #222;
	line-height: normal;
	display: block
}
.primary-menu .nav-menu .side-nav .square-wrap .square-field img {
	width: 240px;
	height: 84px;
	border-radius: 4px
}
.primary-menu .nav-menu .side-nav .square-wrap .icon-prim {
	width: 16px;
	height: 13px;
	margin-right: 4px;
	margin-top: 4px;
	vertical-align: top;
	display: inline-block;
	background-image: url(assets/icons.png)
}
.primary-menu .nav-menu .side-nav .square-wrap .icon-activity {
	background-position: -280px -1179px
}
.primary-menu .nav-menu .side-nav .square-wrap .icon-game {
	background-position: -279px -1241px
}
.primary-menu .nav-menu .side-nav .square-wrap .icon-news {
	background-position: -344px -1178px
}
.primary-menu .nav-menu .side-nav .square-wrap .icon-hy {
	background-position: -280px -1370px
}
.primary-menu .nav-menu .side-nav .square-wrap .icon-mango {
	background-position: -280px -1433px
}
.primary-menu .nav-menu .side-nav .square-wrap .icon-vip-buy {
	display: inline-block;
	width: 16px;
	height: 13px;
	margin-top: 0;
	vertical-align: inherit;
	background-repeat: no-repeat;
	background-image: url(assets/vipbuy.png);
    background-position: 50%
}
.primary-menu .nav-menu>li .nav-live {
	width: 350px;
	padding: 10px 0
}

.primary-menu .nav-menu>li .nav-live ul {
	float: left
}

.primary-menu .nav-menu>li .nav-live ul>li {
	min-width: 100px
}

.primary-menu .nav-menu>li .nav-live .live-field {
    float: left;
	padding-left: 20px;
	width: 210px;
	height: 250px;
	border-left: 1px solid #e5e9ef;
	margin: 10px 0
}

.primary-menu .nav-menu>li .nav-live .live-field .pic {
	display: inline-block;
	margin-bottom: 20px
}
.nav-gif {
    position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    padding: 4px 0;
}
.gif-menu .random-p {
    width: 69px;
    height: 40px;
    display: inline-block;
    vertical-align: top;
    margin: 3px 0;
    overflow: hidden;
}
.gif-menu .random-p img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 3px;
}
/* app-body */
.chief-recommend-module{
    padding-bottom: 30px;
}
.app-body{
    overflow: hidden;
    margin-bottom: 40px;
}
.video-info-module {
	position: absolute;
	top: 0;
	left: 0;
	width: 320px;
	border: 1px solid #ccd0d7;
	border-radius: 4px;
	-webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
	box-shadow: 0 2px 4px rgba(0,0,0,.16);
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	z-index: 10020;
	overflow: hidden;
	background-color: #fff;
	padding: 12px
}
.video-info-module .v-title {
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
	height: 20px;
	line-height: 12px
}
.video-info-module .v-info {
	color: #99a2aa;
	padding: 4px 0 6px
}
.video-info-module .v-info span {
	display: inline-block;
	vertical-align: top;
	height: 16px;
	line-height: 12px
}
.video-info-module .v-info .name {
	white-space: nowrap;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	max-width: 150px
}
.video-info-module .v-info .line {
	display: inline-block;
	border-left: 1px solid #99a2aa;
	height: 12px;
	margin: 1px 10px 0
}
.video-info-module .v-preview {
	padding: 8px 0 12px;
	border-top: 1px solid #e5e9ef;
	height: 64px
}
.video-info-module .v-preview .lazy-img {
	width: auto;
	float: left;
	margin-right: 8px;
	margin-top: 4px;
	height: auto;
	border-radius: 4px;
	overflow: hidden;
	width: 96px;
	height: 60px
}
.video-info-module .v-preview .txt {
	height: 60px;
	overflow: hidden;
	line-height: 21px;
	word-wrap: break-word;
	word-break: break-all;
	color: #99a2aa
}
.video-info-module .v-data {
	border-top: 1px solid #e5e9ef;
	padding-top: 10px
}
.video-info-module .v-data span {
	white-space: nowrap;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	display: inline-block;
	width: 70px;
	color: #99a2aa;
	line-height: 12px
}
.video-info-module .v-data span .icon {
	margin-right: 4px;
	vertical-align: top;
	display: inline-block;
	width: 12px;
	height: 12px
}
.video-info-module .v-data .play .icon {
	background-position: -282px -90px
}
.video-info-module .v-data .danmu .icon {
	background-position: -282px -218px
}
.video-info-module .v-data .star .icon {
	background-position: -282px -346px
}
.video-info-module .v-data .coin .icon {
	background-position: -282px -410px
}
/*  推广popularize */
.popularize-module {
	overflow: hidden;
    padding-bottom: 15px;
}
.bili-wrapper .l-con {
	float: left;
	width: 900px
}
.popularize-module .headline {
	padding: 10px 0 15px;
    height: 30px;
}
.popularize-module .headline .icon_t {
	width: 40px;
	height: 40px;
	margin-right: 10px;
	vertical-align: middle;
	float: left;
	margin-top: -10px
}
.popularize-module .headline .icon_t.icon-promote {
	background-position: -141px -75px
}
.popularize-module .headline .name {
	font-size: 24px!important;
	line-height: 24px;
	font-weight: 400;
	margin-right: 20px;
	float: left
}
.popularize-module .storey-box {
	height: 168px;
	overflow: hidden;
}
.popularize-module .storey-box .spread-module {
	float: left;
	margin: 0 20px 20px 0
}
.spread-module {
	position: relative;
	width: 160px;
	height: 148px;
	font-size: 12px;
	overflow: hidden
}
.spread-module a:hover .t {
	color: #00a1d6
}
.spread-module .pic {
	position: relative;
	width: 160px;
	height: 100px;
	display: block;
	overflow: hidden;
	text-align: center;
	border-radius: 4px
}
.spread-module .pic img {
	margin: 0 auto;
	outline: 0
}
.cover-preview-module {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: opacity .3s;
    -o-transition: opacity .3s;
    transition: opacity .3s;
}
.cover-preview-module .cover {
    position: absolute;
    left: 0;
    top: 7px;
    height: 98px;
    width: 100%;
    margin-top: 2px;
}
.cover-preview-module .progress-bar {
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
}
.cover-preview-module .progress-bar span {
    display: block;
    background: #fff;
    height: 2px;
}
.spread-module .pic .mask-video {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    -webkit-transition: opacity .3s;
    -o-transition: opacity .3s;
    transition: opacity .3s;
}
.danmu-module {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    pointer-events: none;
}
.danmu-module .dm {
    position: absolute;
    color: #fff;
    left: 100%;
    top: 8px;
    white-space: pre;
    text-shadow: 1px 1px 2px #001;
}
.danmu-module .dm.row2 {
    top: 25px;
}
.spread-module .pic .gg-pic {
	position: absolute;
	right: 0;
	top: 0
}
.spread-module .pic .dur {
	opacity: 0;
	position: absolute;
	bottom: 2px;
	left: 6px;
	color: #fff;
	height: 12px;
	line-height: 12px;
	padding: 0 5px 1px 0;
	-webkit-transition: all .3s;
	-o-transition: all .3s;
	transition: all .3s
}
.spread-module .pic .promote {
	overflow: hidden;
	position: absolute;
	bottom: 0;
	padding: 0 5px;
	border-radius: 0 5px 0 0;
	color: #fff;
	left: 0;
	height: 20px;
	background-color: rgba(0,0,0,.4);
	line-height: 20px
}
.spread-module .pic .medal {
	position: absolute;
	left: 0;
	top: 0;
	width: 40px;
	height: 24px;
	pointer-events: none
}
.spread-module .pic .medal.golden {
	background-position: -849px -148px
}
.spread-module .pic .medal.silvery {
	background-position: -849px -212px
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
.spread-module .pic .w-later {
	display: none
}
.spread-module .pic:hover .w-later {
	display: block
}
.spread-module .t {
	padding-top: 8px;
	height: 40px;
	line-height: 20px;
	-webkit-transition: all .2s linear;
	-o-transition: all .2s linear;
	transition: all .2s linear;
	color: #222;
	word-wrap: break-word;
	word-break: break-all;
	overflow: hidden;
	text-align: left;
	font-size: 12px;
}
.spread-module .num {
	position: absolute;
	width: 100%;
	bottom: 0;
	height: 20px;
	line-height: 20px;
	color: #99a2aa;
	background-color: #fff;
	-webkit-transition: all .3s;
	-o-transition: all .3s;
	transition: all .3s;
	font-size: 0
}
.spread-module .num i {
	display: inline-block;
	width: 12px;
	height: 12px;
	vertical-align: top;
	margin-right: 5px
}
.spread-module .num span {
	line-height: 12px;
	height: 14px;
	display: inline-block;
	width: 50%;
	overflow: hidden;
	font-size: 12px;
	vertical-align: bottom
}
.spread-module .num .play .icon {
	background-position: -282px -90px
}
.spread-module .num .danmu .icon {
	background-position: -282px -218px
}
.spread-module:hover .dur {
	opacity: 1
}
.spread-module:hover .num {
	bottom: -20px
}
.spread-module:hover .mask-video {
	opacity: 1
}
.bili-wrapper .r-con {
    width: 260px;
    float: right;
}
.popularize-module .online {
    position: relative;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    border-radius: 4px;
    text-align: center;
    background: #e5e9ef;
    white-space: nowrap;
}
.popularize-module .online a {
    color: #6d757a;
}
.popularize-module .online a:hover {
    color: #00a1d6;
}
.popularize-module .online em {
    display: inline-block;
    border-left: 1px solid #b8c0cc;
    height: 10px;
    line-height: 10px;
    margin: 12px 15px 0;
    vertical-align: top;
}
.popularize-module .adpos {
    margin-top: 10px;
    border-radius: 4px;
    overflow: hidden;
    width: 260px;
    height: 150px;
    position: relative;
}
.popularize-module .adpos a {
    display: block;
}
.popularize-module .adpos .gg-pic {
    position: absolute;
    bottom: 2px;
    left: 2px;
}
/*  返回顶部 */
.go-top-m {
    bottom: 50px;
    width: 48px;
    position: fixed;
    left: 50%;
    margin-left: 590px;
    -webkit-transition: top .3s;
    -o-transition: top .3s;
    transition: top .3s;
    z-index: 999;
}
.go-top-m .go-top {
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
/* app-footer */
.app-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 60px 0 10px 0;
    text-align: center;
    font-size: 12px;
    background-color: #f6f9fa;
}
.app-footer a {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    color: #222;
}
.app-footer a:hover {
    color: #00a1d6;
}
.app-footer .footer-cnt {
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
}
.app-footer .boston-postcards {
    list-style: none;
    margin: 0 auto;
    display: flex;
    margin-bottom: 30px;
}
.app-footer .boston-postcards li {
    flex: 1;
    text-align: left;
    list-style: none;
    height: 112px;
    line-height: 1;
    border-left: solid 1px #e5e9ef;
    font-size: 14px;
    padding: 0 0 0 25px;
}
.app-footer .boston-postcards li:first-child {
    border-left: 0;
    padding: 0 20px 0 0;
}
.app-footer .boston-postcards li:last-child {
    padding: 0 20px 0 25px;
}
.app-footer .boston-postcards li .tips {
    margin-bottom: 22px;
    color: #99a2aa;
}
.app-footer .boston-postcards li .cards {
    float: left;
    width: 33%;
    position: relative;
    margin-bottom: 16px;
}
.app-footer .block {
    position: relative;
    width: 100%;
}
.app-footer .block div {
    position: relative;
    width: 82px;
    height: 80px;
    float: left;
}
.app-footer .block .pic {
    position: relative;
    margin-left: 11px;
    width: 60px;
    height: 60px;
}
.app-footer .block .phone .pic {
    background: url(assets/icons.png) no-repeat -1024px -194px;
}
.app-footer .block .weibo .pic {
    background: url(assets/icons.png) no-repeat -1024px -322px;
}
.app-footer .block .weixin .pic {
    color: #222;
    background: url(assets/icons.png) no-repeat -1024px -66px;
}
.app-footer .block em {
    position: absolute;
    width: 82px;
    line-height: 14px;
    float: left;
    bottom: 0;
    left: 0;
    text-align: center;
    font-weight: normal;
}
.app-footer .block .qrcode-box-wrp {
    width: 130px;
    height: 130px;
    background: #fff;
    margin-top: -146px;
    right: -23px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: .2s;
    z-index: 100000;
}
.app-footer .block .qrcode-box {
    width: 128px;
    height: 128px;
    border: 1px solid #e5e9ef;
}
.app-footer .copyright p{
    line-height: 30px;
    color: #99a2aa;
}

</style>

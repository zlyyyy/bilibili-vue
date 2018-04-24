<template>
    <div class="app-header">
        <div class="nav-menu">
            <div class="blur-bg" :style="{background:'url('+menubgsrc+')'}"></div>
            <div class="nav-mask"></div>
            <div class="bili-wrapper">
                <div class="nav-con fl">
                    <ul>
                        <li class="nav-item" v-for="item in navdata" :class="item.class">
                            <a href="">
                                <i :class="item.icon" v-if="item.icon"></i>
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav-con fr"></div>
            </div>
        </div>
        <div class="head-banner" :style="{background:'url('+headbannersrc+')'}">
            <div class="bili-wrapper head-content">
                <div class="search">
                    <div class="searchform">
                        <input type="text" autocomplete="off" accesskey="s" x-webkit-speech="" x-webkit-grammar="builtin:translate" placeholder="2017有哪些好看的日本电影？" value="" class="search-keyword">
                        <button type="submit" class="search-submit"></button>
                    </div><!---->
                    <ul class="bilibili-suggest" v-show="suggestShow">
                        <li class="kw">
                            <div class="b-line">
                                <p><span>历史搜索</span></p>
                            </div>
                        </li>
                        <li class="suggest-item">
                            <a href="//search.bilibili.com/all?keyword=quanzhi&amp;from_source=banner_search" target="_blank">quanzhi</a>
                            <div class="cancel"></div>
                        </li>
                    </ul>
                    <a href="//www.bilibili.com/ranking" target="_blank" class="link-ranking">
                        <span>排行榜</span>
                    </a>
                </div>
                <a class="head-logo" :style="{background:'url('+headlogo+')'}"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menubgsrc: require('../assets/nav-bg.png'),
            headbannersrc: require('../assets/nav-bg.png'),
            headlogo: require('../assets/head-logo.png'),
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
            suggestShow:false
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header{
    position: relative;
    background: #fff;
}
.app-header .bili-wrapper {
    margin: 0 auto;
    width: 1160px;
}
.app-header .bili-icon {
    display: inline-block;
    background: url(../assets/icons.png);
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
    padding: 0 12px;
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
    background: url(../assets/icons.png) -653px -720px;
    margin: 0;
    padding: 0;
    border: 0;
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
    background: url(../assets/icons.png) -461px -530px no-repeat;
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
    background: url(../assets/icons.png) -659px -655px no-repeat;
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
</style>

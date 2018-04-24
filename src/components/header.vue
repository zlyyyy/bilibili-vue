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
        <div class="head-banner" :style="{background:'url('+menubgsrc+')'}"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        menubgsrc: require('../assets/nav-bg.png'),
        headbannersrc: require('../assets/nav-bg.png'),
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
        ]
    }
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
</style>

<template>
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
            <div class="up-load fr">
                <a href="//member.bilibili.com/v/video/submit.html" target="_blank" class="u-link">
                    投 稿
                </a>
            </div>
            <div class="nav-con fr">
                <ul>
                    <li class="nav-item profile-info">
                        <a href="//passport.bilibili.com/login" class="t">
                            <div class="i-face">
                                <img src="../../assets/akari.jpg" class="face">
                            </div>
                        </a>
                        <div class="i_menu i_menu_login">
                            <p class="tip">
                                登录后你可以：
                            </p>
                            <div class="img">
                                <img src="../../assets/danmu.png" >
                                <img src="../../assets/danmu.png" >
                            </div>
                            <a href="//passport.bilibili.com/login" class="login-btn">登录</a>
                            <p class="reg">
                                首次使用？<a href="//passport.bilibili.com/register/phone.html">点我去注册</a>
                            </p>
                        </div>
                    </li>
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
            navLogin: false
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

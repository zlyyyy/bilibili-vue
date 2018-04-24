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
            <div class="nav-con fr"></div>
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
            ]
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

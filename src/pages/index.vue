<template>
    <div class="app-body bili-wrapper">
        <div class="chief-recommend-module">
            <slide :slidedata="slides" :slidetimedata="slidetime"></slide>
            <!-- 轮播图  昨日 三日 一周 推荐 -->
            <recommend></recommend>
        </div>
        <!-- 推广模块 -->
        <popularize :popularizeOnline="onlineData"></popularize>
    </div>
</template>

<script>
import Slide from '../components/common/slide'
import Recommend from '../components/common/recommend'
import Popularize from '../components/common/popularize'
export default {
    created() {
        this.online()
        this.ding()
    },
    components:{
        Slide,
        Recommend,
        Popularize
    },
    data () {
        return {
            slidetime:2000,
            slides: [
                {
                    src: require('../assets/1.jpg'),
                    title: '要不要穿越回去再看一遍？',
                    href: '1'
                },
                {
                    src: require('../assets/2.jpg'),
                    title: '悄咪咪出发去玩（chi），来不来！',
                    href: '2'
                },
                {
                    src: require('../assets/3.jpg'),
                    title: '樱花妆有奖大比拼',
                    href: '3'
                },
                {
                    src: require('../assets/4.jpg'),
                    title: '魔法少女做错了什么',
                    href: '4'
                },
                {
                    src: require('../assets/5.jpg'),
                    title: '你都听过了吗？',
                    href: '5'
                },
            ],
            recdata: [],
            onlineData: [],
            mainData: []            
        }
    },
    methods: {
        online(){
            this.$axios.get('/static/online.json')
            .then((res)=>{
                this.onlineData = res.data
            }).catch((error)=>{
                console.log(error)
            })
        },
        ding(){
            this.$axios.get('/api/index/ding.json')
            .then((res)=>{
                this.mainData = res.data
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chief-recommend-module{
    padding-bottom: 40px;
}
</style>

<template>
    <div class="app-body bili-wrapper">
        <div id="chief_recommend" class="chief-recommend-module">
            <slide :slidedata="slides" :slidetimedata="slidetime"></slide>
            <!-- 轮播图  昨日 三日 一周 推荐 -->
            <keep-alive>
                <recommend></recommend>
            </keep-alive>
        </div>
        <!-- 推广模块 -->
        <popularize :popularizeOnline="onlineData"></popularize>
        <!--  动画 -->
        <donghua></donghua>
        <div class="video-info-module" style="left: 932.5px;top: 577px;">
            <div class="v-title">
                【新番咋了30】大国女王裸奔上阵！性感歌姬在线换妈！
            </div>
            <div class="v-info">
                <span class="name">凉风Kaze</span><span class="line"></span><span class="time">2018-05-04 18:05</span>
            </div>
            <div class="v-preview clearfix">
                <div class="lazy-img">
                    <img alt="" src="//i1.hdslb.com/bfs/archive/fd131ece4ad49f24a2576cb3ff9f208bea821abe.jpg@96w_60h.webp">
                </div>
                <p class="txt">
                    视频类型: 动漫杂谈
        简介: 动画区萌新UP第一稿，请多多支持~
                </p>
            </div>
            <div class="v-data">
                <span class="play"><i class="icon"></i>64.9万</span><span class="danmu"><i class="icon"></i>7072</span><span class="star"><i class="icon"></i>1.6万</span><span class="coin"><i class="icon"></i>9.8万</span>
            </div>
        </div>
    </div>
</template>

<script>
import Slide from '../components/common/slide'
import Recommend from '../components/common/recommend'
import Popularize from '../components/common/popularize'
import Donghua from '../components/common/bilidonghua'
export default {
    created() {
        this.online()
        this.ding()
    },
    components:{
        Slide,
        Recommend,
        Popularize,
        Donghua
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
    padding-bottom: 30px;
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
</style>

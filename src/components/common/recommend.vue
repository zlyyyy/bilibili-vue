<template>
    <div class="recommend-module">
        <div class="groom-module home-card" v-for="(item,index) in recommend.nowRec">
            <a :href="'https://www.bilibili.com/video/av'+item.aid" target="_blank" :title=item.title>
                <img v-lazy=item.pic :alt=item.title width="160" height="100" class="pic">
                <div class="card-mark">
                    <p class="title">{{ item.title }}</p>
                    <p class="author">up主：{{ item.author }}</p>
                    <p class="play">播放：{{ item.play }}</p>
                </div>
            </a>
            <div class="watch-later-trigger w-later"></div>
        </div>
        <template v-if="this.recommend.nowLeft === '一周'">
            <span class="rec-btn rec-left" @click="weekdays()">{{ recommend.nowLeft }}</span>
            <span class="rec-btn rec-right" @click="threedays()">{{ recommend.nowRight }}</span>
        </template>
        <template v-else-if="this.recommend.nowLeft === '昨日'">
            <span class="rec-btn rec-left" @click="yesterday()">{{ recommend.nowLeft }}</span>
            <span class="rec-btn rec-right" @click="weekdays()">{{ recommend.nowRight }}</span>
        </template>
        <template v-else-if="this.recommend.nowLeft === '三日'">
            <span class="rec-btn rec-left" @click="threedays()">{{ recommend.nowLeft }}</span>
            <span class="rec-btn rec-right" @click="yesterday()">{{ recommend.nowRight }}</span>
        </template>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
    props: {
        recommend: {
			default: []
		} 
    },
    data () {
        return {

        }
    },
    methods: {
        ...mapActions([
            'getNowrec'
        ]),
        yesterday(){
            this.getNowrec({
                now: this.recommend.rec.yesterday,
                nowLeft: '一周',
                nowRight: '三日'
            })
        },
        threedays(){
            this.getNowrec({
                now: this.recommend.rec.threedays,
                nowLeft: '昨日',
                nowRight: '一周'
            })
        },
        weekdays(){
            this.getNowrec({
                now: this.recommend.rec.week,
                nowLeft: '三日',
                nowRight: '昨日'
            })
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend-module{
    height: 220px;
    position: relative;
    overflow: hidden;
}
.groom-module{
    float: left;
    margin: 0 0 20px 20px;
    width: 160px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
}
.groom-module .pic {
	width: 160px;
	height: 100px
}
.groom-module .type-name {
	position: absolute;
	top: 0;
	right: 0;
	margin: .5em;
	padding: 0 5px;
	height: 20px;
	line-height: 20px;
	border-radius: 4px;
	color: #fff;
	font-style: normal;
	background-color: #00a1d6;
	background-color: rgba(0,161,214,.8)
}
.groom-module .card-mark {
	position: absolute;
	left: 0;
	top: 68px;
	width: 150px;
	height: 100%;
	font-size: 12px;
	height: 20px;
	line-height: 20px;
	padding: 10px 5px;
	overflow: hidden;
	background: #000;
	background: -webkit-linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
	background: -o-linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
	background: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(20%,rgba(0,0,0,.1)),color-stop(35%,rgba(0,0,0,.2)),color-stop(65%,rgba(0,0,0,.6)),to(rgba(0,0,0,.9)));
	background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9))
}
.groom-module .card-mark .title {
	color: #fff;
	height: 40px;
    font-size: 12px;
	overflow: hidden;
	margin-bottom: 5px;
    white-space: nowrap;
    text-overflow:ellipsis; 
    line-height: 20px;
}
.groom-module .card-mark .author,.groom-module .card-mark .play {
	opacity: 0;
	color: #99a2aa;
    font-size: 12px;
	height: 20px;
	line-height: 20px;
	overflow: hidden;
	-webkit-transition: all .6s;
	-o-transition: all .6s;
	transition: all .6s
}
.groom-module:hover .card-mark {
	top: 0;
	height: 100%;
	background: rgba(0,0,0,.7)
}
.groom-module:hover .card-mark .title{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    white-space: inherit;
}
.groom-module:hover .card-mark .author,.groom-module:hover .card-mark .play {
	opacity: 1
}
.groom-module:hover .w-later {
	display: block
}
.rec-btn{
    opacity: 0;
    position: absolute;
    background-color: rgba(0,0,0,.6);
    background-image: url(../../assets/icons2.png);
    background-repeat: no-repeat;
    width: 20px;
    top: calc(50% - 28px);
    cursor: pointer;
    font-size: 12px;
    color: #fff;
    text-align: center;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    line-height: 1.3;
}
.recommend-module:hover .rec-btn {
    opacity: 1;
}
.rec-left{
    left: 20px;
    border-radius: 0 4px 4px 0;
    padding: 13px 5px 13px 10px;
    background-position: 6px -1211px;
}
.rec-right{
    right: 0;
    border-radius: 4px 0 0 4px;
    padding: 13px 10px 13px 5px;
    background-position: 25px -1262px;
}
</style>

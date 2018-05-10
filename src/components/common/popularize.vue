<template>
    <div id="popularize_module" class="popularize-module">
        <div class="l-con">
            <div class="headline clearfix">
                <i class="icon icon_t icon-promote"></i><span class="name">推广</span>
            </div>
            <div class="storey-box clearfix">
                <div class="spread-module" v-for="item in spreads">
                    <a target="_blank" :href=item.url>
                        <div class="pic">
                            <div class="lazy-img">
                                <img :alt=item.name :src=item.pic>
                            </div>
                            <!---->
                            <div class="cover-preview-module">
                                <!---->
                                <div class="progress-bar">
                                    <span style="width: 0%;"></span>
                                </div>
                            </div>
                            <div class="mask-video">
                            </div>
                            <div class="danmu-module">
                            </div>
							<span>{{ item.archive.duration }}</span>
                            <span class="dur">{{ count(item.archive.duration) }}</span>
                            <div class="watch-later-trigger w-later">
                            </div>
                        </div>
                        <p :title=item.name class="t">
                            {{ item.name }}
                        </p>
                    </a>
                </div>
            </div>
        </div>
		<div class="r-con" v-if="popularizeOnline.data">
			<div class="online">
				<a href="//www.bilibili.com/video/online.html" target="_blank" title="在线观看：2298667">
					在线人数：{{ popularizeOnline.data.web_online }}
				</a>
				<em></em>
				<a href="//www.bilibili.com/newlist.html" target="_blank">最新投稿：{{ popularizeOnline.data.all_count }}</a>
			</div>
			<div data-id="0" data-loc-id="29" class="adpos">
				<a target="_blank" href="">
					<img src="https://i0.hdslb.com/bfs/sycp/tmaterial/201804/47b5262b603f85c2c1eaa66c97b34476.png" alt="" width="260" height="150" class="pic">
					<img src="../../assets/gg.png" class="gg-pic">
				</a>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    created() {
        this.popularize()
	},
	props: {
		popularizeOnline: {
			default: []
		} 
	},
    data () {
        return {
			spreads: [],
			online: []
        }
    },
    methods: {
		popularize(){
			this.$axios.get('/static/popularize.json')
            .then((res)=>{
				this.spreads = res.data.data["34"]
            }).catch((error)=>{
                console.log(error)
			})
		},
		count(num){
			if(num<60){
                return num ="00:"+num
			}else if(num>=60 && num<3600){
				let m
                Math.floor(num/60)<10? m="0"+Math.floor(num/60) : m=Math.floor(num/60)
                num%60<10? num= m+":0"+ num%60 : num = m+":"+num%60
				return num
			}else{
				let h,m
				Math.floor(num%3600/60)<10? m="0"+Math.floor(num%3600/60) : m=Math.floor(num%3600/60)
				return num = Math.floor(num/3600)+":"+ m +":"+ Math.floor(num%3600%60)
			}
		}
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    background-image: url(../../assets/play.png);
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
</style>

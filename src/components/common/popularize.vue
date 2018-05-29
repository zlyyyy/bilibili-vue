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
                                <img :alt=item.name v-lazy=item.pic>
                            </div>
                            <div class="cover-preview-module">
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
			spreads: []
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
		}
    }  
}
</script>

<style scoped>

</style>

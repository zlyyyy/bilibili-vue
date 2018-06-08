<template>
    <div class="new-comers-module l-con">
        <div class="zone-title">
            <div class="headline" :class="{'fj' : storeydata.rankPic == false}">
                <template v-if="storeydata.rankPic == true">
                    <i class="icon icon_t" :class="storeydata.icon"></i>
                    <a :href=storeydata.moreUrl class="name">{{ storeydata.title }}</a>
                </template>
                <a :href=storeydata.moreUrl class="name" v-else>{{ storeydata.title2 }}</a>
                <div class="bili-tab">
                    <div class="bili-tab-item" v-for="(item,index) in storeydata.tab" :class="{'on' : index === nowtab }" @click="nowtabclick(index)">{{ item.name }}</div>
                </div>
                <a :href=storeydata.moreUrl target="_blank" class="link-more">
                    更多
                    <i class="icon"></i>
                </a>
                <div class="read-push">
                    <i class="icon icon_read"></i>
                    <span class="info">
                        <b>{{ storeydata.dynamic }}</b>条新动态
                    </span>
                </div>
            </div>
        </div>
        <div class="storey-box">
            <div class="spread-module" v-for="item in storeydata.newTrends.archives" v-if="nowtab===0">
                <a :href="'https://www.bilibili.com/video/av'+item.aid+'/'" target="_blank" :title=item.title>
                    <div class="pic">
                        <div class="lazy-img">
                            <img :alt=item.title v-lazy=item.pic>
                        </div>
                        <i class="icon medal "></i>
                        <!-- <div class="cover-preview-module">
                            <div class="cover" style="background-image: url(&quot;//i3.hdslb.com/bfs/videoshot/37990295.jpg; background-position: 0px 0px; background-size: 1600px;">
                            </div>
                            <div class="progress-bar">
                                <span style="width: 0%;"></span>
                            </div>
                        </div> -->
                        <div class="mask-video"></div>
                        <!-- <div class="danmu-module">
                            <p class="dm">这袜。。。。</p>
                            <p class="dm row2">参见公主殿下</p>
                        </div> -->
                        <span class="dur">{{ count(item.duration) }}</span>
                        <div class="watch-later-trigger w-later"></div>
                    </div>
                    <p :title=item.title class="t">{{ item.title }}</p>
                    <p class="num">
                        <span class="play">
                            <i class="icon"></i>{{ count2(item.stat.view) }}
                        </span>
                        <span class="danmu">
                            <i class="icon"></i>{{ count2(item.stat.danmaku) }}
                        </span>
                    </p>
                </a>
            </div>
            <div class="spread-module" v-for="(item,index) in storeydata.newSub.archives" v-if="index<10&&nowtab===1">
                <a :href="'https://www.bilibili.com/video/av'+item.aid+'/'" target="_blank" :title=item.title>
                    <div class="pic">
                        <div class="lazy-img">
                            <img :alt=item.title v-lazy=item.pic>
                        </div>
                        <i class="icon medal "></i>
                        <!-- <div class="cover-preview-module">
                            <div class="cover" style="background-image: url(&quot;//i3.hdslb.com/bfs/videoshot/37990295.jpg; background-position: 0px 0px; background-size: 1600px;">
                            </div>
                            <div class="progress-bar">
                                <span style="width: 0%;"></span>
                            </div>
                        </div> -->
                        <div class="mask-video"></div>
                        <!-- <div class="danmu-module">
                            <p class="dm">这袜。。。。</p>
                            <p class="dm row2">参见公主殿下</p>
                        </div> -->
                        <span class="dur">{{ count(item.duration) }}</span>
                        <div class="watch-later-trigger w-later"></div>
                    </div>
                    <p :title=item.title class="t">{{ item.title }}</p>
                    <p class="num">
                        <span class="play">
                            <i class="icon"></i>{{ count2(item.stat.view) }}
                        </span>
                        <span class="danmu">
                            <i class="icon"></i>{{ count2(item.stat.danmaku) }}
                        </span>
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        storeydata: {
            type: [Object,Array],
            default: () => []
        }
    },
    components: {
        
    },
    computed:{
        
    },
    data () {
        return {
            nowtab: 0
        }
    },
    methods: {
        nowtabclick(index) {
            this.nowtab =index
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

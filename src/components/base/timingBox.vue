<template>
    <div class="timing-box">
        <div class="card-timing-module clearfix card-timing" v-for="(item,index) in timelineData" v-if="index<16&&nowtab==0">
            <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="pic">
            <div class="lazy-img">
                <img :alt="item.title" v-lazy="item.square_cover">
            </div>
            </a>
            <div class="r-text">
                <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="t">{{ item.title }}</a>
                <p class="update" :class="{'on': item.new}">
                    <span>更新至<a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank">{{ item.bgmcount }}话</a></span><!---->
                </p>
            </div>
        </div>
        <div class="card-timing-module clearfix card-timing" v-for="(item,index) in timelineSort" v-if="item.weekday==nowtab">
            <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="pic">
            <div class="lazy-img">
                <img :alt="item.title" v-lazy="item.square_cover">
            </div>
            </a>
            <div class="r-text">
                <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="t">{{ item.title+item.weekday }}</a>
                <p class="update" :class="{'on': item.new}">
                    <span>更新至<a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank">{{ item.bgmcount }}话</a></span><!---->
                </p>
            </div>
        </div>
        <div class="card-timing-module clearfix card-timing" v-for="(item,index) in timelineSort" v-if="item.weekday==0&&nowtab==7">
            <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="pic">
            <div class="lazy-img">
                <img :alt="item.title" v-lazy="item.square_cover">
            </div>
            </a>
            <div class="r-text">
                <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="t">{{ item.title+item.weekday }}</a>
                <p class="update" :class="{'on': item.new}">
                    <span>更新至<a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank">{{ item.bgmcount }}话</a></span><!---->
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        timelineData: {
            type: [Object,Array],
            default: () => []
        },
        nowtab: {
            type: Number,
            default: 0
        }
    },
    components: {
        // TimingBox
    },
    computed:{
        //根据favorites排序返回数组
        timelineSort(){
            return this.sortBynum(this.timelineData,'favorites')
        }
    },
    data () {
        return {
        }
    },
    methods: {
        nowtabclick(index) {
            this.nowtab =index
        },
        //根据favorites排序
        sortBynum(array,num){
            return array.sort(function(a,b){
                var x = a[num]
                var y = b[num]
                return y-x //降序，反之升序
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

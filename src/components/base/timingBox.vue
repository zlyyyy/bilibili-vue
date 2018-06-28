<template>
    <div class="timing-box">
        <div class="card-timing-module clearfix card-timing" v-for="(item,index) in timelineNew" v-if="nowtab==0">
            <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="pic">
            <div class="lazy-img">
                <img :alt="item.title" v-lazy="item.square_cover">
            </div>
            </a>
            <div class="r-text">
                <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="t">{{ item.title }}</a>
                <p class="update" :class="{'on': item.new}">
                    <span>
                        {{ item.bgmcount==-1? '尚未更新' : '更新至'}}
                        <a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank" v-if="item.bgmcount>0">{{ item.bgmcount +'话'}}</a>
                        <a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank" v-else>{{ item.bgmcount }}</a>
                    </span>
                </p>
            </div>
        </div>
        <div class="card-timing-module clearfix card-timing" v-for="(item,index) in timelineSort" v-if="item.weekday==nowtab&&nowtab!==0">
            <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="pic">
            <div class="lazy-img">
                <img :alt="item.title" v-lazy="item.square_cover">
            </div>
            </a>
            <div class="r-text">
                <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="t">{{ item.title }}</a>
                <p class="update" :class="{'on': item.new}">
                    <span>
                        {{ item.bgmcount==-1? '尚未更新' : '更新至'}}
                        <a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank" v-if="item.bgmcount>0">{{ item.bgmcount +'话'}}</a>
                        <a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank" v-else>{{ item.bgmcount }}</a>
                    </span>
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
                <a :href="'https://www.bilibili.com/bangumi/play/ss'+item.season_id+'/'" target="_blank" :title="item.title" class="t">{{ item.title }}</a>
                <p class="update" :class="{'on': item.new}">
                    <span>
                        {{ item.bgmcount==-1? '尚未更新' : '更新至'}}
                        <a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank" v-if="item.bgmcount>0">{{ item.bgmcount +'话'}}</a>
                        <a :href="'htttps://www.bilibili.com/bangumi/play/ep'+item.ep_id+'/'" target="_blank" v-else>{{ item.bgmcount }}</a>
                    </span>
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
    },
    computed:{
        //根据今天的日期排序返回数组，取本周今日前包括今日的数据
        timelineToday(){
            return this.timelineData.filter(function(item){
                    let t = new Date()
                    return item.weekday < t.getDay() && item.weekday > 0 && item.new==false
                }
            )
        },
        //根据favorites排序返回数组
        timelineToday2(){
            return this.sortBynum(this.timelineToday,'favorites')
        },
        //根据favorites排序返回数组
        timelineSort(){
            let now = this.nowtab
            if(now>6){
                now = 0
            }
            let first = this.timelineData.filter(function(item){
                    return item.weekday==now
            }
            )
            return this.sortBynum(first,'favorites')
        },
        timelineNew(){
            //根据是否更新返回数组
            let first = this.timelineData.filter(function(item){
                    return item.new==true
                }
            )
            //更新数组内部根据favorites排序
            let scond =this.sortBynum(first.filter(function(item){
                    return item.new==true
                }
            ),'weekday')
            return this.sortBynum(scond,'favorites').concat(this.timelineToday2)
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
        },
        //根据日期排序
        sortByday(array,num){
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

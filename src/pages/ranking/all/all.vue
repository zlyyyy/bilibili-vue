<template>
    <div class="rank-list-wrap">
        <ul class="rank-list">
            <li class="rank-item" v-for="(item,index) in RankingALL.list">
                <div class="num">
                    {{ index+1 }}
                </div>
                <div class="content">
                    <div class="img">
                        <a :href=item.aid target="_blank">
                            <div class="cover">
                                <img :alt="item.title" v-lazy="item.pic">
                            </div>
                        </a>
                        <div class="watch-later-trigger w-later">
                        </div>
                    </div>
                    <div class="info">
                        <a :href=item.aid target="_blank" class="title">{{ item.title }}</a>
                        <div class="detail">
                            <span class="data-box">
                                <i class="b-icon play"></i>
                                {{ count2(item.play) }}
                            </span>
                            <span class="data-box">
                                <i class="b-icon view"></i>
                                {{ item.video_review }}
                            </span>
                            <a target="_blank" :href="item.mid">
                                <span class="data-box">
                                    <i class="b-icon author"></i>
                                    {{ item.author }}
                                </span>
                            </a>
                        </div>
                        <div class="pts">
                            <div>
                                {{ item.pts }}
                            </div>
                            综合得分
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        this.$axios.get('/static/ranking/all.json')
            .then((res)=>{
                this.RankingALL = res.data.data
                this.$emit('rankdata',res.data.data.note)
            }).catch((error)=>{
                console.log(error)
            })
    },
    components:{
    },
    data () {
        return {
            RankingALL: []
        }
    },
    methods: {
        // 视频播放量弹幕数计算
        count2(num){
            if(num>10000){
                return (Math.round(num/1e3)/10).toFixed(1)+'万'
            }else{
                return num
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
    <div class="slide" @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img" v-if="slidedata[nowIndex]">
            <a :href=slidedata[nowIndex].url target="_blank" :title=slidedata[nowIndex].name>
                <transition name="slide-trans">
                    <img v-if="isShow" :src=slidedata[nowIndex].pic>
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src=slidedata[nowIndex].pic>
                </transition>
            </a>
        </div>
        <div class="slide-title" v-if="slidedata[nowIndex]">
            <a :href=slidedata[nowIndex].url target="_blank" :title=slidedata[nowIndex].name>{{ slidedata[nowIndex].name }}</a>
        </div>
        <ul class="slide-page">
            <li v-for="(item,index) in slidedata" :class="{on: index === nowIndex}" @click="goto(index)"></li>
        </ul>
        <div class="slide-button" v-if="pagation">
            <div class="slide-prev-button" @click="goto(prevIndex)">上一页</div>
            <div class="slide-next-button" @click="goto(nextIndex)">下一页</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        slidedata: {
            type: Array,
            default: []
        },
        slidetimedata: {
            type: Number,
            default: 2000
        },
        pagation: {
            default: false
        }
    },
    computed: {
        prevIndex(){
            if(this.nowIndex === 0){
                return this.slidedata.length -1
            }else{
                return this.nowIndex -1
            }
        },
        nextIndex(){
            if(this.nowIndex === this.slidedata.length-1){
                return 0
            }else{
                return this.nowIndex + 1
            }
        }
    },
    data () {
        return {
            nowIndex: 0,
            isShow: true
        }
    },
    methods: {
        goto(index) {
            this.isShow = false
            setTimeout(()=>{
                this.isShow = true
                this.nowIndex = index
            },10)
        },
        runInv() {
            this.inVld = setInterval(()=>{
                this.goto(this.nextIndex)
            },this.slidetimedata)
        },
        clearInv(){
            clearInterval(this.inVld)
        }
    },
    mounted() {
        this.runInv()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(440px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-440px);
}
.slide{
    position: relative;
    width: 440px;
    height: 220px;
    float: left;
}
.slide .slide-img{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.slide .slide-img a{
    position: relative;
    display: block;
    height: 100%;
}
.slide .slide-img a img{
    position: absolute;
    top: 0;
    border-radius: 4px;
}
.slide .slide-title{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 36px;
    line-height: 36px;
    background: rgba(0,0,0,.5);
    font-size: 14px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px; 
}
.slide .slide-title a{
    width: 100%;
    color: #fff;
    text-decoration: none;
    padding-left: 10px;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.slide .slide-page{
    position: absolute;
    height: 22px;
    bottom: 7px;
    right: 20px;
}
.slide .slide-page li{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: #fff;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.slide .slide-page li:hover{
    background: #00A1D6;
    box-sizing: border-box;
    border: 2px solid #fff;
}
.slide .slide-page li:hover,
.slide .slide-page li.on{
    background: #00A1D6;
    width: 30px;
    border-radius: 6px;
    box-sizing: border-box;
    border: 2px solid #fff;
}
.slide:hover .slide-button{
    opacity: 1;
    transition: all .3s;
}
.slide .slide-button{
    opacity: 0;
    position: absolute;
    top: calc(50% - 29px);
    width: 100%;
    transition: all .3s;
}
.slide .slide-button .slide-prev-button{
    cursor: pointer;
    position: absolute;
    left: 0;
    height: 22px;
    line-height: 22px;
    background: rgba(0,0,0,.5);
    color: #fff;
    padding: 5px;
    border-top-right-radius: 4px; 
    border-bottom-right-radius: 4px; 
}
.slide .slide-button .slide-next-button{
    cursor: pointer;
    position: absolute;
    right: 0;
    height: 22px;
    line-height: 22px;
    background: rgba(0,0,0,.5);
    color: #fff;
    padding: 5px;
    border-top-left-radius: 4px; 
    border-bottom-left-radius: 4px; 
}
</style>

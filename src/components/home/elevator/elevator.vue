<template>
    <div class="report-wrap-module elevator-module" :style="{ top: elTop+'px' }">
        <div class="nav-bg">
            <div class="tips-img">
            </div>
        </div>
        <div class="nav-list">
            <div v-for="(item, index) in elevator" :sortindex="index" class="item sortable">
                {{ item.name }}
            </div>
            <div class="item customize">
                <i class="icon"></i>排序
            </div>
        </div>
        <div class="s-line">
        </div>
        <div class="back-top icon">
        </div>
        <div class="app-download">
            <a href="//app.bilibili.com/?channel=home_recommend" target="_blank">
            <div id="elevator-mobile-app" class="app-icon" style="background-position-x: 0px;">
            </div>
            <div class="app-tips-icon" style="opacity: 1; display: none;">
            </div>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    created() {
    },
    components: {
    },
    props: {
    },
    computed: {
        ...mapGetters([
            'elevator',
        ]),
        elTop(){
            return window.onscroll=function(){
                if (document.documentElement.scrollTop<60) {
                    return 88
                }else {
                    return 232
                }
            }()
            
        }
    },
    data () {
        return {
            activeTab: 0
        }
    },
    methods: {
        setActiveTab(index){
            this.activeTab = index
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../style/mixin';

.elevator-module {
    position: fixed;
    z-index: 299;
    left: 50%;
    top: 232px;
    margin-left: 590px;
    transition: top .3s;
    .nav-bg {
        opacity: 0;
        top: -15px;
        right: 0;
        height: 100%;
        padding-bottom: 20px;
        width: 60px;
        position: absolute;
        background: hsla(0,0%,100%,.8);
        border-radius: 4px;
        overflow: hidden;
        transition: all .3s cubic-bezier(.68,-.55,.27,1.55);
        .tips-img {
            position: absolute;
            width: 117px;
            height: 333px;
            background: url(//s1.hdslb.com/bfs/static/jinkela/home/asserts/tab2233.png);
            left: 12px;
            top: 14px;
        }
    }
    .nav-list {
        position: relative;
        background-color: #f6f9fa;
        border: 1px solid #e5e9ef;
        overflow: hidden;
        border-radius: 4px;
        .item {
            width: 48px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            transition: background-color .3s,color .3s;
            cursor: pointer;
            -ms-user-select: none;
            user-select: none;
            &.on,&:hover{
                background-color: #00a1d6;
                color: #fff;
            }
        }
        .customize {
            height: 38px;
            line-height: 20px;
            padding: 8px 0;
            border-top: 1px solid #e5e9ef;
            .icon {
                display: block;
                margin: 0 auto 4px;
                background-position: -663px -151px;
                height: 18px;
                width: 18px;
            }
        }
    }
    .s-line {
        position: relative;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        height: 9px;
        width: 30px;
        margin: 0 auto;
    }
    .back-top {
        position: relative;
        display: block;
        cursor: pointer;
        height: 48px;
        background-position: -648px -72px;
        background-color: #f6f9fa;
        border: 1px solid #e5e9ef;
        overflow: hidden;
        border-radius: 4px;
    }
    .app-download {
        position: relative;
        width: 50px;
        height: 70px;
        .app-icon {
            position: absolute;
            left: -15px;
            width: 80px;
            height: 80px;
            background-image: url(//s1.hdslb.com/bfs/static/jinkela/home/asserts/app-download.png);
        }
        .app-tips-icon {
            display: none;
            position: absolute;
            left: -110px;
            top: -20px;
            width: 106px;
            height: 44px;
            background-image: url(//s1.hdslb.com/bfs/static/jinkela/home/asserts/app-download-tips.png);
        }
    }
}
</style>

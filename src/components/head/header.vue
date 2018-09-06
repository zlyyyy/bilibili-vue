<template>
    <div class="app-header">
        <nav-menu :leftNav="leftNav" :headBanner="headBanner"></nav-menu>
        <div class="head-banner" :style="{background:'url('+headBanner.pic+')'}">
            <div class="bili-wrapper head-content">
                <div class="search">
                    <div class="searchform">
                        <input v-model="searchValue" type="text" :placeholder=searchWord.show @keyup.enter="searchALL()" class="search-keyword">
                        <button type="submit" class="search-submit" @click="searchALL()"></button>
                    </div>
                    <ul class="bilibili-suggest" v-show="suggestShow">
                        <li class="kw">
                            <div class="b-line">
                                <p><span>历史搜索</span></p>
                            </div>
                        </li>
                        <li class="suggest-item">
                            <a href="//search.bilibili.com/all?keyword=quanzhi&amp;from_source=banner_search" target="_blank">quanzhi</a>
                            <div class="cancel"></div>
                        </li>
                    </ul>
                    <a href="/ranking"  class="link-ranking">
                        <span>排行榜</span>
                    </a>
                </div>
                <a class="head-logo" :style="{background:'url('+headBanner.litpic+')'}"></a>
            </div>
            <a href="" target="_blank" class="banner-link"></a>
        </div>
        <div class="bili-wrapper">
            <div class="primary-menu">
                <ul class="nav-menu">
                    <li v-for="item in menuLeft" :class="item.class">
                        <a :href="item.href">
                            <div class="num-wrap" v-if="item.num">
                                <span>{{ item.num<1000? item.num:999+"+" }}</span>
                            </div>
                            <div class="nav-name">
                                {{ item.name }}
                            </div>
                        </a>
                        <ul class="sub-nav" v-if="item.items">
                            <li v-for="navitem in item.items">
                                <a :href="navitem.href">
                                    <span>{{ navitem.name }}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="side-nav nav-square" v-for="item in menuRight">
                        <a :href="item.href" class="side-link" :class="item.class">
                            <i :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </a>
                        <div class="sub-nav" v-if="item.fieldClass!=''" :class="item.fieldClass">
                            <ul>
                                <li v-for="itemnav in item.fields">
                                    <a :href="itemnav.href">
                                        <i class="icon-prim" :class="itemnav.icon" v-if="itemnav.icon"></i>
                                        <span>{{ itemnav.name }}</span>
                                    </a>
                                </li>
                            </ul>
                            <div :class="item.fieldImgClass">
                                <a v-for="itemnavImg in item.fieldImg" :href="itemnavImg.href" target="_blank" :title="itemnavImg.title" :class="itemnavImg.imgclass">
                                    <img :alt="itemnavImg.title" :src="itemnavImg.src">
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="gif-menu nav-gif" v-if="menuIcon.links">
                    <a :href="menuIcon.links[0]" target="_blank" :title="menuIcon.title" class="random-p">
                        <img :src="menuIcon.icon" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavMenu from '../../components/navMenu/navMenu'
//创建基于header辅助函数,返回一个对象,对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('header')

export default {
    created() {
        this.setHeadBanner()
        this.setSearchDefaultWords()
        this.setMenuIcon()
    },
    components:{
        NavMenu
    },
    data () {
        return {
            suggestShow:false
        }
    },
    computed: {
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState([//命名空间获取state
            'leftNav',
            'headBanner',//登录状态获取
            'searchWord',
            'menuLeft',
            'menuRight',
            'menuIcon'
        ]),
        searchValue: {
            get() {
                return this.$store.state.header.searchValue
            },
            set(value) {
                this.setSearchValue(value)
            }
        },
    },
    methods: {
        ...mapMutations({
            setSearchValue: 'SET_SEARCH_WORD'
        }),
        ...mapActions([
             'setHeadBanner',// 将 `this.setHeadBanner(amount)` 映射为 `this.$store.dispatch('headBanner', amount)`
             'setSearchDefaultWords',
             'setMenuIcon'
        ]),
        searchALL() {
            if(this.searchValue === ''){
                window.open('http://localhost:8080/search/all?keyword='+this.searchWord.word)
            }else{
                window.open('http://localhost:8080/search/all?keyword='+this.searchValue)
            }
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

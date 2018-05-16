<template>
    <div class="app-header">
        <nav-menu></nav-menu>
        <div class="head-banner" :style="{background:'url('+headbannersrc+')'}">
            <div class="bili-wrapper head-content">
                <div class="search">
                    <div class="searchform">
                        <input type="text" autocomplete="off" accesskey="s" x-webkit-speech="" x-webkit-grammar="builtin:translate" :placeholder=SearchWord value="" class="search-keyword">
                        <button type="submit" class="search-submit"></button>
                    </div><!---->
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
                    <router-link :to="{ path: '/ranking' }"  target="_blank" class="link-ranking">
                        <span>排行榜</span>
                    </router-link>
                </div>
                <a class="head-logo" :style="{background:'url('+headlogo+')'}"></a>
            </div>
        </div>
        <div class="bili-wrapper">
            <div class="primary-menu">
                <ul class="nav-menu">
                    <li v-for="item in wrapperdata" :class="item.class">
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
                    <li class="side-nav nav-square" v-for="item in slidenav">
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
            </div>
        </div>
    </div>
</template>

<script>
import NavMenu from '../components/common/navMenu'
export default {
    created() {
        this.getSearchDefaultWords()
    },
    components:{
        NavMenu
    },
    data () {
        return {
            headbannersrc: require('../assets/nav-bg.png'),
            headlogo: require('../assets/head-logo.png'),
            SearchWord:'',
            suggestShow:false,
            wrapperdata: [
                {
                    name: '首页',
                    class: 'home',
                    href: ''
                },
                {
                    name: '动画',
                    num: 884,
                    href: '',
                    items: [
                        {
                            name: 'MAD·AMV',
                            href: ''
                        },
                        {
                            name: 'MMD·3D',
                            href: ''
                        },
                        {
                            name: '短片·手书·配音',
                            href: ''
                        },
                        {
                            name: 'MAD·AMV',
                            href: '综合'
                        }
                    ]
                },
                {
                    name: '番剧',
                    num: 105,
                    href: '',
                    items: [
                        {
                            name: '连载动画',
                            href: ''
                        },
                        {
                            name: '完结动画',
                            href: ''
                        },
                        {
                            name: '资讯',
                            href: ''
                        },
                        {
                            name: '官方延伸',
                            href: ''
                        },
                        {
                            name: '新番时间表',
                            href: ''
                        },
                        {
                            name: '番剧索引',
                            href: ''
                        }
                    ]
                },
                {
                    name: '国创',
                    num: 103,
                    href: '',
                    items: [
                        {
                            name: '国产动画',
                            href: ''
                        },
                        {
                            name: '国产原创相关',
                            href: ''
                        },
                        {
                            name: '布袋戏',
                            href: ''
                        },
                        {
                            name: '资讯',
                            href: ''
                        },
                        {
                            name: '新番时间表',
                            href: ''
                        },
                        {
                            name: '国产动画索引',
                            href: ''
                        }
                    ]
                },
                {
                    name: '音乐',
                    num: 12389,
                    href: '',
                    items: [
                        {
                            name: '原创音乐',
                            href: ''
                        },
                        {
                            name: '翻唱',
                            href: ''
                        },
                        {
                            name: 'VOCALOID·UTAU',
                            href: ''
                        },
                        {
                            name: '演奏',
                            href: ''
                        },
                        {
                            name: '三次元音乐',
                            href: ''
                        },
                        {
                            name: 'OP/ED/OST',
                            href: ''
                        },
                        {
                            name: '音乐选集',
                            href: ''
                        }
                    ]
                },
                {
                    name: '舞蹈',
                    num: 199,
                    href: '',
                    items: [
                        {
                            name: '宅舞',
                            href: ''
                        },
                        {
                            name: '三次元舞蹈',
                            href: ''
                        },
                        {
                            name: '舞蹈教程',
                            href: ''
                        }
                    ]
                },
                {
                    name: '游戏',
                    num: 23890,
                    href: '',
                    items: [
                        {
                            name: '单机游戏',
                            href: ''
                        },
                        {
                            name: '电子竞技',
                            href: ''
                        },
                        {
                            name: '手机游戏',
                            href: ''
                        },
                        {
                            name: '网络游戏',
                            href: ''
                        },
                        {
                            name: '桌游棋牌',
                            href: ''
                        },
                        {
                            name: 'GMV',
                            href: ''
                        },
                        {
                            name: '音游',
                            href: ''
                        },
                        {
                            name: 'Mugen',
                            href: ''
                        }
                    ]
                },
                {
                    name: '科技',
                    num: 27893,
                    href: '',
                    items: [
                        {
                            name: '趣味科普人文',
                            href: ''
                        },
                        {
                            name: '野生技术协会',
                            href: ''
                        },
                        {
                            name: '演讲·公开课',
                            href: ''
                        },
                        {
                            name: '星海',
                            href: ''
                        },
                        {
                            name: '数码',
                            href: ''
                        },
                        {
                            name: '机械',
                            href: ''
                        },
                        {
                            name: '汽车',
                            href: ''
                        }
                    ]
                },
                {
                    name: '生活',
                    num: 12678,
                    href: '',
                    items: [
                        {
                            name: '搞笑',
                            href: ''
                        },
                        {
                            name: '日常',
                            href: ''
                        },
                        {
                            name: '美食圈',
                            href: ''
                        },
                        {
                            name: '动物圈',
                            href: ''
                        },
                        {
                            name: '手工',
                            href: ''
                        },
                        {
                            name: '绘画',
                            href: ''
                        },
                        {
                            name: 'ASMR',
                            href: ''
                        },
                        {
                            name: '运动',
                            href: ''
                        },
                        {
                            name: '其他',
                            href: ''
                        }
                    ]
                },
                {
                    name: '鬼畜',
                    num: 68,
                    href: '',
                    items: [
                        {
                            name: '鬼畜调教',
                            href: ''
                        },
                        {
                            name: '音MAD',
                            href: ''
                        },
                        {
                            name: '人力VOCALOID',
                            href: ''
                        },
                        {
                            name: '教程演示',
                            href: ''
                        }
                    ]
                },
                {
                    name: '时尚',
                    num: 859,
                    href: '',
                    items: [
                        {
                            name: '美妆',
                            href: ''
                        },
                        {
                            name: '服饰',
                            href: ''
                        },
                        {
                            name: '健身',
                            href: ''
                        },
                        {
                            name: '资讯',
                            href: ''
                        }
                    ]
                },
                {
                    name: '广告',
                    num: 205,
                    href: '',
                    items: [
                    ]
                },
                {
                    name: '娱乐',
                    num: 1280,
                    href: '',
                    items: [
                        {
                            name: '综艺',
                            href: ''
                        },
                        {
                            name: '明星',
                            href: ''
                        },
                        {
                            name: 'Korea相关',
                            href: ''
                        }
                    ]
                },
                {
                    name: '影视',
                    num: 3450,
                    href: '',
                    items: [
                        {
                            name: '影视杂谈',
                            href: ''
                        },
                        {
                            name: '影视剪辑',
                            href: ''
                        },
                        {
                            name: '短片',
                            href: ''
                        },
                        {
                            name: '预告·资讯',
                            href: ''
                        },
                        {
                            name: '特摄',
                            href: ''
                        }
                    ]
                },
                {
                    name: '放映厅',
                    num: 147,
                    href: '',
                    items: [
                        {
                            name: '纪录片',
                            href: ''
                        },
                        {
                            name: '电影',
                            href: ''
                        },
                        {
                            name: '电视剧',
                            href: ''
                        }
                    ]
                },
            ],
            slidenav: [
                {
                    name: '专栏',
                    class: 'zl',
                    icon: 'zhuanlan',
                    href: '/',
                    fieldClass: '',
                    fields: [
                    ]
                },
                {
                    name: '广场',
                    class: 'nav-square',
                    icon: 'square',
                    href: '/',
                    fieldClass: 'square-wrap',
                    fields: [
                        {
                            name: '会员购',
                            icon: 'icon-vip-buy',
                            href: ''
                        },
                        {
                            name: '活动中心',
                            icon: 'icon-activity',
                            href: ''
                        },
                        {
                            name: '游戏中心',
                            icon: 'icon-game',
                            href: ''
                        },
                        {
                            name: '新闻中心',
                            icon: 'icon-news',
                            href: ''
                        },
                        {
                            name: '画友',
                            icon: 'icon-hy',
                            href: ''
                        },
                        {
                            name: '芒果TV',
                            icon: 'icon-mango',
                            href: ''
                        }
                    ],
                    fieldImgClass: 'square-field',
                    fieldImg: [
                        {
                            title: 'bilibili 活动',
                            href: '',
                            src: require('../assets/square_01.jpg')
                        },
                        {
                            title: '话题列表',
                            href: '',
                            src: require('../assets/square_02.jpg')
                        }
                    ]
                },
                {
                    name: '直播',
                    class: '',
                    icon: 'live',
                    href: '/',
                    fieldClass: 'nav-live',
                    fields: [
                        {
                            name: '推荐主播',
                            href: ''
                        },
                        {
                            name: '生活娱乐',
                            href: ''
                        },
                        {
                            name: '绘画专区',
                            href: ''
                        },
                        {
                            name: '唱见舞见',
                            href: ''
                        },
                        {
                            name: '御宅文化',
                            href: ''
                        },
                        {
                            name: '单机联机',
                            href: ''
                        },
                        {
                            name: '网络游戏',
                            href: ''
                        },
                        {
                            name: '电子竞技',
                            href: ''
                        },
                        {
                            name: '手游直播',
                            href: ''
                        }
                    ],
                    fieldImgClass: 'live-field',
                    fieldImg: [
                        {
                            title: '有文画',
                            href: '',
                            imgclass: 'pic',
                            src: require('../assets/live_01.png')
                        },
                        {
                            title: '小视频',
                            href: '',
                            imgclass: 'pic',
                            src: require('../assets/live_02.png')
                        }
                    ]
                },
                {
                    name: '小黑屋',
                    class: '',
                    icon: 'blackroom',
                    href: '/',
                    fieldClass: '',
                    fields: [
                    ]
                },
            ]
        }
    },
    methods: {
        getSearchDefaultWords(){
            this.$axios.get('/api/widget/getSearchDefaultWords')
            .then((res)=>{
				this.SearchWord = res.data["0"].show
            }).catch((error)=>{
                console.log(error)
			})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

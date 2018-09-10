<template>
    <div class="b-page-body">
        <div class="main-inner">
            <div class="rank-container">
                <div class="rank-head">
                    <template v-if="rankAll">
                        <ul class="rank-menu">
                                <router-link v-for="(item,index) in rankMenu" @click.native="one(index)"
                                :to="{
                                    name: item.name,
                                    params: {
                                        type: item.name,
                                        rid: item.children[0].rid,
                                        rankselect: $route.params.rankselect,
                                        rankselect2: $route.params.rankselect2
                                    }
                                }" tag="li" active-class="active" :key="item.id" :class="{active: index == firstMenuActive}" >
                                    <span class="rank-icon" :class="item.icon"></span>
                                    <span class="text">{{ item.title }}</span>
                                </router-link>
                        </ul>
                    </template>
                </div>
                <div class="rank-body">
                    <div class="rank-tab-wrap">
                        <ul class="rank-tab">
                            <li v-for="(item,index) in rankMenu[firstMenuActive].children" @click="two(index)" :class="{active: index == secondMenuActive}" >
                                {{ item.name }}
                            </li>
                        </ul>
                        <div class="rank-type-dropdown">
                            <dropdown :dropdownData="rankDropdown"  :selected="rankSelect" @dropselected='postRankSelect'></dropdown>
                            <dropdown :dropdownData="rankDropdown2"  :selected="rankSelect2" @dropselected='postRankSelect2'></dropdown>
                        </div>
                    </div>
                    <div class="rank-list-head">
                        <div class="rank_tips">
                            <i class="b-icon-tip"></i>
                            <span class="tip-txt">{{ rankAll.note }}</span>
                        </div>
                    </div>
                    <div class="rank-list-wrap">
                        <keep-alive>
                            <router-view :rankAll='rankAll' :key='key'></router-view>
                        </keep-alive>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '../../components/dropdown/dropdown'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('ranking')

export default {
    created() { 
        //地址栏读取params参数，设置对应的参数
        //二级类目
        let num,num2;
        for(let i=0;i<this.rankMenu[this.firstMenuActive].children.length;i++){
            if(this.rankMenu[this.firstMenuActive].children[i].rid==this.$route.params.rid){
                num = i
                // console.log(i)
            }
        }
        // console.log(num)
        this.setSecondMenuActive(num)
        //一级筛选
        this.setRankSelect(this.$route.params.rankselect)
        //二级筛选
        for(let i=0;i<this.rankDropdown2.length;i++){
            if(this.rankDropdown2[i].num==this.$route.params.rankselect2){
                num2 = i
                // console.log(i)
            }
        }
        this.setRankSelect2(this.$route.params.rankselect2)
        //数据获取
        this.refreshData()
    },
    components:{
        Dropdown
    },
    computed: {
        ...mapState([
            'rankMenu',
            'firstMenuActive',
            'secondMenuActive',
            'rankTips',
            'rankDropdown',
            'rankSelect',
            'rankDropdown2',
            'rankSelect2',
            'rankAll'
        ]),
        key() {
            return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
        }
    },
    data () {
        return {
           
        }
    },
    methods: {
        ...mapMutations({
            setRankSelect: 'SET_RANK_SELECT',
            setRankSelect2: 'SET_RANK_SELECT2',
            setFirstMenuActive: 'SET_FIRST_MENU_ACTIVE',
            setSecondMenuActive: 'SET_SECOND_MENU_ACTIVE'
        }),
        ...mapActions([
            'setRankData',
        ]),
        one(index){
            this.setFirstMenuActive(index);//同步修改state一级高亮
            this.setSecondMenuActive(0);//默认state二级菜单第一个元素高亮
            this.refreshData();//同步获取数据
        },
        two(index) {
            this.setSecondMenuActive(index);//同步修改state二级菜单高亮
            this.$route.params.rid = this.rankMenu[this.firstMenuActive].children[index].rid//修改路由rid参数
            this.RouterPush()//刷新路由
        },
        refreshData(){
            this.setRankData({
                type: this.firstMenuActive+1,//一级类目
                rid: this.rankMenu[this.firstMenuActive].children[this.secondMenuActive].rid,//二级类目
                arc_type: this.rankSelect,//全部近期筛选
                day: this.rankDropdown2[this.rankSelect2].num//时间筛选
            })
        },
        postRankSelect(index) {
            this.setRankSelect(index)//同步修改一级多选
            this.$route.params.rankselect = index//修改路由rankselect参数
            this.RouterPush()//刷新路由
        },
        postRankSelect2(index) {
            console.log(index)
            this.setRankSelect2(index)//同步修改二级多选
            this.$route.params.rankselect2 = this.rankDropdown2[index].num//修改路由rankselect2参数
            this.RouterPush()//刷新路由
        },
        RouterPush() {
            this.refreshData()//重新获取数据
            this.$router.push({
                    name: this.$route.name,
                    params: { 
                        type: this.$route.params.type,
                        rid:this.$route.params.rid,
                        rankselect: this.$route.params.rankselect,
                        rankselect2: this.$route.params.rankselect2
                        }
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/mixin';

.main-inner {
    width: 1160px;
    margin: 0 auto;
    position: relative;
    .rank-container {
        border: 0;
        margin: 20px 0;
        @include borderRadius(4px);
    }
}
.rank-menu, .rank-menu li {
    text-align: center;
}
.rank-menu {
    li {
        @include wh(115px, 40px);
        font-size: 18px;
        line-height: 25px;
        padding: 0 12px;
        margin-left: 52px;
        display: inline-block;
        cursor: pointer;
        &:first-child {
            margin-left: 0;
        }
        &.active {
            color: $blue;
            height: 38px;
            border-bottom: 2px solid $blue;
        }
        .text {
            margin-left: 5px;
            font-size: 16px;
        }
        .rank-icon {
            display: inline-block;
            @include wh(30px, 30px);
            vertical-align: middle;
            background: url(../../assets/icons.png) no-repeat;
            &.all {
                background-position: -83px -979px;
            }
            &.origin {
                background-position: -83px -1041px;
            }
            &.bangumi {
                background-position: -83px -1107px;
            }
            &.cinema {
                background-position: -146px -1555px;
            }
            &.rookie {
                background-position: -83px -1170px;
            }
        }
    }
}
.rank-tab-wrap {
    background: #edf2f9;
    padding: 0;
    @include borderRadius(4px);
    clear: both;
    height: 40px;
    .rank-tab {
        float: left;
        li {
            float: left;
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            font-size: 14px;
            margin-right: 10px;
        }
        .active {
            color: $blue;
        }
    }
    .rank-dropdown {
        margin-top: 8px;
        margin-right: 10px;
    }
}
.rank-type-dropdown {
    float: right;
}
.rank-list-head {
    padding: 15px 0;
    .rank_tips {
        padding: 7px 0;
        background-color: #edf2f9;
        @include borderRadius(4px);
        .b-icon-tip {
            @include wh(16px, 16px);
            display: inline-block;
            vertical-align: middle;
            margin: 0 10px;
            background: url(../../assets/icons3.png) -52px -27px no-repeat;
        }
        .tip-txt {
            vertical-align: middle;
        }
    }
}
.rank-item {
    @include transition(.2s);
    overflow: hidden;
    border-bottom: 1px solid #e5e9ef;
    position: relative;
    &:hover {
        -webkit-box-shadow: 0 2px 5px #ccc;
        box-shadow: 0 2px 5px #ccc;
    }
    .num {
        @include wh(70px, 70px);
        position: absolute;
        top: 20px;
        left: 0;
        line-height: 70px;
        text-align: center;
        @include sc(36px, #b8c0cc);
        font-weight: 700;
        font-family: simhei;
    }
    .content {
        padding: 20px 0 0 70px;
        overflow: hidden;
        .img {
            position: relative;
            float: left;
            a {
                display: inline-block;
            }
            .cover {
                @include wh(114px, 70px);
            }
            &:hover {
                .w-later {
                    display: block;
                }
            }
        }
        .info {
            padding-bottom: 20px;
            margin-left: 130px;
            height: 70px;
            position: relative;
            .title {
                height: 20px;
                line-height: 20px;
                font-weight: 700;
                @include sc(14px, $black);
            }
            .detail {
                margin-top: 20px;
                color: $grau;
                a {
                    color: $grau;
                    &:hover {
                        span {
                            color: $blue;
                        }
                    }
                }
                .data-box {
                    width: 80px;
                    margin-right: 20px;
                    white-space: nowrap;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .b-icon {
                    @include wh(12px, 12px);
                    margin-right: 5px;
                    display: inline-block;
                    vertical-align: text-top;
                    background: url(../../assets/icons.png) no-repeat;
                    &.play {
                        background-position: -282px -90px;
                    }
                    &.view {
                        background-position: -282px -218px;
                    }
                    &.author {
                        background-position: -282px -154px;
                    }
                }
            }
            .pts {
                height: 20px;
                color: #b8c0cc;
                line-height: 20px;
                position: absolute;
                bottom: 40px;
                right: 20px;
                text-align: center;
                div {
                    font-weight: 700;
                    @include sc(16px, $blue);
                    margin-bottom: 12px;
                }
            }
        }
    }
}
.watch-later-trigger {
    display: none;
    @include wh(22px, 22px);
    position: absolute;
    right: 6px;
    bottom: 4px;
    cursor: pointer;
    background-image: url(../../assets/play.png);
}

</style>

<template>
    <div class="rank-body">
        <div class="rank-tab-wrap">
            <ul class="rank-tab">
                <router-link v-for="item in rankMenu.children" active-class="active" :to="{ path: '/ranking/all/' +item.rid+ '/'+$route.params.rankselect+'/'+$route.params.rankselect2 }" tag="li" :key="item.id">
                    {{ item.name }}
                </router-link>
            </ul>
            <div class="rank-type-dropdown">
                <dropdown :dropdownData="rankDropdown"  :selected="rankSelect" @dropselected='rankSelect'></dropdown>
                <dropdown :dropdownData="rankDropdown2"  :selected="rankSelect2" @dropselected='rankSelect2'></dropdown>
            </div>
        </div>
        <div class="rank-list-head">
            <div class="rank_tips">
                <i class="b-icon-tip"></i>
                <span class="tip-txt">{{ RankTips }}</span>
            </div>
        </div>
        <div class="rank-list-wrap">
            <keep-alive>
                <router-view @rankdata='rankdata' :key='key'></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Dropdown from '../../components/base/dropdown'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('ranking')

export default {
    created() {
    },
    components:{
        Dropdown
    },
    computed: {
        ...mapState([
            'rankMenu',
            'rankTips',
            'rankDropdown',
            'rankSelect',
            'rankDropdown2',
            'rankSelect2'
        ]),
        key() {
            return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
        },
        rankActive(){
            return this.$route.params.rankActive
        }
    },
    data () {
        return {   
        }
    },
    methods: {
        rankSelect(index) {
            this.rankselect = index
            this.$route.params.rankselect = index
            this.RouterPush()
        },
        rankSelect2(index) {
            this.rankselect2 = this.rankdropdown2[index].num
            this.$route.params.rankselect2 = this.rankdropdown2[index].num
            this.RouterPush()
        },
        RouterPush() {
            this.$router.push({
                    name: this.$route.name,
                    params: { 
                        rid:this.$route.params.rid,
                        rankselect: this.$route.params.rankselect,
                        rankselect2: this.$route.params.rankselect2
                        }
                })
        },
        rankdata(data) {
            this.RankTips = data
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.rank-tab-wrap {
    background: #edf2f9;
    padding: 0;
    border-radius: 4px;
    clear: both;
    height: 40px;
}
.rank-tab-wrap .rank-tab {
    float: left;
}
.rank-tab-wrap .rank-tab li {
    float: left;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    margin-right: 10px;
}
.rank-tab-wrap .rank-tab .active {
    color: #00a1d6;
}
.rank-type-dropdown {
    float: right;
}
.rank-tab-wrap .rank-dropdown {
    margin-top: 8px;
    margin-right: 10px;
}
.rank-list-head {
    padding: 15px 0;
}
.rank-list-head .rank_tips {
    padding: 7px 0;
    background-color: #edf2f9;
    border-radius: 4px;
}
.rank-list-head .rank_tips .b-icon-tip {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    background: url(../../assets/icons3.png) -52px -27px no-repeat;
}
.rank-list-head .rank_tips .tip-txt {
    vertical-align: middle;
}
.rank-item {
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
    overflow: hidden;
    border-bottom: 1px solid #e5e9ef;
    position: relative;
}
.rank-item:hover {
    -webkit-box-shadow: 0 2px 5px #ccc;
    box-shadow: 0 2px 5px #ccc;
}
.rank-item .num {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 20px;
    left: 0;
    line-height: 70px;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: #b8c0cc;
    font-family: simhei;
}
.rank-item .content {
    padding: 20px 0 0 70px;
    overflow: hidden;
}
.rank-item .content .img {
    position: relative;
    float: left;
}
.rank-item .content .img a {
    display: inline-block;
}
.rank-item .content .img .cover {
    width: 114px;
    height: 70px;
}
.watch-later-trigger {
    display: none;
    width: 22px;
    height: 22px;
    position: absolute;
    right: 6px;
    bottom: 4px;
    cursor: pointer;
    background-image: url(../../assets/play.png);
}
.rank-item .content .img:hover .w-later {
    display: block;
}
.rank-item .content .info {
    padding-bottom: 20px;
    margin-left: 130px;
    height: 70px;
    position: relative;
}
.rank-item .content .info .title {
    height: 20px;
    line-height: 20px;
    font-weight: 700;
    font-size: 14px;
    color: #222;
}
.rank-item .content .info .detail {
    margin-top: 20px;
    color: #99a2aa;
}
.rank-item .content .info .detail a:hover span{
    color:#00a1d6;
}
.rank-item .content .info .detail .data-box {
    width: 80px;
    margin-right: 20px;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
}
.rank-item .content .info .detail .b-icon {
    width: 12px;
    height: 12px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: text-top;
    background: url(../../assets/icons.png) no-repeat;
}
.rank-item .content .info .detail .b-icon.play {
    background-position: -282px -90px;
}
.rank-item .content .info .detail .b-icon.view {
    background-position: -282px -218px;
}
.rank-item .content .info .detail a {
    color: #99a2aa;
}
.rank-item .content .info .detail .b-icon.author {
    background-position: -282px -154px;
}
.rank-item .content .info .pts {
    height: 20px;
    color: #b8c0cc;
    line-height: 20px;
    position: absolute;
    bottom: 40px;
    right: 20px;
    text-align: center;
}
.rank-item .content .info .pts div {
    color: #00a1d6;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
}
</style>

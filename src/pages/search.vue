<template>
    <div class="contain">
        <div class="head-contain">
			<div class="search-wrap">
				<div class="">
					<div class="logo-input clearfix">
						<a href="javascript:;" class="search-logo"></a>
						<div class="search-block">
							<div class="input-wrap">
								<input v-model="searchValue" type="text" id="search-keyword" maxlength="100" autocomplete="off">
								<div class="suggest-wrap" style="display: none;">
									<div class="hotword-wrap" style="display: none;">
										<ul class="horizontal">
											<li>
												<a href="javascript:;" class="hz-text">
												世界杯
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												工作细胞
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												我不是药神
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												2018洲际赛
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												人生一串
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												第五人格
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												我的英雄学院
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												防弹少年团
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												创造101
												</a>
											</li>
											<li>
												<a href="javascript:;" class="hz-text">
												逆水寒
												</a>
											</li>
										</ul>
									</div>
									<ul class="history-wrap" style="display: none;">
										<li class="title"><span>搜索历史</span></li>
										<li class="history-li"><a class="vt-text history">我的英雄学院</a><i class="clear"></i></li>
										<li class="history-li"><a class="vt-text history">寄生兽</a><i class="clear"></i></li>
										<li class="history-li"><a class="vt-text history">K</a><i class="clear"></i></li>
										<li class="history-li"><a class="vt-text history">寄生</a><i class="clear"></i></li>
										<li class="history-li"><a class="vt-text history">RNG</a><i class="clear"></i></li>
										<li class="clearall"><a>清空搜索历史</a></li>
									</ul>
								</div>
							</div>
							<div class="search-button">
								<i class="icon-search-white"></i>
								<span class="search-text">搜索</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nav-wrap">
				<ul class="wrap clearfix">
					<router-link v-for="(item,index) in searchMenu"
						:to="{
                             path: item.path
                         }" 
                         active-class="active" tag="li" class="sub" :key="item.id" 
                         @mouseover.native="hoverBarLeft(index)" 
                         @mouseout.native="hoverBarLeave()" 
                         @click.native="setHoverIndex(index)">
						{{ item.title }}
						<span class="num" v-show="index>0">{{ item.resultNum }}</span>
					</router-link>
				</ul>
				<div class="hover-bar" :style="{'left':hoverBar+'px'}">
				</div>
			</div>
		</div>
		<router-view :allResult="allResult" :season="season"></router-view>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('search')

export default {
    created() {
        this.$axios.get('http://localhost:8080/static/search/all.json',{
            params:{
                highlight: 1,
                keyword: '我的英雄学院'
            }
        })
		.then((res)=>{
            this.setAllResult(res.data.data)
            this.getSeasonId()
		}).catch((error)=>{
			console.log(error)
        })
    },
    computed: {
		searchValue: {
            get() {
                return this.$store.state.search.searchWord
            },
            set(value) {
                this.updateSearchValue(value)
            }
        },
         ...mapState([//命名空间获取state
            'searchWord',
			'searchMenu',
            'hoverBar',
            'hoverIndex',
            'allResult',
            'season'
        ])
    },
    components:{

    },
    data () {
        return {
            
        }
    },
    methods: {
		...mapMutations([
            'updateSearchValue',
		]),
		...mapActions([
            'setHoverBar',
            'setHoverIndex',
            'setAllResult',
            'setSeason'
		]),
		hoverBarLeft(index){
            this.setHoverBar(index*114)
        },
        hoverBarLeave(){
            this.setHoverBar(this.hoverIndex*114)
        },
        getSeasonId(){
            //获取media_id
            let season = this.allResult.result.media_bangumi;
            for(let i = 0; i<season.length;i++){
                this.getSeason(i, season[i].media_id)
            }
        },
        getSeason(index,id){
            //根据media_id获取详细信息
            this.$axios.get('http://localhost:8080/static/search/season'+index+'.json',{
                params:{
                    media_id: id
                }
            })
            .then((res)=>{
                this.setSeason({
                    id: index,
                    result: res.data.result
                })
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a{
    outline: 0;
    color: #00a1d6;
    text-decoration: none;
    cursor: pointer;
}
.contain {
    width: 980px;
    margin: 0 auto;
}
.head-contain {
    padding-top: 40px;
}
.search-wrap {
    height: 44px;
    margin: 0 auto;
    position: relative;
    width: 587px;
}
.search-wrap .search-logo {
    background-image: url(../assets/search/sprite.png);
    background-position: -261px -72px;
    width: 131px;
    height: 35px;
    float: left;
    margin-top: 7px;
}
.search-wrap .search-block {
    width: 430px;
    float: left;
    margin-left: 26px;
}
.search-wrap .search-block .input-wrap {
    position: relative;
    background: #fff;
    border-radius: 4px;
    float: left;
    width: 330px;
    margin-right: 10px;
}
.search-wrap .search-block .input-wrap input {
    height: 18px;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 11px 15px;
    background: transparent;
    width: 296px;
    border: 2px solid #ccd0d7;
    border-radius: 4px;
    color: #222;
}
.search-wrap .search-block .search-button {
    cursor: pointer;
    float: left;
    color: #fff;
    background: #00a1d6;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 42px;
    text-align: center;
    width: 90px;
    border-radius: 4px;
}
.search-wrap .search-block .search-button:hover {
    background: #00b5e5;
}
.search-wrap .search-block .search-button .icon-search-white {
    background-image: url(../assets/search/sprite.png);
    background-position: -148px -327px;
    width: 18px;
    vertical-align: middle;
    margin-top: -2px;
    height: 19px;
    display: inline-block;
}
.search-wrap .search-block .search-text {
    margin-left: 7px;
}
.suggest-wrap {
    border: 1px solid #e5e9ef;
    position: absolute;
    width: 327px;
    border-radius: 4px;
    text-align: center;
    padding: 10px 0;
    color: #222;
    background: #fff;
    z-index: 100;
    overflow: hidden;
    margin-top: 5px;
    -webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
}
.suggest-wrap .horizontal {
    padding: 0 20px;
    max-height: 84px;
    overflow: hidden;
}
.suggest-wrap .horizontal .hz-text {
    border-radius: 4px;
    margin-right: 15px;
    margin-bottom: 10px;
    border: 1px solid #e5e9ef;
    color: #222;
    height: 18px;
    padding: 7px 8px;
    float: left;
    text-align: center;
    font-size: 14px;
}
.suggest-wrap .horizontal .hz-text:hover {
    border-color: #00a1d6;
    color: #00a1d6;
}
.suggest-wrap .history-wrap {
    margin-top: 20px;
    position: relative;
    padding-bottom: 20px;
}
.suggest-wrap .title {
    border-top: 1px solid #e5e9ef;
    height: 10px;
    line-height: 10px;
    margin: 0 20px;
}
.suggest-wrap .title span {
    display: inline-block;
    font-size: 12px;
    color: #99a2aa;
    padding: 0 10px;
    text-align: center;
    background: #fff;
    position: relative;
    top: -6px;
}
.suggest-wrap .history-wrap .history-li {
    position: relative;
    margin: 0;
}
.suggest-wrap .vt-text {
    height: 32px;
    display: block;
    line-height: 32px;
    font-size: 14px;
    position: relative;
    text-align: left;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    color: #222;
    padding: 0 20px;
    margin: 0 0 4px;
}
.suggest-wrap .history-wrap .history-li .clear {
    position: absolute;
    right: 20px;
    top: 10px;
    background-image: url(../assets/search/sprite.png);
    background-position: -485px -41px;
    width: 12px;
    height: 12px;
    cursor: pointer;
}
.suggest-wrap .history-wrap .clearall {
    position: absolute;
    bottom: 0;
    right: 20px;
    font-size: 12px;
    color: #00a1d6;
}
.suggest-wrap .keyword-wrap .keyword {
    padding: 0 20px;
    color: #222;
}
.suggest-wrap .keyword-wrap .keyword .suggest_high_light {
    color: #f25d8e;
}
.suggest-wrap .vt-text:hover {
    background-color: #e5e9ef;
}
.nav-wrap {
    border-bottom: 1px solid #ccd0d7;
    height: 54px;
    padding: 0 0 1px;
    margin: 18px auto 0;
    position: relative;
}
.nav-wrap .wrap, .nav-wrap .wrap>.sub {
    height: 100%;
    position: relative;
}
.nav-wrap .wrap>.sub {
    float: left;
    line-height: 54px;
    text-align: center;
    cursor: pointer;
    width: 39px;
    padding: 0;
    font-size: 16px;
    padding-right: 75px;
}
.nav-wrap .wrap>.sub:last-child {
    padding-right: 0;
}
.nav-wrap .wrap>.sub.active, .nav-wrap .wrap>.sub:hover {
    color: #00a1d6;
}
.nav-wrap .wrap>.sub>span {
    position: absolute;
    margin-left: 6px;
    font-size: 12px;
    color: #6d757a;
}
.nav-wrap .hover-bar {
    position: absolute;
    height: 2px;
    background-color: #00a1d6;
    width: 39px;
    bottom: -1px;
    -webkit-transition: left .2s;
    -o-transition: left .2s;
    transition: left .2s;
}

</style>

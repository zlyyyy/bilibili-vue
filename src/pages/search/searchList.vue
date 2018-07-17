<template>
    <div class="body-contain">
		<div class="all-contain">
			<div class="filter-wrap">
				<ul class="filter-type clearfix order" style="">
					<li class="filter-item active"><a href="javascript:;">综合排序</a></li>
					<li class="filter-item"><a href="javascript:;">最多点击</a></li>
					<li class="filter-item"><a href="javascript:;">最新发布</a></li>
					<li class="filter-item"><a href="javascript:;">最多弹幕</a></li>
					<li class="filter-item"><a href="javascript:;">最多收藏</a></li>
				</ul>
				<ul class="filter-type clearfix duration" style="">
					<li class="filter-item active"><a href="javascript:;">全部时长</a></li>
					<li class="filter-item"><a href="javascript:;">10分钟以下</a></li>
					<li class="filter-item"><a href="javascript:;">10-30分钟</a></li>
					<li class="filter-item"><a href="javascript:;">30-60分钟</a></li>
					<li class="filter-item"><a href="javascript:;">60分钟以上</a></li>
				</ul>
				<ul class="filter-type clearfix tids_1" style="">
					<li class="filter-item active"><a href="javascript:;">全部分区</a></li>
					<li class="filter-item"><a href="javascript:;">动画</a></li>
					<li class="filter-item"><a href="javascript:;">番剧相关</a></li>
					<li class="filter-item"><a href="javascript:;">国创</a></li>
					<li class="filter-item"><a href="javascript:;">音乐</a></li>
					<li class="filter-item"><a href="javascript:;">舞蹈</a></li>
					<li class="filter-item"><a href="javascript:;">游戏</a></li>
					<li class="filter-item"><a href="javascript:;">科技</a></li>
					<li class="filter-item"><a href="javascript:;">生活</a></li>
					<li class="filter-item"><a href="javascript:;">鬼畜</a></li>
					<li class="filter-item"><a href="javascript:;">时尚</a></li>
					<li class="filter-item"><a href="javascript:;">广告</a></li>
					<li class="filter-item"><a href="javascript:;">娱乐</a></li>
					<li class="filter-item"><a href="javascript:;">影视</a></li>
					<li class="filter-item"><a href="javascript:;">纪录片</a></li>
					<li class="filter-item"><a href="javascript:;">电影</a></li>
					<li class="filter-item"><a href="javascript:;">电视剧</a></li>
					<!----><!---->
				</ul>
				<a class="fold up" style="">收起筛选
				<i class="arrow-up"></i></a><a class="fold down" style="display: none;">更多筛选
				<i class="arrow-down"></i></a>
				<div class="switch-wrap">
					<div class="aver type active">
						<i class="icon-aver"></i>
					</div>
					<div class="imgleft type">
						<i class="icon-imgleft"></i>
					</div>
				</div>
			</div>
			<div class="result-wrap clearfix">
				<ul class="bangumi-list all-class" >
					<li class="synthetical" v-for="(item,index) in allResult.media_bangumi">
						<div class="cardBangumibox">
							<div class="left-img">
								<a href="#" target="_blank" title="">
									<div class="modal-box">
										<div class="bangumi-tag vip">
											会员专享
										</div>
										<div class="lazy-img">
											<img alt="" v-lazy="item.cover">
										</div>
									</div>
								</a>
							</div>
							<div class="right-info">
								<div class="headline">
									<span class="bangumi-label">番剧</span>
									<a href="#" target="_blank" title="" class="title" v-html="item.title">
									</a>
								</div>
								<div class="info-items">
									<div class="top-info">
										<div class="des lf">
											风格：
											<span class="type-s">{{item.styles}}</span>
										</div>
										<div class="des">
											地区：
											<span class="type-s">{{item.areas}}</span>
										</div>
										<div class="des lf">
											开播时间：
											<span class="type-s">{{timeChange(item.pubtime)}}</span>
										</div>
										<div class="des cv">
											声优：
											<span :title="item.cv" class="type-s">
												{{item.cv}}
											</span>
										</div>
									</div>
									<div :title="item.desc" class="des info">
										简介：{{item.desc}}
									</div>
								</div>
								<div class="nav">
									<div class="main-container">
										<div class="nav-container">
											<div class="ep-card">
												<div class="single-box">
													<ul class="ep-box clearfix close">
														<li class="ep-sub" v-for="(item,index) in season[index].episodes">
															<a href="#" target="_blank">
																<div :title="item.index+' '+item.index_title" class="ep-item">
																	{{item.index}}
																</div>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="score">
									<div class="score-num">
										{{item.media_score.score}}
										<span class="fen">分</span>
									</div>
									<div class="user-count">
										{{userCount(item.media_score.user_count)+'人点评'}}
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="card-more">
						共找到4部相关番剧，
						<a href="#" class="">点击查看</a>
						&gt;
					</li>
				</ul>
				<ul class="video-contain clearfix">
					<li class="video matrix">
						<a href="#" target="_blank" title="（我的英雄学院）关于雄英内奸的猜想...">
							<div class="img">
								<div class="lazy-img">
									<img alt="" src="//i2.hdslb.com/bfs/archive/b3bf2104f33c1c300c457b9e04fe4bd73b66672b.jpg@320w_200h.webp">
								</div>
								<span class="so-imgTag_rb">
									21:03
								</span>
								<div class="watch-later-trigger watch-later">
								</div>
							</div>
						</a>
						<div class="info">
							<div class="headline clearfix">
								<span class="type avid">av25634478</span><span class="type hide">综合</span><a title="（我的英雄学院）关于雄英内奸的猜想..." href="#" target="_blank" class="title">（<em class="keyword">我的英雄</em><em class="keyword">学院</em>）关于雄英内奸的猜想...</a>
							</div>
							<div class="des hide">
								转自：https://www.youtube.com/watch?v=Opp8AoDsPWA
							</div>
							<div class="tags">
								<span title="观看" class="so-icon watch-num">
									<i class="icon-playtime"></i>
									5.4万
								</span>
								<span title="弹幕" class="so-icon hide">
									<i class="icon-subtitle"></i>
									919
								</span>
								<span title="上传时间" class="so-icon time">
									<i class="icon-date"></i>
									2018-06-26
								</span>
								<span title="up主" class="so-icon">
									<i class="icon-uper"></i>
									<a href="#" target="_blank" class="up-name">搬运工233</a>
								</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('notFound')

export default {
	props: {
		allResult: {
			type: [Object,Array],
            default: () => []
		},
		season: {
			type: [Object,Array],
            default: () => []
		}
	},
    created() {

    },
    computed: {
     	...mapState([//命名空间获取state
			'error',
			'randomNum'
		])
    },
    components:{

    },
    data () {
        return {
                    
        }
    },
    methods: {
		timeChange(timestamp){
			let Y,M,D,h,m,s;
			var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			Y = date.getFullYear() + '-';
			M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			D = date.getDate() <10 ? '0'+date.getDate() : date.getDate() + ' ';
			h = date.getHours() + ':';
			m = date.getMinutes() + ':';
			s = date.getSeconds();
			return Y+M+D;
		},
		userCount(num){
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
<style>
/* 筛选 */
.filter-wrap {
    height: auto;
    padding: 20px 0 10px;
    position: relative;
    border-bottom: 1px solid #e5e9ef;
    display: table;
    width: 100%;
}
.filter-wrap .filter-type {
    display: block;
    overflow: hidden;
    margin-bottom: 10px;
}
.filter-wrap .filter-item {
    float: left;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
    margin-right: 15px;
}
.filter-wrap .filter-item a {
    color: #222;
    font-size: 12px;
    line-height: 20px;
}
.filter-wrap .filter-item:not(.active):hover a {
    color: #00a1d6;
}
.filter-wrap .filter-item.active {
    background-color: #00a1d6;
}
.filter-wrap .filter-item.active a {
    color: #fff;
}
.filter-wrap .filter-type.tids_1 {
    position: relative;
}
.filter-wrap .filter-type.tids_1>.filter-item {
    margin-right: 9px;
}
.filter-wrap .fold {
    position: absolute;
    border-radius: 4px;
    line-height: 24px;
    font-size: 12px;
    color: #6d757a;
    right: 0;
    display: inline-block;
    width: 74px;
    text-align: center;
}
.filter-wrap .fold.up {
    bottom: 18px;
}
.filter-wrap .fold:hover {
    background-color: #e5e9ef;
    color: #00a1d6;
}
.arrow-down, .arrow-up {
    display: inline-block;
    width: 12px;
    height: 6px;
    vertical-align: middle;
    margin-top: -2px;
    margin-left: 3px;
}
.arrow-up {
    background-image: url(../../assets/search/sprite.png);
    background-position: -442px -403px;
}
.filter-wrap .fold.down {
    left: 416px;
    top: 18px;
}
.arrow-down {
    background-image: url(../../assets/search/sprite.png);
    background-position: -442px -439px;
}
.switch-wrap {
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 999;
}
.all-contain .switch-wrap {
    top: 20px;
}
.switch-wrap .type {
    position: absolute;
    top: 0;
    cursor: pointer;
}
.switch-wrap .aver {
    right: 26px;
}
.switch-wrap i {
    display: inline-block;
    background-image: url(../../assets/search/sprite.png);
    width: 16px;
    height: 16px;
}
.switch-wrap .aver.active:hover i, .switch-wrap .aver.active i {
    background-position: -206px -139px;
}
.switch-wrap .imgleft {
    right: 0;
}
.switch-wrap i.icon-imgleft {
    background-position: -148px -376px;
}
.result-wrap {
    padding-bottom: 10px;
}
.all-class {
    border-bottom: 1px solid #e5e9ef;
}
.synthetical {
    margin-right: -10px;
    height: 120px;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
    width: 878px;
    padding: 15px 0 15px 102px;
    position: relative;
    border-bottom: 1px solid #e5e9ef;
}
.synthetical .left-img {
    position: absolute;
    left: 0;
    top: 15px;
    height: 120px;
    width: 90px;
}
.synthetical .headline {
    height: 24px;
    font-size: 0;
}
.synthetical .title {
    display: inline-block;
    height: 24px;
    max-width: 600px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    margin-right: 6px;
    font-weight: 700;
    line-height: 24px;
    font-size: 16px;
    color: #222;
}
.synthetical .des {
    margin-top: 14px;
    margin-bottom: 7px;
    width: 762px;
    height: 36px;
    color: #99a2aa;
    font-size: 12px;
    line-height: 18px;
}
.all-class .movie-item,
.all-class .synthetical {
    border-bottom: none;
}
.bangumi-list .synthetical {
    height: auto;
}
.bangumi-list .synthetical .cardBangumibox {
    min-height: 168px;
}
.bangumi-list .synthetical .left-img {
    width: 126px;
    height: 168px;
}
.bangumi-list .synthetical .cardBangumibox .modal-box {
    top: 0;
    height: 0;
    position: absolute;
    width: 100%;
    height: 100%;
}
.bangumi-list .synthetical .cardBangumibox .modal-box .bangumi-tag {
    border-radius: 0 4px 0 4px;
    width: 56px;
    height: 21px;
	line-height: 21px;
    text-align: center;
    position: absolute;
    right: 0;
    background: #ffa726;
    color: #fff;
}
.bangumi-list .synthetical .cardBangumibox .modal-box .bangumi-tag.vip {
    background: #f25d8e;
}
.bangumi-list .synthetical .cardBangumibox .modal-box .lazy-img img {
	display: block;
	width: 100%;
    min-height: 100%;
    border-radius: 4px;
}
.bangumi-list .right-info {
    margin-left: 40px;
}
.bangumi-list .synthetical .headline {
    margin-bottom: 15px;
    margin-top: 3px;
    font-size: medium;
}
.bangumi-list .synthetical .headline .bangumi-label {
    display: inline-block;
    height: 22px;
    padding: 0 10px;
    border: 1px solid #979797;
    color: #979797;
    text-align: center;
    line-height: 24px;
    border-radius: 100px;
    margin-right: 12px;
    font-size: 12px;
}
.keyword {
    color: #f25d8e;
}
.synthetical .title .keyword {
    font-weight: 700;
}
.bangumi-list .right-info .info-items {
    height: 80px;
}
.bangumi-list .right-info .info-items .top-info {
    width: 90%;
}
.bangumi-list .synthetical .des {
    overflow: hidden;
    display: inline-block;
    width: 35%;
    height: auto;
    margin-top: 0;
    line-height: 17px;
    margin-bottom: 0;
    color: #b0b7bd;
}
.bangumi-list .synthetical .des .type-s {
    color: #222;
}
.bangumi-list .synthetical .des.info {
    width: 100%;
    display: block;
    height: 34px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.bangumi-list .synthetical .des.cv {
    height: 17px;
    line-height: 17px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.main-container {
    position: relative;
}
.nav-container .ep-card {
    overflow: hidden;
}
.nav-container .single-box .ep-box {
    margin-left: -7px;
    padding-top: 10px;
    z-index: -1;
}
.nav-container .single-box .ep-sub {
    float: left;
    cursor: pointer;
}
.nav-container .single-box .ep-item {
    margin-top: 1px;
    display: inline-block;
    width: 40px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #e5e9ef;
    text-align: center;
    line-height: 32px;
    padding: 0 5px;
    overflow: hidden;
    margin-left: 7px;
    color: #000;
}
.nav-container .single-box .ep-item:hover {
    background: #00a1d6;
    color: #fff;
}
.bangumi-list .synthetical .score {
    position: absolute;
    right: 0;
    top: 20px;
    height: auto;
    width: 100px;
}
.bangumi-list .synthetical .score .score-num {
    color: #ffa726;
    font-size: 20px;
    position: absolute;
    text-align: right;
    top: 8px;
    right: 0;
}
.bangumi-list .synthetical .score .score-num .fen {
    font-size: 14px;
}
.bangumi-list .synthetical .score .user-count {
    position: absolute;
    top: 34px;
    text-align: right;
    font-size: 14px;
    right: 0;
}
.card-more {
    padding-bottom: 15px;
    padding-right: 8px;
    line-height: 12px;
    color: #99a2aa;
    text-align: right;
}
.video-contain {
	display: block;
    position: relative;
	overflow: hidden;
}
.video.matrix {
    height: 208px;
    width: 168px;
    border: 1px solid #e5e9ef;
    border-radius: 4px;
    float: left;
    margin-right: 32px;
    margin-top: 20px;
}
.video.matrix .img {
    height: 100px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}
.video .so-imgTag_rb {
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: 18px;
    padding: 0 5px;
    color: #fff;
    background-color: #333;
    background-color: rgba(0,0,0,.5);
    border-top-left-radius: 4px;
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
.video .img:hover .watch-later {
    display: block;
}
.video .img:hover .so-imgTag_rb {
    display: none;
}
.video.matrix .info {
    padding: 8px 10px 0;
}
.video.matrix .headline {
    margin-bottom: 12px;
    height: 40px;
    overflow: hidden;
}
.video.matrix .type.avid {
    display: none;
}
.video.matrix .hide {
    display: none;
}
.video.matrix .title {
    font-size: 12px;
    line-height: 20px;
    color: #222;
}
.so-icon {
    display: inline-block;
    font-size: 12px;
    height: 12px;
    vertical-align: text-top;
    line-height: 12px;
    padding-left: 16px;
    position: relative;
    color: #99a2aa;
}
.so-icon i {
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(//s1.hdslb.com/bfs/static/jinkela/search/images/sprite-690be8a6ea.png);
    width: 11px;
    height: 11px;
}
.so-icon i.icon-subtitle {
    background-image: url(//s1.hdslb.com/bfs/static/jinkela/search/images/sprite-690be8a6ea.png);
    background-position: -442px -124px;
    width: 11px;
    height: 11px;
}
.so-icon i.icon-date {
    background-position: -442px -165px;
}
.so-icon i.icon-uper {
    background-position: -442px -83px;
}
.video .so-icon.watch-num {
    white-space: nowrap;
}
.video .so-icon>a {
    color: #99a2aa;
    cursor: pointer;
}
.video .so-icon .up-name {
    display: inline-block;
    max-width: 132px;
    height: 16px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.video.matrix .info .so-icon {
    margin-right: 8px;
    margin-bottom: 12px;
    float: left;
}
.video.matrix .info .so-icon.watch-num {
    width: 41px;
    overflow: inherit;
}
.video.matrix .info .time {
    margin-right: 0;
    width: 67px;
}
</style>

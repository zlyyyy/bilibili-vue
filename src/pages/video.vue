<template>
    <div>
        <div class="app-body bili-wrapper">
            <div class="video-info-m">
                <h1 title="【Mili】Summoning 101（召唤魔法101入门篇）">
                    <span>【Mili】Summoning 101（召唤魔法101入门篇）</span>
                </h1>
                <div class="tm-info tminfo">
                    <span class="crumb">
                        <a href="//www.bilibili.com">主页</a>&gt; 
                    </span>
                    <span class="crumb">
                        <a href="//www.bilibili.com/v/music/">音乐</a> &gt; 
                    </span>
                    <span class="crumb">
                        <a href="//www.bilibili.com/v/music/coordinate/">三次元音乐</a>
                    </span>
                    <time>2018-05-06 19:00:12</time>
                    <a class="btn-appeal">稿件投诉</a>
                </div>
                <div class="number">
                    <span title="总播放数13253" class="v play">1.3万</span>
                    <span title="总弹幕数220" class="v dm">220</span>
                    <span class="line"></span>
                    <span report-id="coinbtn1" title="投硬币枚数2312" class="u coin">
                        <i class="c-icon-move" style="display:;"></i>
                        <b class="c-icon-moved" style="background-position:-2340px -60px;display:none;"></b>
                        硬币 2312
                    </span>
                    <span report-id="collect1" title="收藏人数1189" class="u fav">
                        <i class="f-icon-move" style="background-position:0px 0px;display:;"></i>
                        <b class="f-icon-moved" style="background-position:-1740px -60px;display:none;"></b>
                        收藏 1189
                    </span>
                </div>
            </div>
            <div class="up-info-m">
                <div class="u-face fl">
                    <a href="https://live.bilibili.com/11365" target="_blank" class="live-online">
                        <span>轮播中</span>
                    </a>
                    <a href="//space.bilibili.com/777536" target="_blank" report-id="head" class="a">
                        <img src="//i0.hdslb.com/bfs/face/2996e22a24eed2d7767e452627a9130207defe6a.jpg@68w_68h.jpg" width="68" height="68" class="up-face">
                        <i title="个人认证" class="auth p-auth"></i>
                    </a>
                </div>
                <div class="info">
                    <div class="user clearfix">
                        <a href="//space.bilibili.com/777536" target="_blank" class="name is-vip">LexBurner</a>
                        <a href="//message.bilibili.com/#whisper/mid777536" target="_blank" class="message icon">发消息</a>
                    </div>
                    <div class="sign static">
                        <span>
                            新浪微博：http://weibo.com/lexburner
                        </span>
                    </div>
                    <div class="number clearfix">
                        <span title="投稿数233">投稿：233</span>
                        <span title="粉丝数3067073">粉丝：306.7万</span>
                    </div>
                    <div class="btn followe">
                        <a report-id="follow1" class="bi-btn b-gz">
                            <span class="gz">+ 关注</span>
                            <span class="ygz">已关注</span>
                            <span class="qxgz">取消关注</span>
                        </a>
                        <a report-id="charge" class="bi-btn b-cd elecrank-btn">
                            <span class="wtcd">为TA充电</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="player-box">
            <div class="bofangqi bili-wrapper">
                <iframe src="https://secure.bilibili.com/secure,cid=279786&aid=170001" width="100%" height="585"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        
    },
    components:{

    },
    data () {
        return {
                    
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.video-info-m {
    padding: 5px 0 8px;
    float: left;
    width: 640px;
    position: relative;
    overflow: hidden;
}
.video-info-m h1 {
    display: block;
    font-size: 16px;
    margin-right: 80px;
    color: #525659;
    font-weight: 700;
    overflow: hidden;
    height: 24px;
    line-height: 24px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    font-weight: 400;
    white-space: nowrap;
    padding: 8px 0;
    font-size: 18px;
}
.video-info-m .tm-info {
    position: relative;
    width: 100%;
    height: 16px;
    line-height: 16px;
    color: #666;
    font-size: 12px;
    margin-top: 6px;
}
.video-info-m .tm-info a {
    color: #99a2aa;
}
.video-info-m .tm-info .btn-appeal, .video-info-m .tm-info time {
    color: #99a2aa;
    margin-left: 32px;
}
.video-info-m .tm-info .btn-appeal {
    cursor: pointer;
}
.video-info-m .number span {
    margin-right: 30px;
    display: inline-block;
}
.video-info-m .number .v:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 28px;
    height: 28px;
    margin-top: -3px;
    margin-right: 3px;
    background: url('../assets/icons.png');
}
.video-info-m .number .play:before {
    background-position: -659px -210px;
}
.video-info-m .number .dm:before {
    background-position: -659px -275px;
}
.video-info-m .number .rank:before {
    background-position: -660px -1682px;
}
.video-info-m .number .line {
    border-left: 1px solid #eee;
    height: 20px;
    vertical-align: middle;
    margin-right: 5px;
}
.video-info-m .number .u {
    cursor: pointer;
}
.video-info-m .number .coin {
    margin-right: 5px;
}
.video-info-m .number .u b, .video-info-m .number .u i {
    display: inline-block;
    vertical-align: middle;
    width: 45px;
    height: 60px;
    margin-top: -3px;
    margin-right: 3px;
}
.video-info-m .number .coin i {
    background: url('../assets/anim-coin-small.png');
}
.video-info-m .number .coin b {
    background: url('../assets/anim-coin-small.png');
    background-position: -2340px -60px;
}
.video-info-m .number .fav i {
    background: url('../assets/anim-collect.png');
    background-position: 0px 0px;
}
.up-info-m {
    width: 315px;
    margin: 15px 0;
    float: right;
    background: #fff;
    position: relative;
}
.up-info-m .u-face {
    width: 68px;
    height: 68px;
    position: relative;
}
.up-info-m .u-face .live-online {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: -84px;
    width: 77px;
    height: 24px;
    white-space: nowrap;
    color: #f25d8e;
    background-image: url('../assets/lb.gif');
    background-repeat: no-repeat;
}
.up-info-m .u-face .live-online span {
    margin-left: 22px;
    height: 24px;
    line-height: 24px;
}
.up-info-m .u-face .a {
    display: block;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    overflow: hidden;
}
.up-info-m .u-face .up-face {
    background: #f9f9f9;
}
.up-info-m .u-face .auth {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
    top: 50px;
    background: url('../assets/user-auth.png');
    background-repeat: no-repeat;
    z-index: 3;
}
.up-info-m .u-face .p-auth {
    background-position: -38px -53px;
}
.up-info-m .info {
    width: 226px;
    margin-left: 89px;
}
.up-info-m .info .user {
    height: 22px;
}
.up-info-m .info .user .name {
    display: inline-block;
    float: left;
    max-width: 150px;
    font-size: 14px;
    word-wrap: break-word;
    overflow: hidden;
    word-break: break-all;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    height: 20px;
    color: #00a1d6;
    white-space: nowrap;
}
.up-info-m .info .user .name.is-vip, .up-info-m .info .user .name:hover {
    color: #fb7299;
}
.up-info-m .info .user .message {
    float: right;
    color: #6d757a;
    background-repeat: no-repeat;
    background-position: -272px -2007px;
    padding-left: 30px;
    line-height: 21px;
}
.up-info-m .sign {
    word-break: break-all;
    line-height: 20px;
    min-height: 40px;
    -webkit-transition: all .6s;
    -o-transition: all .6s;
    transition: all .6s;
    position: relative;
}
.up-info-m .sign.static {
    height: 40px;
    overflow: hidden;
}
.up-info-m .number {
    color: #99a2aa;
    margin: 3px 0;
}
.up-info-m .number span {
    float: left;
    width: 100px;
    line-height: 23px;
}
.up-info-m .btn {
    margin-top: 10px;
    white-space: nowrap;
}
.bi-btn {
    display: inline-block;
    background: #00a1d6;
    color: #fff;
    font-size: 14px;
    padding: 4px 18px;
    border-radius: 4px;
    transition: all .3s;
    user-select: none;
    border: 1px solid #00a1d6;
    text-align: center;
    cursor: pointer;
}
.up-info-m .btn .b-gz {
    padding: 4px 53px;
    height: 20px;
    line-height: 20px;
}
.up-info-m .btn .b-gz .gz {
    display: block;
}
.up-info-m .btn .b-gz .qxgz, .up-info-m .btn .b-gz .ygz {
    display: none;
}
.up-info-m .btn .b-cd {
    margin-left: 12px;
    padding: 4px;
    width: 52px;
    height: 20px;
    line-height: 20px;
    background: #fff;
    border-color: #f25d8e;
    color: #f25d8e;
}
.up-info-m .btn .b-cd .cd {
    display: block;
}
.up-info-m .btn .b-cd .wtcd {
    display: none;
}
.player-box {
    position: relative;
    border-top: 1px solid #e5e9ef;
    border-bottom: 1px solid #e5e9ef;
    background-color: #f6f9fa;
    padding: 22px 0;
    text-align: center;
}
.bofangqi {
    min-height: 688px;
}
</style>

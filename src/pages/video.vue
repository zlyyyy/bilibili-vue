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
                    <a href="//space.bilibili.com/23340150" target="_blank" class="a">
                        <img src="//i2.hdslb.com/bfs/face/d3722ba723a860c3e436a2191000d82291d2a2e2.jpg@68w_68h.jpg" width="68" height="68" class="up-face">
                    </a>
                </div>
                <div class="info">
                    <div class="user clearfix">
                        <a href="//space.bilibili.com/23340150" target="_blank" class="name">ProjectMili</a>
                        <a href="//message.bilibili.com/#whisper/mid23340150" target="_blank" class="message icon">发消息</a>
                    </div>
                    <div class="sign static">
                        <span>这里是Mili的官方号。用于发表Mili的歌曲。管理人是momocashew。</span><!---->
                    </div>
                    <div class="number clearfix">
                        <span title="投稿数16">投稿：16</span><span title="粉丝数33332">粉丝：3.3万</span>
                    </div>
                    <div class="btn followe">
                        <a report-id="follow1" class="bi-btn b-gz"><span class="gz">+ 关注</span><span class="ygz">已关注</span><span class="qxgz">取消关注</span></a><!---->
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
    background: url(//static.hdslb.com/images/base/icons.png);
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
    background: url(//s1.hdslb.com/bfs/static/jinkela/videoplay/images/anim-coin-small.png);
}
.video-info-m .number .coin b {
    background: url(//s1.hdslb.com/bfs/static/jinkela/videoplay/images/anim-coin-small.png);
    background-position: -2340px -60px;
}
.video-info-m .number .fav i {
    background: url(//s1.hdslb.com/bfs/static/jinkela/videoplay/images/anim-collect.png);
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
</style>

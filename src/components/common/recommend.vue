<template>
    <div class="recommend-module">
        <div class="groom-module home-card">
            <a href="/video/av22582031/" target="_blank" title="【OVERLORD】异世界最强战力白金龙王，其隐藏着可怕的实力">
                <img src="//i1.hdslb.com/bfs/archive/0f67905673955ea3223ff2285baa8cc2e7906e38.jpg" alt="【OVERLORD】异世界最强战力白金龙王，其隐藏着可怕的实力" width="160" height="100" class="pic">
                <div class="card-mark">
                    <p class="title">【OVERLORD】异世界最强战力白金龙王，其隐藏着可怕的实力</p>
                    <p class="author">up主：雪和风</p>
                    <p class="play">播放：6929</p>
                </div>
            </a>
            <div class="watch-later-trigger w-later"></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend-module{
    height: 220px;
    position: relative;
    overflow: hidden;
}
.groom-module{
    float: left;
    margin: 0 0 20px 20px;
    width: 160px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
}
.groom-module .pic {
	width: 160px;
	height: 100px
}
.groom-module .type-name {
	position: absolute;
	top: 0;
	right: 0;
	margin: .5em;
	padding: 0 5px;
	height: 20px;
	line-height: 20px;
	border-radius: 4px;
	color: #fff;
	font-style: normal;
	background-color: #00a1d6;
	background-color: rgba(0,161,214,.8)
}
.groom-module .card-mark {
	position: absolute;
	left: 0;
	top: 68px;
	width: 150px;
	height: 100%;
	font-size: 12px;
	height: 20px;
	line-height: 20px;
	padding: 10px 5px;
	overflow: hidden;
	background: #000;
	background: -webkit-linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
	background: -o-linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
	background: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(20%,rgba(0,0,0,.1)),color-stop(35%,rgba(0,0,0,.2)),color-stop(65%,rgba(0,0,0,.6)),to(rgba(0,0,0,.9)));
	background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9))
}
.groom-module .card-mark .title {
	color: #fff;
	height: 40px;
    font-size: 12px;
	overflow: hidden;
	margin-bottom: 5px;
    white-space: nowrap;
    text-overflow:ellipsis; 
    line-height: 20px;
}
.groom-module .card-mark .author,.groom-module .card-mark .play {
	opacity: 0;
	color: #99a2aa;
    font-size: 12px;
	height: 20px;
	line-height: 20px;
	overflow: hidden;
	-webkit-transition: all .6s;
	-o-transition: all .6s;
	transition: all .6s
}
.groom-module:hover .card-mark {
	top: 0;
	height: 100%;
	background: rgba(0,0,0,.7)
}
.groom-module:hover .card-mark .title{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    white-space: inherit;
}
.groom-module:hover .card-mark .author,.groom-module:hover .card-mark .play {
	opacity: 1
}
.groom-module:hover .w-later {
	display: block
}
</style>

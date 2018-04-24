<template>
    <div class="app-footer">
        <div class="footer-cnt">
            <ul class="boston-postcards">
                <li v-for="card in postcards">
                    <div class="tips">{{ card.tip }}</div>
                    <div class="cards" v-for="item in card.items">
                        <a>{{ item.title }}</a>
                    </div>
                </li>
                <li>
                    <div class="block fr">
                        <a target="_blank" href="//app.bilibili.com/">
                            <div class="phone">
                                <div class="pic" id="footer-mobile-app">
                                </div>
                                <em>手机端下载</em>
                                <div class="qrcode-box-wrp">
                                    <div class="qrcode-box qrcode-app">
                                        <div class="qrcode-box-arrow">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a target="_blank" href="http://weibo.com/bilibiliweb">
                            <div class="weibo">
                                <div class="pic">
                                </div>
                                <em>新浪微博</em>
                                <div class="qrcode-box-wrp">
                                    <div class="qrcode-box qrcode-weibo">
                                        <div class="qrcode-box-arrow">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a id="weixin">
                            <div class="weixin">
                                <div class="pic">
                                </div>
                                <em>官方微信</em>
                                <div class="qrcode-box-wrp bigvip-qrcode">
                                    <div class="qrcode-box qrcode-weixin">
                                        <div class="qrcode-box-arrow">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <div class="copyright">
                <p>Copyright © 2006-2018 zlyuuuuuuuuuui</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        postcards: [
            {
                tip: 'bilibili',
                items: [
                    {
                        title: '关于我们',
                        href: ''
                    },
                    {
                        title: '联系我们',
                        href: ''
                    },
                    {
                        title: '加入我们',
                        href: ''
                    },
                    {
                        title: '友情链接',
                        href: ''
                    },
                    {
                        title: '官方认证',
                        href: ''
                    },
                    {
                        title: 'Investor Relations',
                        href: ''
                    }
                ]
            },
            {
                tip: '传送门',
                items: [
                    {
                        title: '帮助中心',
                        href: ''
                    },
                    {
                        title: '高级弹幕',
                        href: ''
                    },
                    {
                        title: '活动专题页',
                        href: ''
                    },
                    {
                        title: '侵权申诉',
                        href: ''
                    },
                    {
                        title: '分院帽计划',
                        href: ''
                    },
                    {
                        title: '活动中心',
                        href: ''
                    },
                    {
                        title: '用户反馈论坛',
                        href: ''
                    },
                    {
                        title: '壁纸站',
                        href: ''
                    },
                    {
                        title: '名人堂',
                        href: ''
                    },
                ]
            },
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-footer{
    width: 100%;
    padding: 60px 0 10px 0;
    text-align: center;
    font-size: 12px;
    background-color: #f6f9fa;
}
.app-footer a {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    color: #222;
}
.app-footer a:hover {
    color: #00a1d6;
}
.app-footer .footer-cnt {
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
}
.app-footer .boston-postcards {
    list-style: none;
    margin: 0 auto;
    display: flex;
    margin-bottom: 30px;
}
.app-footer .boston-postcards li {
    flex: 1;
    text-align: left;
    list-style: none;
    height: 112px;
    line-height: 1;
    border-left: solid 1px #e5e9ef;
    font-size: 14px;
    padding: 0 0 0 25px;
}
.app-footer .boston-postcards li:first-child {
    border-left: 0;
    padding: 0 20px 0 0;
}
.app-footer .boston-postcards li:last-child {
    padding: 0 20px 0 25px;
}
.app-footer .boston-postcards li .tips {
    margin-bottom: 22px;
    color: #99a2aa;
}
.app-footer .boston-postcards li .cards {
    float: left;
    width: 33%;
    position: relative;
    margin-bottom: 16px;
}
.app-footer .block {
    position: relative;
    width: 100%;
}
.app-footer .block div {
    position: relative;
    width: 82px;
    height: 80px;
    float: left;
}
.app-footer .block .pic {
    position: relative;
    margin-left: 11px;
    width: 60px;
    height: 60px;
}
.app-footer .block .phone .pic {
    background: url(//static.hdslb.com/images/base/icons.png) no-repeat -1024px -194px;
}
.app-footer .block .weibo .pic {
    background: url(//static.hdslb.com/images/base/icons.png) no-repeat -1024px -322px;
}
.app-footer .block .weixin .pic {
    color: #222;
    background: url(//static.hdslb.com/images/base/icons.png) no-repeat -1024px -66px;
}
.app-footer .block em {
    position: absolute;
    width: 82px;
    line-height: 14px;
    float: left;
    bottom: 0;
    left: 0;
    text-align: center;
    font-weight: normal;
}
.app-footer .block .qrcode-box-wrp {
    width: 130px;
    height: 130px;
    background: #fff;
    margin-top: -146px;
    right: -23px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: .2s;
    z-index: 100000;
}
.app-footer .block .qrcode-box {
    width: 128px;
    height: 128px;
    border: 1px solid #e5e9ef;
}
.app-footer .copyright p{
    line-height: 30px;
    color: #99a2aa;
}
</style>

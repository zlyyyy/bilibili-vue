<template>
  <div class="app-footer">
    <div class="footer-cnt">
      <ul class="boston-postcards">
        <li
          v-for="(card, index) in postcards"
          :key="`boston_postcards_${index}`"
        >
          <div class="tips">{{ card.tip }}</div>
          <div
            class="cards"
            v-for="(item, ind) in card.items"
            :key="`boston_postcards_card_${ind}`"
          >
            <a>{{ item.title }}</a>
          </div>
        </li>
        <li>
          <div class="block fr">
            <a target="_blank" href="//app.bilibili.com/">
              <div class="phone">
                <div class="pic" id="footer-mobile-app"></div>
                <em>手机端下载</em>
                <div class="qrcode-box-wrp">
                  <div class="qrcode-box qrcode-app">
                    <div class="qrcode-box-arrow"></div>
                  </div>
                </div>
              </div>
            </a>
            <a target="_blank" href="http://weibo.com/bilibiliweb">
              <div class="weibo">
                <div class="pic"></div>
                <em>新浪微博</em>
                <div class="qrcode-box-wrp">
                  <div class="qrcode-box qrcode-weibo">
                    <div class="qrcode-box-arrow"></div>
                  </div>
                </div>
              </div>
            </a>
            <a id="weixin">
              <div class="weixin">
                <div class="pic"></div>
                <em>官方微信</em>
                <div class="qrcode-box-wrp bigvip-qrcode">
                  <div class="qrcode-box qrcode-weixin">
                    <div class="qrcode-box-arrow"></div>
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
  data() {
    return {
      postcards: [
        {
          tip: "bilibili",
          items: [
            {
              title: "关于我们",
              href: ""
            },
            {
              title: "联系我们",
              href: ""
            },
            {
              title: "加入我们",
              href: ""
            },
            {
              title: "友情链接",
              href: ""
            },
            {
              title: "官方认证",
              href: ""
            },
            {
              title: "Investor Relations",
              href: ""
            }
          ]
        },
        {
          tip: "传送门",
          items: [
            {
              title: "帮助中心",
              href: ""
            },
            {
              title: "高级弹幕",
              href: ""
            },
            {
              title: "活动专题页",
              href: ""
            },
            {
              title: "侵权申诉",
              href: ""
            },
            {
              title: "分院帽计划",
              href: ""
            },
            {
              title: "活动中心",
              href: ""
            },
            {
              title: "用户反馈论坛",
              href: ""
            },
            {
              title: "壁纸站",
              href: ""
            },
            {
              title: "名人堂",
              href: ""
            }
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

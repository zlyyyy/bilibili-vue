<template>
  <div id="app">
        <app-header></app-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './components/header'
import AppFooter from './components/footer'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
  }
}
</script>

<style>
/* reset */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #333;
}
html { height: 100%; }
body { font-size: 62.5%; line-height: 1; font-family: Arial, Tahoma, sans-serif; }
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong { font-weight: bold; }
table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }
p { font-size: 1.2em; line-height: 1.0em; color: #333; }
a{
	text-decoration: none;
	-webkit-transition: background 0.2s, color 0.2s;
    	transition: background 0.2s, color 0.2s;
    }
button{outline:none;}
button,input,select,textarea{
	font-family:inherit;
}
input{
	outline: none;
	font-family: inherit;
}
body{
	/* background: #f3f3f3; */
	font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
}
</style>

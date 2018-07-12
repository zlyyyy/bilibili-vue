<template>
    <div class="error-container">
        <div class="error-panel server-error error-404">
            <img src="../assets/error/very_sorry.png">
            <div>
                <div class="left-panel">
                    <a class="rollback-btn" @click="goBack()">返回上一页</a>
                </div>
                <div class="right-panel">
                    <b>错误号:</b> 404&nbsp;&nbsp;<br>
                </div>
            </div>
        </div>
        <div class="error-split" id="up">
        </div>
        <div class="error-manga" v-if="error.list">
            <img :src="error.list[randomNum].data.img">
            <a class="change-img-btn" @click="test()">换一张</a>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('notFound')

export default {
    created() {
        this.$axios.get('/api/activity/web/view/data/31')
		.then((res)=>{
			this.setError(res.data.data) 
		}).catch((error)=>{
			console.log(error)
		})
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
		...mapActions([
			'setError',
			'setRandomNum'
		]),
		goBack(){
			window.history.go(-1)
		},
		test(){
			let num = Math.floor(Math.random()*this.error.list.length)
		console.log(num)
		this.setRandomNum(num)
		}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.error-container {
	width: 1160px;
	margin: 30px auto 30px;
	background: #fff;
	border-radius: 10px;
}
.error-panel {
  	overflow: hidden;
}
.error-panel.server-error .left-panel {
	height: 150px;
	width: 404px;
	display: inline-block;
	position: absolute;
}
.error-panel.server-error .left-panel .rollback-btn {
	height: 40px;
	width: 140px;
	margin: 25px 40px 0 0;
}
.error-panel.server-error .right-panel {
	display: inline-block;
	width: 100%;
	margin: 32px 0 25px 0;
	margin-left: 404px;
	padding-left: 26px;
	font-size: 24px;
	color: #99a2aa;
	border-left: 1px #ccd0d7 dashed;
}
.error-panel.article-error {
	height: 307px;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
}
.error-panel.article-error .rollback-btn {
	position: absolute;
	left: 720px;
	top: 220px;
	padding: 0 20px;
}
.error-panel.article-error .msg-text {
	position: absolute;
	width: 500px;
	height: 40px;
	top: 160px;
	left: 540px;
	font-size: 14px;
	color: #ccd0d7;
	overflow: hidden;
}
.error-panel.article-error .rollback-btn.login-btn {
	display: inline-block;
	position: absolute;
	top: 144px;
	left: 906px;
}
.error-panel .rollback-btn {
	display: block;
	line-height: 40px;
	text-align: center;
	background: #00a1d6;
	color: #fff;
	border-radius: 4px;
	float: right;
	font-size: 16px;
	transition: 0.2s;
	cursor: pointer;
}
.error-panel .rollback-btn:hover {
	background: #00b5e5;
}
.error-split {
	width: 100%;
	height: 40px;
	background: url('../assets/error/have_rest.png') center no-repeat;
}
.error-manga {
	padding: 30px;
	text-align: center;
}
.error-manga img {
  	max-width: 800px;
}
.error-manga .change-img-btn {
	display: block;
	height: 48px;
	width: 150px;
	margin: 30px auto 0;
	line-height: 48px;
	text-align: center;
	font-size: 16px;
	background: #00a1d6;
	color: #fff;
	border-radius: 4px;
	transition: 0.2s;
}
.error-manga .change-img-btn.off {
	background-color: #e5e9ef;
	color: #b8c0cc;
}

</style>

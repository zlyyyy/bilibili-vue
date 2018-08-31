<template>
    <div class="login">
        <div class="complain-mask" @click="setLoginShow()">
        </div>
        <div class="login-form">
            <div class="login-close" @click="setLoginShow()">
                <i class="iconfont icon-close"></i>
            </div>
            <div class="login-logo"></div>
            <div class="login-title">
                <a v-for="(item,index) in tab" :class="{active: index == nowindex}" href="#" @click="setLoginTab(index)">{{ item.name }}</a>
            </div>
            <div class="login-user" v-if="nowindex == 0 ">
                <div class="login-content">
                    <div class="user" :class="{on: user !== ''}">
                        <input v-model="user" type="text" value="" placeholder="你的手机号/邮箱" maxlength="50" autocomplete="off" class="username">
                        <p class="error">{{ userError.errorText }}</p>
                    </div>
                    <div class="password" :class="{on: password !== ''}">
                        <input v-model="password" type="password" placeholder="密码" id="login-passwd" class="userpassword">
                        <p class="error">{{ passError.errorText }}</p>
                    </div>
                </div>
                <div class="login-forget">
                    <div class="lf-password">
                        <input type="checkbox" name="name" id="radioa" checked="">
                        <label for="radioa"></label>
                        <span>记住密码</span>
                    </div>
                    <a href="javascript:;" class="lff-password">忘记密码？</a>
                </div>
                <div class="login-btn" :class="{on: user!==''&&password!==''}" @click="onLogin()">
                    登录
                </div>
                <div class="btn-error">{{ btnErrorText }}</div>
            </div>
            <div class="register-user" v-else>
                <div class="register-content">
                    <div class="user" :class="{on: user!==''}">
                        <input v-model="user" type="text" value="" placeholder="昵称（例：哔哩哔哩）" maxlength="50" autocomplete="off" class="username">
                    </div>
                    <div class="password" :class="{on: password!==''}">
                        <input v-model="password" type="password" placeholder="密码（6-16个字符组成，区分大小写）" class="userpassword">
                    </div>
                </div>
                <div class="register-btn" :class="{on: reguser!==''&&regpassword!==''}" @click="onLogin()">
                    立即注册
                </div>
                 <div class="register-login">
                    <a href="javascript:;" @click="setLoginTab(0)">已有账号，直接登录>></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('login')

export default {
    data () {
        return {
            tab: [
                {
                    name: '登录'
                },
                {
                    name: '注册'
                }
            ],
            reguser: '',
            regpassword: '',
            btnErrorText: '',
        }
    },
    computed: {
        ...mapState({//命名空间获取state
            nowindex: state => state.nowindex,//tab状态
        }),
        user: {
            get() {
                return this.$store.state.login.userName
            },
            set(value) {
                this.updateUserName(value)
            }
        },
        password: {
            get() {
                return this.$store.state.login.password
            },
            set(value) {
                this.updatePassword(value)
            }
        },
        userError(){
            let status,//是否过验证
                errorText//报错信息
            if(!/^\d{6,}$/g.test(this.user)){
                status = false
                errorText = '用户名不足六位'
            }else{
                status = true
                errorText = ''
            }
            if(!this.userFlag){
                this.userFlag = true
                errorText = ''
            }
            return{
                status,
                errorText
            }
        },
        passError(){
            let status,//是否过验证
                errorText//报错信息
            if(!/^\w{1,6}$/g.test(this.password)){
                status = false
                errorText = '密码超过六位'
            }else{
                status = true
                errorText = ''
            }
            if(!this.passFlag){
                this.passFlag = true
                errorText = ''
            }
            return{
                status,
                errorText
            }
        }
    },
    methods: {
        ...mapMutations({
            setLoginShow: 'SET_LOGIN_SHOW',
            setLoginTab: 'SET_LOGIN_TAB',
            updateUserName: 'SET_USERNAME',
            updatePassword: 'SET_PASSWORD'
        }),
        ...mapActions([
            'setSignIn',//登录
            'setUserInfo',//获取个人信息
            'setVipInfo',//获取大会员推荐信息
        ]),
        onLogin(){
            sessionStorage.setItem("signIn", 0);
            if(!this.userError.status || !this.passError.status){
                this.btnErrorText = '部分选项未通过'
            }else{
                this.$http.get('http://localhost:8080/static/login.json')
                .then((res)=>{
                    localStorage.setItem('userName',this.user);//浏览器存入用户名--测试用
                    localStorage.setItem('password',this.password);//浏览器存入密码--测试用
                    localStorage.setItem('signIn',1);//浏览器存入登录状态，0为未登录，1为已登录
                    // localStorage.setItem('proInfo',JSON.stringify(res.data.data));//浏览器存入个人信息
                    this.setSignIn({
                        signIn: localStorage.getItem('signIn'),//更改state中的登录状态
                    })
                    this.setUserInfo({
                        proInfo: res.data.data//state传入用户信息
                    })
                    this.setLoginShow()//关闭登录框
                    this.setVipInfo()//获取大会员推荐信息
                }).catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}
.complain-mask{
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    display: block;
    top: 0px;
    left: 0px;
}
.login-form{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 300px;
    padding: 30px 50px 30px;
    background: #fff;
    border-radius: 5px;
    z-index: 9999;
    overflow: hidden;
}
.login-form .login-close{
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 20px;
}
.login-form .login-close .icon-close{
    font-size: 24px;
    color: #909399;
}
.login-form .login-close .icon-close:hover{
    color: #00a1d6;
}
.login-form .login-logo{
    width: 220px;
    height: 105px;
    background: url(../assets/logo.png) 0 0 no-repeat;
    margin: 0 auto;
}
.login-form .login-title{
    overflow: hidden;
    text-align: center;
}
.login-form .login-title a{
    display: inline-block;
    font-size: 18px;
    padding: 10px;
    margin: 0 20px;
    color: #969696;
}
.login-form .login-title a.active{
    font-weight: 700;
    color: #00a1d6;
    border-bottom: 2px solid #00a1d6;
}
.login-user,
.register-user{
    float: left;
    width: 100%;
}
.login-user .login-content,
.register-user .register-content{
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
}
.login-form .user,
.login-form .password{
    position: relative;
}
.login-form .error{
    position: absolute;
    font-size: 14px;
    bottom: 15px;
    right: 0;
    color: #f45d90;
}
.login-form .btn-error{
    margin-top: 10px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    color: #f45d90;
}
.login-user .login-content input,
.register-user .register-content input{
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    padding: 10px 10px 0;
    margin: 10px 0 0 0;
    height: 50px;
    width: 100%;
    font-size: 14px;
}
.login-user .login-content .on input,
.login-user .login-content input:focus,
.register-user .register-content .on input,
.register-user .register-content input:focus{
    border-bottom: 1px solid #00a1d6;
}
/* 记住密码 */
.login-user .login-forget{
	margin-top: 5px;
	height: 40px;
	line-height: 40px;
}
.login-user .login-forget .lf-password{
	position: relative;
	float: left;
}
.login-forget .lf-password input[type="checkbox"] {
	width: 12px;
	height: 12px;
	opacity: 0;
}
.login-forget .lf-password label{
	cursor: pointer;
	position: absolute;
	left: 3px;
    top: 13px;
	width: 12px;
	height: 12px;
	border-radius: 3px;
	border: 1px solid #999;
}
/*设置选中的input的样式*/
/* + 是兄弟选择器,获取选中后的label元素*/
.login-forget .lf-password input:checked+label { 
	background: #fff;
}
.login-forget .lf-password input:checked+label::after {
	position: absolute;
	content: "";
	width: 8px;
	height: 4px;
	border: 1px solid #00a1d6;
	border-right: none;
	border-top: none;
	transform: rotate(-45deg);
	top: 2px;
	left: 2px;
}
.login-user .login-forget .lff-password,
.register-user .register-login a{
	float: right;
	font-size: 12px;
	color: #999;
}
.register-user .register-login a,
.login-user .login-forget .lff-password:hover{
	color: #00a1d6;
}
.register-user .register-login a{
    margin-top: 20px;
}
.login-user .login-btn,
.register-user .register-btn{
    cursor: pointer;
    margin-top: 20px;
    background: #d1d1d1;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
}
.register-user .register-btn{
    margin-top: 20px;
}
.login-user .login-btn.on,
.register-user .register-btn.on{
    background: #00a1d6;
}
</style>

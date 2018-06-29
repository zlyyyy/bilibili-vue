<template>
    <div class="complain-mask">
        <div class="login-form">
            <div class="login-close">
                <i class="iconfont icon-close"></i>
            </div>
            <div class="login-logo"></div>
            <div class="login-title">
                <a class="active" href="#">登录</a>
                <a href="#">注册</a>
            </div>
            <div class="login-content">
                <div class="user">
                    <input type="text" value="" placeholder="你的手机号/邮箱" maxlength="50" autocomplete="off" class="username">
                </div>
                <div class="password">
                    <input type="password" placeholder="密码" id="login-passwd" class="userpassword">
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
            <div class="login-btn">
                登录
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.complain-mask{
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9998;
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
.login-form .login-content{
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
}
.login-form .login-content input{
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.12);;
    padding: 10px 10px 0;
    margin: 10px 0 0 0;
    height: 50px;
    width: 100%;
}
/* 记住密码 */
.login-form .login-forget{
	margin-top: 5px;
	height: 40px;
	line-height: 40px;
}
.login-form .login-forget .lf-password{
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
.login-form .login-forget .lff-password{
	float: right;
	font-size: 12px;
	color: #999;
}
.login-form .login-forget .lff-password:hover{
	color: #00a1d6;
}
.login-form .login-btn{
    margin-top: 10px;
    background: #00a1d6;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
}
</style>

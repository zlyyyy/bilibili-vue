<template>
  <div class="login">
    <div class="complain-mask" @click="setLoginShow()"></div>
    <div class="login-form">
      <div class="login-close" @click="setLoginShow()">
        <i class="iconfont icon-close"></i>
      </div>
      <div class="login-logo"></div>
      <div class="login-title">
        <a
          v-for="(item, index) in tab"
          :key="`login_tab_${index}`"
          :class="{ active: index == nowindex }"
          href="#"
          @click="setLoginTab(index)"
          >{{ item.name }}</a
        >
      </div>
      <div class="login-user" v-if="nowindex == 0">
        <div class="login-content">
          <div class="user" :class="{ on: user !== '' }">
            <input
              v-model="user"
              type="text"
              value=""
              placeholder="你的手机号/邮箱"
              maxlength="50"
              autocomplete="off"
              class="username"
            />
            <p class="error">{{ userError.errorText }}</p>
          </div>
          <div class="password" :class="{ on: password !== '' }">
            <input
              v-model="password"
              type="password"
              placeholder="密码"
              id="login-passwd"
              class="userpassword"
            />
            <p class="error">{{ passError.errorText }}</p>
          </div>
        </div>
        <div class="login-forget">
          <div class="lf-password">
            <input type="checkbox" name="name" id="radioa" checked="" />
            <label for="radioa"></label>
            <span>记住密码</span>
          </div>
          <a href="javascript:;" class="lff-password">忘记密码？</a>
        </div>
        <div
          class="login-btn"
          :class="{ on: user !== '' && password !== '' }"
          @click="onLogin()"
        >
          登录
        </div>
        <div class="btn-error">{{ btnErrorText }}</div>
      </div>
      <div class="register-user" v-else>
        <div class="register-content">
          <div class="user" :class="{ on: user !== '' }">
            <input
              v-model="user"
              type="text"
              value=""
              placeholder="昵称（例：哔哩哔哩）"
              maxlength="50"
              autocomplete="off"
              class="username"
            />
          </div>
          <div class="password" :class="{ on: password !== '' }">
            <input
              v-model="password"
              type="password"
              placeholder="密码（6-16个字符组成，区分大小写）"
              class="userpassword"
            />
          </div>
        </div>
        <div
          class="register-btn"
          :class="{ on: reguser !== '' && regpassword !== '' }"
          @click="onLogin()"
        >
          立即注册
        </div>
        <div class="register-login">
          <a href="javascript:;" @click="setLoginTab(0)"
            >已有账号，直接登录>></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("login");

export default {
  data() {
    return {
      tab: [
        {
          name: "登录"
        },
        {
          name: "注册"
        }
      ],
      reguser: "",
      regpassword: "",
      btnErrorText: ""
    };
  },
  computed: {
    ...mapState({
      //命名空间获取state
      nowindex: state => state.nowindex //tab状态
    }),
    user: {
      get() {
        return this.$store.state.login.userName;
      },
      set(value) {
        this.updateUserName(value);
      }
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(value) {
        this.updatePassword(value);
      }
    },
    userError() {
      let status, //是否过验证
        errorText; //报错信息
      if (!/^\d{6,}$/g.test(this.user)) {
        status = false;
        errorText = "用户名不足六位";
      } else {
        status = true;
        errorText = "";
      }
      if (!this.userFlag) {
        // eslint-disable-next-line
        this.userFlag = true;
        errorText = "";
      }
      return {
        status,
        errorText
      };
    },
    passError() {
      let status, //是否过验证
        errorText; //报错信息
      if (!/^\w{1,6}$/g.test(this.password)) {
        status = false;
        errorText = "密码超过六位";
      } else {
        status = true;
        errorText = "";
      }
      if (!this.passFlag) {
        this.passFlag = true;
        errorText = "";
      }
      return {
        status,
        errorText
      };
    }
  },
  methods: {
    ...mapMutations({
      setLoginShow: "SET_LOGIN_SHOW",
      setLoginTab: "SET_LOGIN_TAB",
      updateUserName: "SET_USERNAME",
      updatePassword: "SET_PASSWORD"
    }),
    ...mapActions([
      "setSignIn", //登录
      "setUserInfo", //获取个人信息
      "setVipInfo" //获取大会员推荐信息
    ]),
    onLogin() {
      sessionStorage.setItem("signIn", 0);
      if (!this.userError.status || !this.passError.status) {
        this.btnErrorText = "部分选项未通过";
      } else {
        this.$http
          .get("http://bilibili.zhaoly.cn/static/login.json")
          .then(res => {
            localStorage.setItem("userName", this.user); //浏览器存入用户名--测试用
            localStorage.setItem("password", this.password); //浏览器存入密码--测试用
            localStorage.setItem("signIn", 1); //浏览器存入登录状态，0为未登录，1为已登录
            // localStorage.setItem('proInfo',JSON.stringify(res.data.data));//浏览器存入个人信息
            this.setSignIn({
              signIn: localStorage.getItem("signIn") //更改state中的登录状态
            });
            this.setUserInfo({
              proInfo: res.data.data //state传入用户信息
            });
            this.setLoginShow(); //关闭登录框
            this.setVipInfo(); //获取大会员推荐信息
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

.login {
  position: absolute;
  top: 0;
  @include wh(100%, 100%);
}
.complain-mask {
  background: rgba(0, 0, 0, 0.8);
  @include wh(100%, 100%);
  position: fixed;
  z-index: 999;
  display: block;
  top: 0px;
  left: 0px;
}
.login-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300px;
  padding: 30px 50px 30px;
  background: $white;
  @include borderRadius(5px);
  z-index: 9999;
  overflow: hidden;
  .login-close {
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 20px;
    .icon-close {
      @include sc(24px, #909399);
      &:hover {
        color: $blue;
      }
    }
  }
  .login-logo {
    @include wh(220px, 105px);
    background: url(../../assets/logo.png) 0 0 no-repeat;
    margin: 0 auto;
  }
  .login-title {
    overflow: hidden;
    text-align: center;
    a {
      display: inline-block;
      @include sc(18px, #969696);
      padding: 10px;
      margin: 0 20px;
      &.active {
        font-weight: 700;
        color: $blue;
        border-bottom: 2px solid $blue;
      }
    }
  }
  .error {
    position: absolute;
    @include sc(14px, $pink);
    bottom: 15px;
    right: 0;
  }
  .btn-error {
    margin-top: 10px;
    height: 20px;
    line-height: 20px;
    @include sc(12px, $pink);
    text-align: right;
  }
}
.login-user,
.register-user {
  float: left;
  width: 100%;
}
.login-user .login-content,
.register-user .register-content {
  margin-top: 20px;
  box-sizing: border-box;
  width: 100%;
}
.login-form .user,
.login-form .password {
  position: relative;
}
.login-user .login-content input,
.register-user .register-content input {
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 10px 10px 0;
  margin: 10px 0 0 0;
  @include wh(100%, 50px);
  font-size: 14px;
}
.login-user .login-content .on input,
.login-user .login-content input:focus,
.register-user .register-content .on input,
.register-user .register-content input:focus {
  border-bottom: 1px solid $blue;
}
/* 记住密码 */
.login-user {
  .login-forget {
    margin-top: 5px;
    height: 40px;
    line-height: 40px;
    .lf-password {
      position: relative;
      float: left;
    }
  }
}
.login-forget {
  .lf-password {
    input[type="checkbox"] {
      @include wh(12px, 12px);
      opacity: 0;
    }
    label {
      cursor: pointer;
      position: absolute;
      left: 3px;
      top: 13px;
      @include wh(12px, 12px);
      @include borderRadius(3px);
      border: 1px solid #999;
    }
    input {
      &:checked {
        & + label {
          background: $white;
          &::after {
            position: absolute;
            content: "";
            @include wh(8px, 4px);
            border: 1px solid $blue;
            border-right: none;
            border-top: none;
            transform: rotate(-45deg);
            top: 2px;
            left: 2px;
          }
        }
      }
    }
  }
}
/*设置选中的input的样式*/
/* + 是兄弟选择器,获取选中后的label元素*/
.login-user .login-forget .lff-password,
.register-user .register-login a {
  float: right;
  @include sc(12px, #999);
}
.register-user .register-login a,
.login-user .login-forget .lff-password:hover {
  color: $blue;
}
.register-user {
  .register-login {
    a {
      margin-top: 20px;
    }
  }
  .register-btn {
    margin-top: 20px;
  }
}
.login-user .login-btn,
.register-user .register-btn {
  cursor: pointer;
  margin-top: 20px;
  background: #d1d1d1;
  @include sc(16px, $white);
  line-height: 40px;
  text-align: center;
  @include borderRadius(20px);
}
.login-user .login-btn.on,
.register-user .register-btn.on {
  background: $blue;
}
</style>

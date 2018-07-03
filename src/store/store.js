import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  	modules: {
    	login: {
      		state:{
    			loginShow: false,
				userName: '',
				password: '',
				signIn: false,
				navData: [],
				vipRec: [
					{
						name: '7月新番来袭，大会员年费半价',
						img: require('../assets/vip_01.jpg'),
						url: 'https://www.bilibili.com/blackboard/activity-9th-big-discount.html'
					},
					{
						name: '玛丽与魔女之花 B站首播',
						img: require('../assets/vip_02.jpg'),
						url: 'https://www.bilibili.com/bangumi/play/ss12732'
					},
					{
						name: '正版音乐专辑 第二弹',
						img: require('../assets/vip_03.jpg'),
						url: 'https://www.bilibili.com/blackboard/topic/activity-SJtRyUcZ7.html'
					},
				]
			},
			mutations: {
				loginShow(state,payload) {
					state.loginShow = state.loginShow? false : true
					sessionStorage.setItem("userName", payload.user);  //添加到sessionStorage
					sessionStorage.setItem("password", payload.password);
					sessionStorage.setItem("signIn", payload.signIn);
					// state.userName = sessionStorage.getItem('userName')//用户名
					// state.password = sessionStorage.getItem('password')//用户密码
					// state.signIn = sessionStorage.getItem('signIn')//判断是否登录
					// state.navData = payload.navData//用户信息
					state.userName = payload.user//用户名
					state.password = payload.password//用户密码
					state.signIn = payload.signIn//判断是否登录
					state.navData = payload.navData//用户信息
			   },
			},
			actions: {
				loginShow({commit,state},msg) {
					commit('loginShow',msg)
			   }
			}
    	}
  }
})
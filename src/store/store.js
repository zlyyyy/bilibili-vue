import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  	modules: {
    	login: {
      		state:{
				loginShow: false,//登录弹窗，默认隐藏
				userName: '',//用户名
				password: '',//密码
				signIn: '',//0为未登录，1为已登录
				proInfo: [],//个人信息
				topInfo: []//会员土建信息
			},
			mutations: {
				//登录弹窗显示隐藏
				loginShow(state) {
					state.loginShow = state.loginShow? false : true
			   },
			   //登录状态
			   signIn(state,msg){
					state.signIn = msg.signIn
			   },
			   //个人信息
			   proInfo(state,msg){
					state.proInfo = msg.proInfo
				},
				//会员推荐信息
			   topInfo(state,msg){
				   state.topInfo = msg.topInfo
			   },
			   //用户名
			   updateUserName(state,msg){
				   state.userName = msg
			   },
			   //用户密码
			   updatePassword(state,msg){
				state.password = msg
			}
			},
			actions: {
				loginShow({commit,state},msg) {
					commit('loginShow',msg)
			   	},
			   	signIn({commit,state},msg){
					commit('signIn',msg)
			   	},
			   	proInfo({commit,state},msg){
					commit('proInfo',msg)
		   		},
			   topInfo({commit,state},msg){
					commit('topInfo',msg)
			   }
			}
    	}
  }
})
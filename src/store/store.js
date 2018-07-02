import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    loginShow: false,
    count: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations:{
    loginShow:state => {
         state.loginShow = state.loginShow? false : true
    },
    decrement:state => state.count --,
  }
})
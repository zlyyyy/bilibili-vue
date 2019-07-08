// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from "./store/index";
import VueLazyload from "vue-lazyload";
import axios from "./utils/http";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("../src/assets/loading.png"),
  loading: require("../src/assets/loading.png"),
  attempt: 1
});
Vue.http = Vue.prototype.$http = axios;
// Vue.use(Base)
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  document.title = to.meta.title;
  next();
});
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

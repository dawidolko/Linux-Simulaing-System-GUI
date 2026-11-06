import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "@/assets/tailwind.css"
// axios
import VueAxios from 'vue-axios'
import axios from 'axios'
import {request} from "./network/request"
// router 
import VueRouter from 'vue-router'
import router from './router'
// vuex
import store from './store'
// title
import VueWechatTitle from 'vue-wechat-title'
// cookies
import cookies from './plugins/cookies'
import utils from './plugins/utils'



// vuetify
Vue.config.productionTip = false
// axios
Vue.use(VueAxios, axios)
Vue.prototype.$axios = request
// router
Vue.use(VueRouter)
// title
Vue.use(VueWechatTitle)
// cookies
Vue.use(cookies)
Vue.use(utils)



/*
  Waiting one frame lets the HTML in the first response paint before the application
  replaces it. A tab opened in the background has no frames, so it mounts at once.
*/
const mount = () => new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (document.hidden) mount()
else requestAnimationFrame(() => setTimeout(mount))

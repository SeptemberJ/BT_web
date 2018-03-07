import Vue from 'vue'
import Axios from 'axios'
import router from './router/router'
import Vuex from 'vuex'
import store from './store/store'
import VueResource from 'vue-resource'
// import VueDND from 'awe-dnd'
import 'babel-polyfill'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';


// Vue.use(VueDND)
Vue.use(VueResource)
Vue.use(Vuex)
// Vue.use(iView)
// Vue.use(VueVideoPlayer)
//开启debug模式
Vue.config.debug = true
window.log = console.log

let data = {
  el:'#app',
  router,
  store
}
Vue.http.options.emulateJSON = true;




global.PRE_URL = ''
global.R_PRE_URL = 'http://192.168.10.141:8082'//'https://zgeqscjdglj.org/dfjkorg'
new Vue(data).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App'
import less from 'less'
import axios from 'axios'
import Bscroll from 'better-scroll'
import store from  './router/store.js' 
require('!style-loader!css-loader!less-loader!./assets/less/style.less') //引入公用样式less/sass/scss 
Vue.config.productionTip = false
Vue.prototype.$axios = axios 
Vue.use(Vuex)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

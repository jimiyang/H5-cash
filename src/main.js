import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App'
import less from 'less'
import axios from 'axios'
import Bscroll from 'better-scroll'
import store from  './router/store.js' 
import babelPolyfill from  'babel-polyfill'
require('!style-loader!css-loader!less-loader!./assets/less/style.less') //引入公用样式less/sass/scss 
require('es6-promise').polyfill()
Vue.config.productionTip = false
Vue.prototype.$axios = axios 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

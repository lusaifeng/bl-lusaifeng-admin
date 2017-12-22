import _ from 'lodash'
// import $ from 'jquery'
// global.$ = $
// Vue.prototype.jQuery = $
// console.log(jQuery)
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import BootstrapTreeview from 'bootstrap-treeview/dist/bootstrap-treeview.min'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../scss/style.scss'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

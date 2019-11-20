// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// eslint-disable-next-line
import Mock from '@/mock/mock.js'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  // 别放在src/assets下，否则用require引入
  // loading: '../static/loading.gif',
  loading: require('@/assets/img/loading.gif'),
  throttleWait: 200
})
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // render: (h)=>{
  //   return h(APP);
  // }
})
// .$mount('#app')

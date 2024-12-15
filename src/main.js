import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

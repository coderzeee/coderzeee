import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js'
import router from './router'
import axios from '@/util/request'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
Vue.prototype.$axios = axios;//把axios挂载到vue上
Vue.config.productionTip = false

window.axios = axios
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

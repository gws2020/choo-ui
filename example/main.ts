import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import chooUI from '../src'
import chooRouter from 'choo-router'
import '../lib/index.css'

Vue.config.productionTip = false

Vue.use(chooRouter, {
  router,
})

Vue.use(chooUI, {
  router,
  theme: {
    checked: 'default',
    map: {
      yilu: 'assets/theme/yilu'
    }
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

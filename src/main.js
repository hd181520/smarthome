import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';

import './style.css'
import App from './App.vue'
 
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

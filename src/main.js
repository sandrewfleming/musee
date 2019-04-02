import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(VueMaterial);

app = new Vue({
  el:'#app',
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount("#app");


// app = new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
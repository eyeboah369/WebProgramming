import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import swal from 'sweetalert2'
import vuetify from './plugins/vuetify';


const base = axios.create({
  baseURL: "http://localhost:5000"
});

Vue.prototype.$http = base;
Vue.prototype.$swal = swal;

Vue.config.productionTip = false;
new Vue({
  router,
  swal,
  vuetify,
  render: h => h(App)
}).$mount("#app");
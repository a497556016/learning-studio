import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import SnackBar from "./components/SnackBar";
import Dialog from "./components/Dialog";

// use
Vue.use(mavonEditor)
Vue.use(SnackBar, vuetify);
Vue.use(Dialog, vuetify);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

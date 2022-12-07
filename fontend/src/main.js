import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Vue2Editor from "vue2-editor";


import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('f-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.use(Vue2Editor);

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");

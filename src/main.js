import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// axios config
import "./config";
// Others
import "./config/libs/v-mask";
import "./config/libs/v-lazy-image-vue2";

import { WatchMobilePhone } from "./mixins/watch-mobile-phone";
import { capitalizeFirstLetter } from "./mixins/texts-helpers";
const WMP = Vue.mixin(WatchMobilePhone);
const TextsHelper = Vue.mixin(capitalizeFirstLetter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  mixins: [WMP, TextsHelper],
  render: (h) => h(App),
}).$mount("#app");

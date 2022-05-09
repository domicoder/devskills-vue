import Vue from "vue";
import Vuex from "vuex";
import members from "./modules/members";
import auth from "./modules/auth";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    members,
    auth,
  },
  strict: debug,
});

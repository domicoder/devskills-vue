// import axios from "axios";

const state = () => ({
  authURL: process.env.VUE_APP_BASE_URL + `/auth`,
  auth: {
    isLoggedIn: false,
    accessToken: null,
    issuedAt: null,
    expiresAt: null,
  },
  authErrors: {
    code: "",
    message: "",
  },
});

const getters = {
  getAuth(state) {
    return state.auth;
  },
  getAuthErrors(state) {
    return state.authErrors;
  },
};

const mutations = {
  setAuth(state, payload) {
    state.auth = payload;
  },
  setLogout(state, payload) {
    state.auth = payload;
  },
  setAuthErrors(state, payload) {
    state.authErrors = payload;
  },
};

const actions = {
  async login({ state, commit }, params) {
    try {
      // eslint-disable-next-line no-undef
      let response = await axios.post(state.authURL, params).catch((error) => {
        const authErrors = {
          code: error.response.data.code,
          message: error.response.data.message,
        };

        if (error.response.status === 401) {
          const auth = {
            isLoggedIn: false,
            accessToken: null,
            issuedAt: null,
            expiresAt: null,
          };
          commit("setLogout", auth);
          commit("setAuthErrors", authErrors);
        }
      });
      if (response) {
        let auth = {
          isLoggedIn: true,
          accessToken: response.data.token,
          issuedAt: response.data.iat,
          expiresAt: response.data.exp,
        };
        commit("setAuth", auth);
        localStorage.setItem("auth", JSON.stringify(auth));
        // eslint-disable-next-line no-undef
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + auth.accessToken;
      }
    } catch (error) {
      console.error("Error in login.", error);
    }
  },
  logout({ commit }) {
    localStorage.removeItem("auth");
    const auth = {
      isLoggedIn: false,
      accessToken: null,
      issuedAt: null,
      expiresAt: null,
    };
    localStorage.setItem("auth", JSON.stringify(auth));
    commit("setLogout", auth);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

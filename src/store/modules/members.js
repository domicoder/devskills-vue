const state = () => ({
  membersURL: process.env.VUE_APP_BASE_URL + `/api/members`,
  members: [],
  fetchingMembersErrors: {
    code: "",
    message: "",
    statusCode: 0,
  },
});

const getters = {
  getAllMembers(state) {
    return state.members;
  },
  getFetchingMembersErrors(state) {
    return state.fetchingMembersErrors;
  },
};

const mutations = {
  setMembers(state, payload) {
    state.members = payload;
  },
  setMember(state, payload) {
    state.members.push(payload);
  },
  setFetchingMembersErrors(state, payload) {
    state.fetchingMembersErrors = payload;
  },
};

const actions = {
  cleanFetchingMembersErrors({ commit }) {
    const fetchingMembersErrors = {
      code: "",
      message: "",
      statusCode: 0,
    };
    commit("setFetchingMembersErrors", fetchingMembersErrors);
  },
  async fetchAllMembers({ state, commit }, params) {
    try {
      // eslint-disable-next-line no-undef
      let response = await axios
        .get(state.membersURL, { params })
        .catch((error) => {
          const fetchingMembersErrors = {
            code: error.response.data.code,
            message: error.response.data.message,
            statusCode: error.response.status,
          };

          if (error.response.status === 401) {
            commit("setFetchingMembersErrors", fetchingMembersErrors);
          } else {
            commit("setFetchingMembersErrors", fetchingMembersErrors);
          }
        });
      if (response) {
        if (response.data) {
          commit("setMembers", response.data);
        }
      }
    } catch (error) {
      console.error("Error fetching members.", error);
    }
  },
  async createMember({ state, commit }, params) {
    try {
      // eslint-disable-next-line no-undef
      let response = await axios
        .post(state.membersURL, params)
        .catch((error) => {
          const fetchingMembersErrors = {
            code: error.response.data.code,
            message: error.response.data.message,
            statusCode: error.response.status,
          };
          if (error.response.status === 401) {
            commit("setFetchingMembersErrors", fetchingMembersErrors);
          } else {
            commit("setFetchingMembersErrors", fetchingMembersErrors);
          }
        });

      if (response) {
        if (response.data && response.status >= 200 && response.status < 300) {
          const fetchingMembersErrors = {
            code: "",
            message: "",
            statusCode: response.status,
          };
          commit("setFetchingMembersErrors", fetchingMembersErrors);
          commit("setMember", response.data);
        }
      }
    } catch (error) {
      console.error("Error creating member.", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

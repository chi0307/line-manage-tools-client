export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, { users }) {
      state.users = users;
    },
  },
  actions: {
    async getUsers({ commit }) {
      this.$axios.apis.getUsers().then((users) => {
        commit('SET_USERS', { users });
      });
    },
  },
};

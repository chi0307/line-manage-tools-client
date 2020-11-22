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
    getUsers({ commit }) {
      this.$axios.apis.getUsers().then((users) => {
        commit('SET_USERS', { users });
      });
    },
    insertUser({ state, commit }, { username, password }) {
      return this.$axios.apis.insertUser(username, password).then((resultUser) => {
        commit('SET_USERS', { users: [...state.users, resultUser] });
      });
    },
    patchUser({ state, commit }, { userId, password }) {
      return this.$axios.apis.patchUser(userId, password).then((resultUser) => {
        let users = state.users.map((user) => {
          if (user.id === resultUser.id) {
            return resultUser;
          } else {
            return user;
          }
        });
        commit('SET_USERS', { users });
      });
    },
    deleteUser({ state, commit }, { userId }) {
      return this.$axios.apis.deleteUser(userId).then((result) => {
        let users = state.users.filter((user) => user.id !== userId);
        commit('SET_USERS', { users });
      });
    },
  },
};

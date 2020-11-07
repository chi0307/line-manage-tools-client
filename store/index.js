import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    plugins: [],
    state: {
      auth: null,
      users: [],
    },
    mutations: {
      SET_AUTH: function (state, { auth }) {
        state.auth = auth;
      },
      SET_USERS: function (state, { users }) {
        state.users = users;
      },
    },
    getters: {},
    actions: {
      clientInit({ commit }) {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('auth')) {
          const auth = JSON.parse(localStorage.getItem('auth'));
          if (auth.token) {
            commit('SET_AUTH', { auth });
            this.$axios.setToken(auth.token, 'Bearer');
          }
        }
      },
      async getUsers({ commit }) {
        const users = await this.$axios.$get('/users');
        commit('SET_USERS', { users });
      },
      async login({ commit }, { username, password }) {
        return this.$axios.$post('/login', { username, password }).then((auth) => {
          commit('SET_AUTH', { auth });
          localStorage.setItem('auth', JSON.stringify(auth));
          this.$axios.setToken(auth.token, 'Bearer');
          return auth;
        });
      },
      async logout({ commit }) {
        this.$axios.$post('/logout').then((result) => {
          commit('SET_AUTH', { auth: null });
          localStorage.removeItem('auth');
          this.$axios.setToken(false);
        });
      },
    },
  });

export default store;

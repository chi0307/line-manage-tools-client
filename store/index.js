import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    plugins: [],
    state: {
      auth: null,
      users: [],
      modal: {
        status: false,
        id: null,
        options: {},
      },
    },
    mutations: {
      SET_AUTH: function (state, { auth }) {
        state.auth = auth;
      },
      SET_USERS: function (state, { users }) {
        state.users = users;
      },
      SET_MODAL: function (state, modal = { status: false, id: null, options: {} }) {
        state.modal = modal;
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
        this.$axios.apis.getUsers().then((users) => {
          commit('SET_USERS', { users });
        });
      },
      async login({ commit }, { username, password }) {
        return this.$axios.apis.login({ username, password }).then((auth) => {
          commit('SET_AUTH', { auth });
          localStorage.setItem('auth', JSON.stringify(auth));
          this.$axios.setToken(auth.token, 'Bearer');
          return auth;
        });
      },
      async logout({ commit }) {
        this.$axios.apis.logout().then((result) => {
          commit('SET_AUTH', { auth: null });
          localStorage.removeItem('auth');
          this.$axios.setToken(false);
        });
      },
      async openModal({ commit }, { id, options, title }) {
        await commit('SET_MODAL', { status: true, id, options, title });
      },
      async closeModal({ commit }) {
        await commit('SET_MODAL', { status: false, id: null, options: {} });
      },
    },
  });

export default store;

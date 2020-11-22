import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './modules/auth.js';
import modal from './modules/modal.js';
import users from './modules/users.js';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      auth,
      modal,
      users,
    },
    plugins: [
      createPersistedState({
        storage: window.localStorage,
        reducer(val) {
          return {
            // 只儲存特定 module
            auth: val.auth,
          };
        },
      }),
    ],
    state: {},
    mutations: {},
    getters: {},
    actions: {
      clientInit({ dispatch }) {
        dispatch('auth/check');
      },
    },
  });

export default store;

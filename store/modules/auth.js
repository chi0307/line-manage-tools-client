export default {
  namespaced: true,
  state: {
    isLogin: false, // 是否登入
    token: null, // 存放jwt token
    expiresAt: null, // token 到期時間
  },
  mutations: {
    SET_AUTH(state, { isLogin, token, expiresAt }) {
      if (isLogin && token && expiresAt) {
        state.isLogin = true;
        state.token = token;
        state.expiresAt = expiresAt;
      } else {
        state.isLogin = false;
        state.token = null;
        state.expiresAt = null;
      }
    },
  },
  actions: {
    check({ state, commit }) {
      if (state.isLogin && state.token && state.expiresAt && new Date(state.expiresAt) > new Date()) {
        this.$axios.setToken(state.token, 'Bearer');
      } else {
        commit('SET_AUTH', { isLogin: false });
      }
    },
    login({ commit }, { username, password }) {
      return this.$axios.apis.login({ username, password }).then((auth) => {
        commit('SET_AUTH', { isLogin: true, token: auth.token, expiresAt: auth.expires_at });
        this.$axios.setToken(auth.token, 'Bearer');
      });
    },
    logout({ state, commit }) {
      return this.$axios.apis.logout().finally((result) => {
        commit('SET_AUTH', { isLogin: false });
        this.$axios.setToken(false);
      });
    },
  },
};

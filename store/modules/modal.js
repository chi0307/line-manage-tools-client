export default {
  namespaced: true,
  state: {
    status: false,
    id: null,
    options: {},
  },
  mutations: {
    SET_MODAL(state, { status = false, id = null, options = {} }) {
      if (status) {
        state.status = true;
        state.id = id;
        state.options = options;
      } else {
        state.status = false;
        state.id = null;
        state.options = {};
      }
    },
  },
  actions: {
    async openModal({ commit }, { id, options, title }) {
      await commit('SET_MODAL', { status: true, id, options, title });
    },
    async closeModal({ commit }) {
      await commit('SET_MODAL', { status: false });
    },
  },
};

const state = {
  value: 0
};
const actions = {
    updateValue: ({ commit }, payload) => {
      commit('updateValue', payload);
    }
};
const getters = {
    getValue: state => {
      return state.value;
    }
};
const mutations = {
    updateValue: (state, payload) => {
      state.value = payload;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

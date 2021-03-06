const state = {
    counter: 0,
    clicks: 0
  };
const getters = {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.clicks + ' clicks';
    }
  };
const mutations = {
    increment: (state, payload) => {
      state.counter += payload;
      state.clicks++;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
      state.clicks++;
    }
  };
const actions = {
    increment: (context, payload) => {
      context.commit('increment', payload);
    },
    decrement: ({ commit }, payload) => { // or only include the needed attribute.
      commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    }
  };


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

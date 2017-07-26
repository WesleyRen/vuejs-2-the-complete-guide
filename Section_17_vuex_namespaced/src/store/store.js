import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const value = {
      namespaced: true,
      state: {
        value: 0
      },
      getters: {
        getValue: state => {
          return state.value;
        }
      },
      mutations: {
        updateValue: (state, payload) => {
          state.value = payload;
        }
      },
      actions: {
        updateValue: ({ commit }, payload) => {
          commit('updateValue', payload);
        },
      }
    };

const counter = {
      namespaced: true,
      state: {
        counter: 0,
        clicks: 0
      },
      getters: {
        doubleCounter: state => {
          return state.counter;
        },
        stringCounter: state => {
          return state.clicks + ' clicks';
        }
      },
      mutations: {
        increment: (state, payload) => {
          state.counter += payload;
          state.clicks++;
        },
        decrement: (state, payload) => {
          state.counter -= payload;
          state.clicks++;
        }
      },
      actions: {
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
      }
    };

export const store = new Vuex.Store({
  modules: {
    value: value,
    counter: counter
  }
});

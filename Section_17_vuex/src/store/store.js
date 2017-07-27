import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js'; // modulized local scope.
import value from './modules/value.js';
import * as getters from './getters.js'; // global scope.

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fakeCounter: 100,
    counter: 10000
  },
  getters,
  modules: {
    counter,
    value
  }
})

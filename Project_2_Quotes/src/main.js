import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: function() {
    return {
       numOfQuoteLimit: 10
    };
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

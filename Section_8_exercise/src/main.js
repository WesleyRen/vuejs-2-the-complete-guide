import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverClicked(server) {
      this.$emit('serverWasClicked', server);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

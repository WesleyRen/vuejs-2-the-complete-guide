import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverClicked(id, status) {
      this.$emit('serverWasClicked', {id, status});
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

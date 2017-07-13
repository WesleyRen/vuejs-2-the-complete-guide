import Vue from 'vue'
import App from './App.vue'

// This has to be created before all the components created to be used by the components.
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasReset', age);
    }
  }
});

// Vue instance holding all the components.
new Vue({
  el: '#app',
  render: h => h(App)
})

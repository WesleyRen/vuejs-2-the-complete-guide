import Vue from 'vue'
import App from './App.vue'
import Servers from './Servers.vue'

// Component registration.
// --globally:
Vue.component('servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
})

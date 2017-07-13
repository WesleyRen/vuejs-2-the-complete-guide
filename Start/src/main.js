import Vue from 'vue'
import App from './App.vue'
import Servers from './components/Servers.vue'

// global component registration:
Vue.component('servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
})

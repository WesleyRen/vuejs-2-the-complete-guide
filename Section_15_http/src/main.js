import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'https://http-vuejs-855ab.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT'; // put alway overwrite Firebase existing data.
  }
  next(response => {
    response.json = () => {return {messages: response.body} };
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})

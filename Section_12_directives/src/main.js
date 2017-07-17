import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delay']) {
      delay = 2000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
}
});
/*
5 hook functions of directive
bind(el, binding, vnode)
inserted(el, binding, vnode)

update(el, binding, vnode, oldVnode)
componentUpdated(el, binding, vnode, oldVnode)

unbind(el, binding, vnode)
*/

new Vue({
  el: '#app',
  render: h => h(App)
})

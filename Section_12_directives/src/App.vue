<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Built-in Directives</h1>
              <p v-text="'Some Text'"></p>
              <p v-html="'<strong>Some Strong Text.</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Custome Directives</h1>
              <p v-highlight:background.delay="'red'">Color this</p>
              <p v-highlight="'red'">Color this</p>
              <p v-local-highlight:background.delay.blink="{mainColor: 'green', secondColor: 'lightblue', delay: 1000}">Color this</p>
              <p v-local-highlight.delay.blink="{mainColor: 'green', secondColor: 'lightblue', delay: 1000}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'local-highlight': {
          bind(el, binding, vnode) {
            // el.style.backgroundColor = 'green';
            // el.style.backgroundColor = binding.value;
            var delay = 0;
            if (binding.modifiers['delay']) {
              delay = binding.value.delay;
            }
            if (binding.modifiers['blink']) {
              let mainColor = binding.value.mainColor;
              let secondColor = binding.value.secondColor;
              let currentColor = mainColor;
              setTimeout(() => {
                setInterval(() => {
                  currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                  if (binding.arg == 'background') {
                    el.style.backgroundColor = currentColor;
                  } else {
                    el.style.color = currentColor;
                  }
                }, 1000);
              }, delay);
            } else {
              setTimeout(() => {
                if (binding.arg == 'background') {
                  el.style.backgroundColor = binding.value.mainColor;
                } else {
                  el.style.color = binding.value.mainColor;
                }
              }, delay);
            }

          }
        }
      }
    }
</script>

<style>

</style>

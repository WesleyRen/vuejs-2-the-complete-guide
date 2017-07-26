<template>
    <div>
      <button class="btn btn-primary" @click="increment(100)">Increment</button>
      <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        methods: {
          ...mapActions('counter', [ // namespaced with module name 'counter'
            'increment',
            'decrement'
          ]),
          // which automatically creates following methods.
          // increment(by) {
          //   this.$store.dispatch('increment', by);
          // }
        }
    }
</script>

<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ age }}</p>
        <button @click="resetAge">Reset User Age (emit an event)</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  props: {
    age: Number
  },
  methods: {
    resetAge() {
      this.age = 27;
      // eventBus.$emit('ageWasReset', this.age);
      eventBus.changeAge(this.age);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

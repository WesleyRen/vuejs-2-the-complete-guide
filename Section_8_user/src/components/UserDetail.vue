<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>
          User Name: {{ switchName() }}
        </p>
        <p>
          User Age: {{ age }}
        </p>
        <button @click="resetFn()">Reset Name</button>
        <button @click="resetAge">Reset Age (no event emittion)</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  props: {
    myName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    resetFn: Function
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = 'Default Name';
      this.$emit('nameWasReset', this.myName);
    },
    resetAge() {
      this.age = 27;
    }
  },
  created() {
    eventBus.$on('ageWasReset', (eventData) => {
      this.age = eventData;
    })
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

<template>
  <div>
    <p class="text">Quote</p>
    <textarea rows="7" class="text" v-model="quote">{{ quote }}</textarea>
    <div style="text-align: center;">
      <button :disabled="!quote" @click="createQuote">Add Quote</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  data: function() {
    return {
      quote: '',
      quotes: []
    };
  },
  methods: {
    createQuote() {
      if (this.quotes.length < eventBus.numOfQuoteLimit) {
        this.quotes.push(this.quote);
        eventBus.$emit('newQuoteCreated', this.quotes);
      } else {
        alert("You've reached your maximum quota of " + this.numOfQuoteLimit + " quotes.")
      }
    }
  }
}
</script>

<style scoped="true">
div {
  padding: 5px 10px;
}

.text {
  display: block;
  width: 70%;
  margin: auto;
}

/* button stuff */
button {
  border: 1px solid #0066cc;
  background-color: #0099cc;
  color: #ffffff;
  padding: 5px 10px;
}

button:hover {
  border: 1px solid #0099cc;
  background-color: #00aacc;
  color: #ffffff;
  padding: 5px 10px;
}

button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
/* button stuff, end. */

</style>

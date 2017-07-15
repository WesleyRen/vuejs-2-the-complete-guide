<template>
  <div>
    <textarea readonly class="text" v-for="(quote, index) in quotes" @dblclick="remove(index)">
        {{ quote }}
    </textarea>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  data: function() {
    return {
      quotes: []
    }
  },
  created() {
    eventBus.$on('newQuoteCreated', (quotes) =>{
      this.quotes = quotes;
    })
  },
  methods: {
    remove(index) {
      // console.log('index ' + index + ' was clicked.')
      this.quotes.splice(index, 1);
      eventBus.$emit('quoteDeleted', this.quotes.length);
    }
  }
}
</script>

<style scoped=true>
.text {
  width: 30%;
  height: auto;
  margin: 5px;
  font: italic 16px/2 cursive;
  overflow: auto;
}
.text:hover {
  background-color: thistle;
}
</style>

<template>
  <div id="app">
    <quote>
      <h2 slot="title">{{ quoteTitle }}</h2>
      <hr />
      <p slot="content">My content</p>
      <p>
        no slot name
      </p>
    </quote>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';

export default {
  data: function() {
    return {
      quoteTitle: "my Title"
    }
  },
  components: {
    'quote': Quote
  }
}
</script>

<style>
</style>

<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <p class="text">Quote</p>
      <textarea class="form-control" v-model="quote">{{ quote }}</textarea>
      <div style="text-align: center;">
        <button class="btn btn-primary" :disabled="!quote" @click="createQuote">Add Quote</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: '',
    };
  },
  methods: {
    createQuote() {
      this.$emit('newQuoteCreated', this.quote);
      this.quote = '';
    }
  }
}
</script>

<style>
</style>

<template>
    <div class="container">
      <app-progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress-bar>
      <app-new-quote @newQuoteCreated="createQuote($event)"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote($event)"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Info: Click on a Quote to delete it.</div>
        </div>
      </div>
    </div>
</template>

<script>
import AppProgressBar from './components/ProgressBar.vue';
import AppNewQuote from './components/NewQuote.vue';
import AppQuoteGrid from './components/QuoteGrid.vue';

export default {
    data: function() {
        return {
          quotes: [],
          maxQuotes: 10
        };
    },
    components: {
      AppNewQuote,
      AppProgressBar,
      AppQuoteGrid
    },
    methods: {
      createQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert("You've reached your maximum quota of " + this.maxQuotes + " quotes.")
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    }
}
</script>

<style>
</style>

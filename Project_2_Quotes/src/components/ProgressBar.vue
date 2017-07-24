<template>
  <div>
      <h3>Quotes Added</h3>
      <div class="progressbar">
          <div class="progressbar" style="background-color: teal; margin: 0; color: orange;"
          :style="{width: progress.pct + '%'}">
          {{ progress.txt }}
          </div>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  data: function() {
    return {
      numOfQuotes: 0
    };
  },
  computed: {
    progress: function() {
      return {
        'txt': this.numOfQuotes + '/' + eventBus.numOfQuoteLimit,
        'pct': this.numOfQuotes / eventBus.numOfQuoteLimit * 100
      };
    }
  },
  created() {
    eventBus.$on('newQuoteCreated', (quotes) => {
      this.numOfQuotes = quotes.length;
    });
    eventBus.$on('quoteDeleted', (numOfQuotes) => {
      this.numOfQuotes = numOfQuotes;
    });
  }
}
</script>

<style scoped="true">
.progressbar {
    height: 40px;
    line-height: 40px; /* =height; so that text vertically align to center */
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
    text-align: center;
}
</style>

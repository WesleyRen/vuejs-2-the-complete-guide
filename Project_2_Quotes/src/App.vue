<template>
    <div class="container">
      <progress-bar></progress-bar>
      <quote-text></quote-text>
      <quote></quote>
      <app-footer></app-footer>
    </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import QuoteText from './components/QuoteText.vue';
import Quote from './components/Quote.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    ProgressBar,
    QuoteText,
    Quote,
    AppFooter
  }
}
</script>

<style>
</style>

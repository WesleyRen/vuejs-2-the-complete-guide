<template>
  <div id="app">
    <button @click="selectedComponent = 'appQuote'">Quote</button>
    <button @click="selectedComponent = 'appAuthor'">Author</button>
    <button @click="selectedComponent = 'appNew'">New Quote</button>
    <p>
      {{ selectedComponent }}
    </p>
    <keep-alive>
      <component :is="selectedComponent">
        <p>Default Content</p>
      </component>
    </keep-alive>

    <!--
    <app-quote>
      <h2 slot="title">{{ quoteTitle }}</h2>
      <hr />
      <p slot="content">My content</p>
      <p>no slot name</p>
    </app-quote>
    -->
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  data: function() {
    return {
      quoteTitle: "my Title",
      selectedComponent: "appQuote"
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>
</style>

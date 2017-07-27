<template>
    <p>Counter (doubled) is: {{ doubleCounter }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
      computed: {
        ...mapGetters('counter', [
          'doubleCounter'
        ])
      }
    }</script>

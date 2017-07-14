<template>
    <div class="col-xs-12 col-sm-6">
      <p v-if="!server">
        Please select a server.
      </p>
      <p v-else>
        Server: {{ server.id }} was selected, with status: {{ server.status }}.
      </p>
      <hr />
      <button @click="resetServerStatus">Reset Server Status</button>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  data: function() {
    return {
      server: null
    }
  },
  methods: {
    resetServerStatus() {
      this.server.status = 'Normal';
    }
  },
  created() {
    eventBus.$on('serverWasClicked', (server) => {
      this.server = server;
    });
  }
}
</script>

<style>

</style>

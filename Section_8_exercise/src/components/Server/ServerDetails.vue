<template>
    <div class="col-xs-12 col-sm-6" v-if="serverId != null">
      <p>
        Server: {{ serverId }} was selected, with status: {{ status }}.
      </p>
      <button @click="resetServerStatus">Reset Server Status</button>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  data: function() {
    return {
      serverId: null,
      status: null
    }
  },
  methods: {
    resetServerStatus() {
      this.status = 'Normal';
      var id = this.serverId, status = this.status;
      eventBus.$emit('serverStatusWasReset', {id, status});
    }
  },
  created() {
    eventBus.$on('serverWasClicked', (serverInfo) => {
      this.serverId = serverInfo.id;
      this.status = serverInfo.status;
    })
  }
}
</script>

<style>

</style>

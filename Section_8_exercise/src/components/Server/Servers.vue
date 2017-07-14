<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group" :servers="servers">
          <app-server v-for="server in servers"
            :id="server.id" :status="server.status">
          </app-server>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main';
import Server from './Server.vue';

export default {
  data: function() {
    return {
      servers: [
        {id: 1, status: 'Normal'},
        {id: 2, status: 'Critical'},
        {id: 3, status: 'Unknown'},
        {id: 4, status: 'Normal'}
      ]
    };
  },
  components: {
    appServer: Server
  },
  created() {
    eventBus.$on('serverStatusWasReset', (data) => {
      for (var i in this.servers) {
        console.log('index: ' + i + ' - ' + this.servers[i].id  + ' - ' + data.id)
        if (this.servers[i].id == data.id) {
          this.servers[i].status = data.status;
        }
      }
    });
  }
}
</script>

<style>

</style>

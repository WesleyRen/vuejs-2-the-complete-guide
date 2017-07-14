<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group" :servers="servers">
            <li
                    class="list-group-item"
                    v-for="server in servers"
                    @click="updateServerDetail(server.id, server.status)">
                Server #{{ server.id }}, status: {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main';

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
  methods: {
    updateServerDetail(id, status) {
      eventBus.serverClicked(id, status);
    }
  },
  created() {
    eventBus.$on('serverStatusWasReset', (data) => {
      for (var i in this.servers) {
        console.log(i + ' - ' + data.id)
        if (this.servers[i].id == data.id) {
          this.servers[i].status = data.status;
        }
      }
    })
  }
}
</script>

<style>

</style>

<template>
  <li
          class="list-group-item"
          @click="updateServerDetail(server)">
      Server #{{ server.id }}, status: {{ server.status }}
  </li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: {
    server: Object
  },
  methods: {
    updateServerDetail(server) {
      eventBus.serverClicked(server);
    }
  }
}
</script>

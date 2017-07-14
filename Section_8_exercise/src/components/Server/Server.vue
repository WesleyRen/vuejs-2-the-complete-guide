<template>
  <li
          class="list-group-item"
          @click="updateServerDetail(id, status)">
      Server #{{ id }}, status: {{ status }}
  </li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: {
    id: Number,
    status: String
  },
  methods: {
    updateServerDetail(id, status) {
      eventBus.serverClicked(id, status);
    }
  }
}
</script>

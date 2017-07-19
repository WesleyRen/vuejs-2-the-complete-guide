<template>
  <div id="app">
    <div id="left-bar">
      <ul>
        <li class="selector" @click="selectedModule = 'FirebaseWriter'">
          Firebase writer
        </li>
        <li class="selector" @click="selectedModule = 'C3UI'">
          C3 UI - POC
        </li>
      </ul>
    </div>

    <div id="right-bar">
      <app-firebase-writer v-if="selectedModule == 'FirebaseWriter'">
      </app-firebase-writer>
      <app-c3-ui v-if="selectedModule == 'C3UI'">
      </app-c3-ui>
    </div>

  </div>
</template>

<script>
import appFirebaseWriter from './components/FirebaseWriter.vue';
import appC3Ui from './components/C3UI.vue';
export default {
  name: 'app',
  data() {
    return {
      selectedModule: ''
    }
  },
  components: {
    appFirebaseWriter,
    appC3Ui
  }
}
</script>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#left-bar {
  float:left;
  border-right: 2px solid rgb(221, 221, 221);
  width: auto;
  padding-top: 1em;
}

#right-bar {
  width: auto;
  overflow: auto;
  padding: 5px;
}

.selector:hover {
  cursor: pointer;
  cursor: hand;
}

ul {
  list-style-type: disc;
  padding: 0;
}

li {
  margin: 0 5px 0 20px;
}
</style>

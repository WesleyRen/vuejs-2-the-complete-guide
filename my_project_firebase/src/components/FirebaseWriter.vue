<template>
  <div>
    <h1>Http Write to A Database</h1>
    <h3>Pre-configured entries</h3>
    <div v-for="(eco, idx) in ecos">
        <label style="font-weight: bold;">{{ idx + 1 }}.{{ eco.id }}</label>
        <div style="white-space: pre">
          {{ JSON.stringify(eco) }}
        </div>
    </div>
    <button class="btn btn-primary" @click="submit">write to firebase</button>
    <hr />

    <h3>Add your own entry</h3>
    <textarea style="width: 100%; height: 7em" v-model="newEco"></textarea>
    <button class="btn btn-primary" @click="saveNew">save to firebase</button>
    <hr />

    <h3>What we have in Firebase:</h3>
    <div v-for="eco in ecosFirebase">
      <span style="float: left; padding-right: 1em; cursor: pointer" class="glyphicon glyphicon-trash" aria-hidden="true" @click="removeByKey(eco['.key'])"></span>
      {{ JSON.stringify(eco) }}
    </div>
  </div>
</template>

<script>
import ecosRef from './FirebaseConf';
export default {
  firebase: {ecosFirebase: ecosRef},
  data() {
      return {
        newEco: {},
        eco1: {
          org: "orgorg",
          name: "test CloudRDBMS",
          appType: "Cloud RDBMS",
          env: "dev",
          url: "https://url_to_somewhere",
          clusters:
          [
            {
              dataCenter: "dc1",
              cloud: "dc1c1",
              role: "active",
              hosts:
              [
                {ip: "1.1", name: "crdbms.dc1c1.1"},
                {ip: "1.2", name: "crdbms.dc1c1.2"},
                {ip: "1.3", name: "crdbms.dc1c1.3"}
              ],
            },
            {
              dataCenter: "dc2",
              cloud: "dc2c1",
              role: "dr",
              hosts:
              [
                {ip: "1.1", name: "crdbms.dc2c1.1"},
                {ip: "1.2", name: "crdbms.dc2c1.2"},
                {ip: "1.3", name: "crdbms.dc2c1.3"}
              ],
          }
        ]
      },
      resource: {},
      node: 'data'
    }
  },
  computed: {
    ecos: function() {
      var ecos = [];
      ecos.push(this.eco1);
      return ecos;
    }
  },
  methods: {
    submit() {
      for (var i in this.ecos) {
        var eco = this.ecos[i];
        this.save(eco);
      }
    },
    saveNew() {
        var eco = JSON.parse(this.newEco);
        this.save(eco);
    },
    save(eco) {
      // check if a name exists, and call back a real function to add to Firebase.
      // https://stackoverflow.com/questions/37910008/check-if-value-exists-in-firebase-db
      var submitCallback = this.submitCallback;
      ecosRef.orderByChild("name").equalTo(eco.name).once("value", function(snapshot) {
        var exists = (snapshot.val() !== null);
        submitCallback(eco, exists);
      });
    },
    submitCallback(eco, exists) {
      if (! exists) {
        ecosRef.push(eco);
      } else {
        alert('eco system: "' + eco.name + '" exists!');
      }
    },
    removeByKey(key) {
      ecosRef.child(key).remove();
    }
  }
}
</script>

<style scoped>
</style>

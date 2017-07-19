<template>
  <div>
    <h3>What we have in Firebase:</h3>
    <table id="eco-table" class="table table-striped">
      <thead>
        <tr>
          <th>Eco System Name<input type="text" v-model="filterName" /></th>
          <th>Org(OO)<input v-model="filterOrg" /></th>
          <th>App Type(OO pack)<input v-model="filterAppType" /></th>
          <th>Env (OO env)<input v-model="filterEnv" /></th>
          <th>URL (OO URL to your assembly.appType.env)<input v-model="filterURL" /></th>
          <th>clusters<input v-model="filterClusters" /></th>
          <th>datacenter<input v-model="filterDatacenter" /></th>
          <th>cloud<input v-model="filterCloud" /></th>
          <th>role (active/dr)<input v-model="filterRole" /></th>
          <th>hosts<input v-model="filterHosts" /></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="eco in ecosFirebase">
            <td>{{ eco.name }}</td>
            <td>{{ eco.org }}</td>
            <td>{{ eco.appType }}</td>
            <td>{{ eco.env }}</td>
            <td>{{ eco.url }}</td>
            <td>{{ eco.clusters }}</td>
            <!--
            <td>{{ cluster.dataCenter }}</td>
            <td>{{ cluster.cloud }}</td>
            <td>{{ cluster.role }}</td>
            <td>{{ cluster.hosts }}</td>
            -->
          </tr>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ecosRef from './FirebaseConf';

export default {
  firebase: {ecosFirebase: ecosRef},
  data() {
    return {
      filterName: '',
      filterOrg: '',
      filterAppType: '',
      filterEnv: '',
      filterURL: '',
      filterClusters: '',
      filterDatacenter: '',
      filterCloud: '',
      filterRole: '',
      filterHosts: ''
    };
  },
  filters: {
    toUppercase(value) {
        return value.toUpperCase();
    }
  },
  computed: {
    filteredEcos() {
      return ;
    }
  }
}
</script>

<style scoped>
</style>

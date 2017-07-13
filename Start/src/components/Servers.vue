<template>
    <div class="container">
        <div class="row">
          <header-line></header-line>
        </div>
        <hr>
        <div class="row">
          <server-list></server-list>
          <server-detail></server-detail>
        </div>
        <hr>
        <div class="row">
          <server-management></server-management>
        </div>
    </div>
</template>

<script>
// local component registration:
import HeaderLine from './HeaderLine.vue';
import ServerList from './ServerList.vue';
import ServerDetail from './ServerDetail.vue';
import ServerManagement from './ServerManagement.vue';
export default {
  components: {
    'header-line': HeaderLine,
    'server-list': ServerList,
    'server-detail': ServerDetail,
    'server-management': ServerManagement
  }
}
</script>

<style>

</style>

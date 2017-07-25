<template>
  <div>
    <h3>Some User Details</h3>
    <p>User {{ $route.params.id }} loaded</p>
    <router-link
      tag="button"
      :to="{ name: 'userEdit', params: {id: $route.params.id} }"
      class="btn btn-primary">Edit User</router-link>
  </div>
</template>

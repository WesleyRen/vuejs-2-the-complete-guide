<template>
  <div>
    <label for="firstName">First Name</label>
    <input
      type="text"
      id="firstName"
      v-model="firstName"
      @input="setFullName()"/>
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        v-model="lastName"
        @input="setFullName()"/>
  </div>
</template>

<script>
export default{
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    setFullName() {
      var fullName = {firstName: this.firstName, lastName: this.lastName};
      this.$emit('input', fullName);
    }
  }
}
</script>

<style>
</style>

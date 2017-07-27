<template>
  <div>
    <p>Double Counter (fake, to have a global name conflict) {{ doubleCounter }} </p>
  </div>
</template>

<script>
    export default {
      computed: {
        doubleCounter() {
          return this.$store.getters.doubleCounter;
        }
      },
      created() {
        console.log(this.doubleCounter);
      }
    }
</script>

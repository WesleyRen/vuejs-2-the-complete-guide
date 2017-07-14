<template>
  <div>
    <p>
      New quote
    </p>
    <button @click="counter++">Increase counter</button>
    <p>
      {{ counter }}
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log('New is destroyed')
  },
  deactivated() {
    console.log('New is deactivated')
  },
  activated() {
    console.log('New is activated')
  }
}
</script>

<template>
  <div>
    <slot name='title'></slot>
    <slot name='subtitle'><p>my subtitle</p></slot>
    <slot name='content'></slot>
    <slot></slot> <!-- default slot match to default slot -->
  </div>
</template>

<script>
export default {

}
</script>

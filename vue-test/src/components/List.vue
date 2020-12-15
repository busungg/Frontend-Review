<template>
  <ul>
    <li v-for="item in list" v-bind:key="item">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

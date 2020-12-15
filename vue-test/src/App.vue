<template>
  <List v-bind:list="[1,2,3,4,5,6]"/>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

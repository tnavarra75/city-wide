<template>
  <div id="app">
    <YardSale/>
  </div>
</template>

<script>
import YardSale from './components/YardSale.vue'

export default {
  name: 'app',
  components: {
    YardSale
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  }
</style>

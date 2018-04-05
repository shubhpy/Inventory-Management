<template>
  <div id="app">
    <router-view></router-view>  
  </div>
</template>

<script>
  import router from './router'
  export default {
  name: 'App'
}
</script>

<style lang="scss">
    @import "./styles.scss";
/* #app {
      <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link to="/">Dashboard</router-link>
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

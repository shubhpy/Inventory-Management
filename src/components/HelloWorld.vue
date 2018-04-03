<template>
  <div class="hello" id="app">
    <h1>{{ msg }}</h1>
    <!-- <h2>{{ Notifications }}</h2> -->
    <ul>
      <li v-for="notif in Notifications">
        {{notif.name}} {{notif.message2}} {{notif.message1}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        Notifications: []
      }
    },
    created () {
      fetch('http://localhost:8000/getHomePage')
      .then(response => response.json())
      .then(json => {
        this.Notifications = json.notifications.latest
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  /* li {
    display: inline-block;
    margin: 0 10px;
  } */
  a {
    color: #42b983;
  }
</style>

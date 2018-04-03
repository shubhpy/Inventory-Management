<template>
  <div class="hello" id="app">
    <select v-model="selectPerson">
      <option value="null" disabled hidden>Select Person</option>
        <option v-for="p in boardPersons" v-bind:value="p">
        {{p}}
        </option>
    </select>

    <select v-model="selectBoard">
      <option value="null" disabled hidden>Select Board</option>
        <option v-for="b in boards" v-bind:value="b">
        {{b}}
        </option>
    </select>

    <h2 v-if="selectPerson"> Board Person : {{ selectPerson }}</h2>
    <h2 v-if="selectBoard">  Board  : {{ selectBoard }}</h2>
    
    <br> </br>
    Didn't Find your person, Add Now
    <input type="text" v-model.text="newPerson"> </input>
    <button v-if="newPerson" @click = "boardPersons.push(newPerson)">
    Add {{newPerson}}
    </button>

    <br>
    Didn't Find the Board, Add Now
    <input type="text" v-model.text="newBoard"> </input>
    <button v-if="newBoard" @click = "boards.push(newBoard)">
    Add {{newBoard}}
    </button>
    <!-- <h2>{{ Notifications }}</h2> 
    <ul>
      <li v-for="item in items"> {{item}} </li>
      <li v-for="item in boards"> {{item}} </li>      
    </ul>
    -->

    <autocomplete :suggestions="suggestions" v-model="selection"></autocomplete>
    <h2>{{selection}}</h2>
    
  </div>
</template>

<script>
import Autocomplete from './Autocomplete'
export default {
    name: 'app',
    components: {
      Autocomplete
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        selection: '',
      suggestions: [
        { city: 'Bangalore', state: 'Karnataka' },
        { city: 'Chennai', state: 'Tamil Nadu' },
        { city: 'Delhi', state: 'Delhi' },
        { city: 'Kolkata', state: 'West Bengal' },
        { city: 'Mumbai', state: 'Maharashtra' }
      ],
        items: [
          "Stapler",
          "Stapler pin",
          "Milk",
          "Green Tea"
        ],
        boardPersons:[
          "Akash",
          "Pradeep",
          "Susheela"
        ],
        vendors:[
          "Horizon",
          "Aggarwal",
          "Cafe Coffee"
        ],
        boards : [
          "NABH",
          "NABET",
          "WHO"
        ],
        selectItem : null,
        selectBoard : null,
        selectPerson : null,
        selectVendor : null,
        newPerson : null,
        newBoard : null
      }
    }
    // created () {
    //   fetch('http://localhost:8000/getHomePage')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.Notifications = json.notifications.latest
    //   })
    // }
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

<template>
  <div id="inner_remaining">

    <!-- <h2>{{ Notifications }}</h2> 
    <ul>
      <li v-for="item in items"> {{item}} </li>
      <li v-for="item in boards"> {{item}} </li>      
    </ul>
    -->
    <Autocomplete :suggestions="suggestions" v-model="selection"></Autocomplete>
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
        entryDate : '',
        suggestions: [
          {item:"Akash",quantity:""},
          {item:"Pradeep",quantity:""},
          {item:"Susheela",quantity:""},
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
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        selectItem : null,
        selectBoard : null,
        selectPerson : null,
        selectVendor : null,
        newPerson : null,
        newBoard : null
      }
    },
    methods: {
      addBoardPerson: function() {
        console.log("Here");
        // console.log($http.get);
        // console.log($http.post);      
        var datatosend = {
          newPerson : this.newPerson
          // dict : {heelo:"Helllo"},
          // list : ["Heeyy","heyyy"]
        };

        console.log(datatosend);

        // var formData = new FormData();
        // formData.append('newPerson', this.newPerson);
        // formData.append('dict', {heelo:"Helllo"});
        // formData.append('list', ["Heeyy","heyyy"]);
        
        this.$http.post('http://localhost:8000/addBoardPerson',datatosend)
        .then(function (data) {
          console.log(data.body);
          this.boardPersons.push(this.newPerson);
          this.suggestions.push({item:this.newPerson,quantity:''});
        }.bind(this),function(data){
          console.log(data);
        })
      },
      getBoardPerson: function() {
        fetch('http://localhost:8000/addBoardPerson')
          .then(response => response.json())
          .then(json => {
            this.boardPersons.push(json.persons);
            this.suggestions.push({item:json.persons,quantity:''})
      })
      }
    }
    // created () {
    //     fetch('http://localhost:8000/addBoardPerson')
    //       .then(response => response.json())
    //       .then(json => {
    //         this.boardPersons.push(json.persons);
    //         this.suggestions.push({item:json.persons,quantity:''})
    //   })
    // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("//unpkg.com/element-ui@2.3.3/lib/theme-chalk/index.css");

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
  #inner_remaining {
      background-color: #fff;
      position: absolute;
      top: 0px;
      bottom: 0;
      width: 100%; 
  }
</style>

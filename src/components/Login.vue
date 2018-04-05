<template>
<div class="row no-gutters min-h-fullscreen bg-white">
  <div class="col-md-6 col-lg-7 col-xl-8 d-none d-md-block bg-img" data-overlay="5">
    <div class="row h-100 pl-50">
      <div class="col-md-10 col-lg-8 align-self-end">
        <h1 class="text-white">Inventory Management</h1>
        <p class="text-white">Quality Council Of India</p>
        <br><br>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-5 col-xl-4 align-self-center">
    <div class="px-80 py-30">
      <h4>Login</h4>
      <p><small>Sign into your account</small></p>
      <br />
      <form>
        <div class="form-group do-float">
          <label>Username</label>
          <input type="text" class="form-control" name="email" v-model="email" />
        </div>
        <div class="form-group do-float">
          <label>Password</label>
          <input type="password" class="form-control" name="pwd" v-model="pwd" />
        </div>
        <div class="form-group">
          <button class="btn btn-bold btn-block btn-primary" type="submit" @click="loginMethod">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
  import router from '../router'

export default {
  name: 'LoginComponent',
  data() {
      return {
        email : '',
        pwd : ''
      }
    },
  methods: {
      loginMethod: function(e) {
        e.preventDefault();
        console.log("Logging Here");
        // console.log($http.get);
        // console.log($http.post);
        // var datatosend = {
        //   email : this.uname,
        //   pwd : this.pwd
        //   // dict : {heelo:"Helllo"},
        //   // list : ["Heeyy","heyyy"]
        // };

        // console.log(datatosend);

        var formData = new FormData();
        formData.append('email', this.email);
        formData.append('pwd', this.pwd);        
        // formData.append('dict', {heelo:"Helllo"});
        // formData.append('list', ["Heeyy","heyyy"]);
        
        this.$http.post('http://localhost:8000/login',formData)
        .then(function (data) {
          console.log(data.body);
          localStorage.setItem('token',data.body.token);
          router.push({ name: "Tables" });
          // this.boardPersons.push(this.newPerson);
          // this.suggestions.push({item:this.newPerson,quantity:''});
        }.bind(this),function(data){
          console.log("In bind")
          console.log(data.body);
        })
      }
    },
  created () {
    if(localStorage.getItem('token')){
      console.log("Token Found");
      router.push({ name: "Tables"});      
    }else{
      router.push({ name: "Login"});
    }
  }
}
</script>

<style>
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
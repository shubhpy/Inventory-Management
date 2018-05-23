<template>
  <div class="row no-gutters min-h-fullscreen bg-white">
    <div class="snacks" :class="{ grown: grown, sunk:sunk }">{{textToShow}}</div>
    <div class="col-md-6 col-lg-7 col-xl-8 d-none d-md-block bg-img" data-overlay="5">
      <div class="row h-100 pl-50 h-fullscreen">
        <div class="col-md-10 col-lg-8 align-self-end">
          <h1 class="text-white">Inventory Management</h1>
          <p class="text-white">Quality Council Of India</p>
          <br><br>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-4 align-self-center h-fullscreen">
      <div class="px-80 py-30">
        <h4>Login</h4>
        <p><small>Sign into your account</small></p>
        <br />
        <form>
          <div class="form-group do-float">
            <label>Username</label>
            <input type="text" value="" placeholder="Enter your username..." class="form-control" name="email" v-model="email" />
          </div>
          <div class="form-group do-float">
            <label>Password</label>
            <input type="password" value="" placeholder="Enter your password..." class="form-control" name="pwd" v-model="pwd" />
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
    name: 'Login',
    data() {
      return {
        textToShow:'',
        grown:false,
        sunk:false,
        errr:false,
        succss:false, 
        textToShow:'',
        email : '',
        pwd : ''
      }
    },
    methods: {
      snackMsg(msg,timeout){
        this.sunk = false
        this.grown = true
        this.textToShow = msg
        setTimeout(() => {
          this.grown = false
          this.sunk = true
          this.textToShow = ""
        }, timeout );
      },
      loginMethod: function(e) {
        e.preventDefault();
        var datatosend = {
          email:this.email,
          password:this.pwd
        }
        this.$http.post( this.$hostname+"login" , JSON.stringify(datatosend) )
        .then(function (data) {
          if (data.body.success){
            localStorage.setItem( 'token' , data.body.token );
            
            router.push({ name: "Tables" });
            return
          } else {
            this.snackMsg( "Not found...", 3500 )
          }
        }.bind(this),function(data){
          this.snackMsg( "API not working...", 3500 )
        })
      }
    },
  created () {
    if(localStorage.getItem('token')){
      console.log("to Table")
      router.push({ name: "Tables" });
    } else {
      console.log("to Login")
      router.push({ name: "Login" });
    }
  }
}
</script>
<style>
  .align-self-center.h-fullscreen {
    background:#f8f8f8;
  } input {
    text-transform:inherit;
  } h1.text-white {
    text-shadow:3px 3px 2px rgba(0, 121, 116, 1);
  }
</style>
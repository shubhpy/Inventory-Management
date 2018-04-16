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
        errr:false,
        succss:false, 
        textToShow:'',
        email : '',
        pwd : ''
      }
    },
  methods: {
      loginMethod: function(e) {
        e.preventDefault();
        // console.log("Logging Here");
        var datatosend = {
          email : this.email,
          password : this.pwd
        };
        //console.log(datatosend);

         this.$http.post(this.$hostname+"login" , JSON.stringify(datatosend) )
        .then(function (data) {
          //console.log(data.body);
          if (data.body.success){
            localStorage.setItem('token',data.body.token);
            router.push({ name: "Tables" });
          } else {
            this.errr = true
            this.textToShow = "Not found..."
            setTimeout(() => {
              this.succss = false
              this.textToShow = ""
            }, 3500 );
            //alert("not found")
          }
        }.bind(this),function(data){
          this.errr = true
          this.textToShow = "API not working..."
          setTimeout(() => {
            this.succss = false
            this.textToShow = ""
          }, 3500 );
          //alert("API not working");
        })
       }
    },
  created () {
    if(localStorage.getItem('token')){
      //console.log("Token Found");
      router.push({ name: "Tables"});      
    }else{
      router.push({ name: "Login"});
    }
  }
}
</script>

<style>
input{text-transform:inherit;}
</style>
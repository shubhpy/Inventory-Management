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
          <label for="uname">Username</label>
          <input type="text" class="form-control" name="uname" v-model="uname" />
        </div>
        <div class="form-group do-float">
          <label for="pwd">Password</label>
          <input type="password" class="form-control" name="pwd" v-model="pwd" />
        </div>
        <div class="form-group">
          <button class="btn btn-bold btn-block btn-primary" type="submit" @click="login()">Login</button><!-- [routerLink]="['/user']"-->
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
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
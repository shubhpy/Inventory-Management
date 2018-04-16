<template>
  <div id="app">
    <router-view></router-view>  
  </div>
</template>

<script>
  import router from './router'
  export default {
    name:'App',
    data() {
      return {
        textToShow:'',
        grown:false,
        sunk:false,
      }
   },
    // methods:{
    //   snackMsg(msg,timeout){
    //     this.sunk = false
    //     this.grown = true
    //     this.textToShow = msg
    //     setTimeout(() => {
    //       this.grown = false
    //       this.sunk = true
    //       this.textToShow = ""
    //     }, timeout );
    //   }
    // }
  }
</script>
<style lang="scss">
  @import "./styles.scss";
</style>
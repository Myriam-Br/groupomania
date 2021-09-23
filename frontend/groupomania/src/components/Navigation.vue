<template>
<header>
   <div class="navigation">
     
    <img :src="mylogoSVG" alt="" class="logo">
    
    <div class="menu">
      <ul class="navigation-links">
        <router-link class="link" :to="{ name : 'signin'}">Sign in</router-link>
        <router-link class="link" :to="{ name : 'signup'}">Sign up</router-link>   
      </ul>
    </div>
  </div>
</header>
 
</template>

<script>
//import Logo from "../assets/icon-left-font-monochrome-white.svg";
export default {
  name: 'navigation', 
  components: {
   
  },
  data() {
    return {
       mylogoSVG: require('../assets/icon-left-font-monochrome-white.svg')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation{
  background-color: rgb(46, 53, 58);
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.534);
  

  .logo{
    margin: 18px 20px;
    width: 150px;
  }
  .logo-white{
    background-color: aquamarine;
  }

  .navigation-links{
    margin-top: 20px;
    .link{
      margin-right: 20px; 
      color: white;
    }
   
  }
  

}

</style>

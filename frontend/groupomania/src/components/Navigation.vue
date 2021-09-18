<template>
<header>
   <div class="navigation">
     
    <router-link class="logo link" :to="{ name : 'home'}">
    </router-link>
    
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
  }
  .logo-white{
    background-color: aquamarine;
  }

  .navigation-links{
   
    .link{
      margin-right: 20px; 
      color: white;
    }
   
  }
  

}

</style>

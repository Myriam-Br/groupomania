<template>
<header>
   <div class="navigation">
     <router-link class="logo link" :to="{ name : 'home'}">GROUPOMANIA</router-link>
    <div class="menu">
      <ul class="navigation-links">
        <router-link class="link" :to="{ name : 'home'}">Home</router-link>
        <router-link class="link" :to="{ name : 'signin'}">Sign in</router-link>
        <router-link class="link" :to="{ name : 'signup'}">Sign up</router-link>   
      </ul>
    </div>
  </div>
</header>
 
</template>

<script>
export default {
  name: 'navigation', 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation{
  background-color: rgb(187, 218, 236);
  display: flex;
  justify-content: space-between;

  .logo{
    margin: 18px 20px;
  }

  .navigation-links{
    .link{
      margin-right: 20px;
    }
   
  }
  

}

</style>

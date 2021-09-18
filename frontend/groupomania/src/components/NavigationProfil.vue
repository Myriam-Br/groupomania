<template>
  <header>
   <div class="navigation">
     <router-link class="logo link" :to="{ name : 'home'}">
       <router-link class="logo link" :to="{ name : 'home'}">

    </router-link>
     </router-link>
    <div class="menu">
      <ul class="navigation-links">
        <router-link class="link" :to="{ name : 'forum'}">Forum</router-link>
        <router-link class="link" :to="{ name : 'createpost'}">Create Post</router-link>
        <router-link class="link profil" :to="{ name : 'account'}">Account</router-link>
        <router-link class="link profil" :to="{ name : '#'}">Sign out</router-link> 
      </ul>
    </div>
  </div>
</header>
</template>

<script>
//import Logo from "../assets/icon-left-font-monochrome-white.svg";
export default {
  name: 'navigationProfil', 
  components :{
   
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation{
  background-color: rgb(46, 53, 58);
  display: flex;
  justify-content: space-between;
  position: relative;

  .logo{
    margin: 18px 20px;
  }

  .navigation-links{
    .link{
      margin-right: 20px;
      color: white;
    }  
  
    .profil-dropdown{ 
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        background-color: bisque;
    }
   
  }
}

</style>


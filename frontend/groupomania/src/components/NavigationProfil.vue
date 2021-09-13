<template>
  <header>
   <div class="navigation">
     <router-link class="logo link" :to="{ name : 'home'}">GROUPOMANIA</router-link>
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

export default {
  name: 'navigationProfil', 
  components :{

  },

  data() {
      return{
      
      }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation{
  background-color: rgb(187, 218, 236);
  display: flex;
  justify-content: space-between;
  position: relative;

  .logo{
    margin: 18px 20px;
  }

  .navigation-links{
    .link{
      margin-right: 20px;
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


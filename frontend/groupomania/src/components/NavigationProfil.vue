<template>
  <header>
   <div class="navigation">
     <router-link class="logo link" :to="{ name : 'home'}">GROUPOMANIA</router-link>
    <div class="menu">
      <ul class="navigation-links">
        <router-link class="link" :to="{ name : 'forum'}">Forum</router-link>
        <router-link class="link" :to="{ name : 'createpost'}">Create Post</router-link>
        <router-link  @mouseover="hover = true"  @mouseleave="hover = false"  class="link profil" :to="{ name : 'profil'}">Profil</router-link>
        <ProfilDropDown v-if="hover" class="profildropdown"/>
      </ul>
    </div>
  </div>
</header>
</template>

<script>
import ProfilDropDown from "../components/ProfilDropDown.vue"
export default {
  name: 'navigationProfil', 
  components :{
      ProfilDropDown
  },

  data() {
      return{
        hover: true,
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
  
    .profildropdown{
        
        position: absolute;
        right: 0;
    }
   
  }
}

</style>


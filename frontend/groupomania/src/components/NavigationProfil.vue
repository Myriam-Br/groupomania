<template>
  <header>
   <div class="navigation">
      <img :src="mylogoSVG" class="logo"/>

    <div class="menu">
      <ul class="navigation-links">
        <div class="nav_default">
        <router-link class="link" :to="{ name : 'forum'}">Forum</router-link>
        <router-link v-if="isConnected" class="link profil" :to="{ name : 'account'}">Account</router-link>
        </div>  
        <div class="show_disconnected" v-if="!isConnected">
        <router-link class="link" :to="{ name : 'signin'}">Sign in</router-link>
        <router-link class="link" :to="{ name : 'signup'}">Sign up</router-link>   
        </div>  
        <button v-else class="logout" @click="logout"></button>         
      </ul>
    </div>
  </div>
</header>
</template>

<script>
import axios from "axios"
export default {
  name: 'navigationProfil', 
  components :{

  },
  data() {
    return{ 
      mylogoSVG: require('../assets/icon-left-font-monochrome-white.svg'),
      isConnected : localStorage.getItem('userID'),

    }
  },

  methods :{
    logout() {
       axios.get('http://localhost:8080/api/users/logout')
    .then(
      response => console.log(response),
     
    )
    .catch(
      error => console.log(error)
    )

    this.$router.push('/') 
    localStorage.clear()
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
  margin-bottom: 50px;

  .logo{
    margin: 18px 20px;
    width: 150px;
  }

  .navigation-links{
    margin-top: 20px;
    display: flex;
    .link{
      margin-right: 20px;
      color: white;
    }  
    .logout{
      margin-right:20px;
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


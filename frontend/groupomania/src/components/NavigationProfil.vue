<template>
   <div class="navigation">
      <img :src="mylogoSVG" class="logo" alt="logo-entreprise-groupomania"/>    
      
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
        <button v-else class="logout" @click="logout"><img class="power_off" :src="this.power_off" alt="disconnect"></button>         
      </ul>
    </div>
  </div>

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
      power_off: require('../assets/power_off.svg'),
    }
  },

  methods :{



    logout() {
       axios.get('/users/logout')
    .then(
      response => console.log(response),
     
    )
    .catch(
      error => console.log(error)
    )

    this.$router.push('/') 
    localStorage.clear();
    location.reload()
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
  position: relative;

  .logo{
    margin: 18px 20px;
    width: 150px;
  }
  .btn-menu{
    background-color: transparent;
    box-shadow: none;
    margin-top: 5px;
  }
  .hamburger{
    width: 30px; 
    right: 0;
  }

  .navigation-links{
    
    display: flex;
    margin-top: 18px;
    

    .link{
      margin-right: 0px;
      color: white;
      font-size: 15px;
      margin-right: 10px;
      
    }  
    .logout{
      margin-right:20px;
      width: 30px;
      border-radius: 50px;
      
      .power_off{
        width: 12px;
      }
     
    }
   
  }
}

</style>


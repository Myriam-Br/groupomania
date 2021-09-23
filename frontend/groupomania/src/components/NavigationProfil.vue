<template>
  <header>
   <div class="navigation">
      <img :src="mylogoSVG" class="logo"/>

 
    <div class="menu">
      <ul class="navigation-links">
        <router-link class="link" :to="{ name : 'forum'}">Forum</router-link>
        <router-link class="link" :to="{ name : 'createpost'}">Create Post</router-link>
        <router-link class="link profil" :to="{ name : 'account'}">Account</router-link>
        <button class="logout" @click="logout"></button>
      </ul>
    </div>
  </div>
</header>
</template>

<script>
//import Logo from "../assets/icon-left-font-monochrome-white.svg";
import axios from "axios"
export default {
  name: 'navigationProfil', 
  components :{

  },
  data() {
    return{ 
      mylogoSVG: require('../assets/icon-left-font-monochrome-white.svg')

    }
  },

  methods :{
    logout() {
       axios.get('http://localhost:8080/api/users/logout')
    .then(
      response => console.log(response),
      this.$router.push('/') 
    )
    .catch(
      error => console.log(error)
    )

    localStorage.removeItem("mytoken");
    localStorage.removeItem("userID");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
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

  .navigation-links{
    margin-top: 20px;
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


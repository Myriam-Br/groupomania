<template>
<div class="container profil-user">
    <h1>MY PROFIL</h1>
    <p><font-awesome-icon icon="fa-solid fa-power-off" /></p>
    <div class="profil-info">
        <p class="username">{{this.username}}</p>
        <p class="email">{{this.email}}</p>
    </div>
    <router-link class="edit-profil link" :to="{ name : 'editprofil'}">Edit</router-link> <br>
</div>
  
</template>

<script>
//import axios from 'axios'

export default {
    name:"account",
    
    data() {
        return {
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),

        }
    },

  


}
</script>

<style lang="scss" scoped>
    .container{
        font-size: 16px;
        color: white;

        .profil-info{
            margin-bottom: 20px;
   
        }
        .edit-profil{
            align-self: center;
            color: white;
        }
    }
</style>
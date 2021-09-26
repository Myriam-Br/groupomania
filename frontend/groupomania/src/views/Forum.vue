<template>
  <div class="container">
      <h1 class="msg_bienvenue">Bienvenue {{this.username_logged_in}} !</h1>
      <h2 class="msg_intro">Découvrez les toutes dernières publications de vos collègues!</h2>

      <button   @click="createPublication" class="show_create" >+</button>
      <span class="errMsg">{{this.errMsg}}</span>
       <div class="forum"> 
         <div class="publications">
            <PostCard v-for="(publication, index) in this.publications " :key="index" :publication="publication" class="publication"/>            
         </div>   
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostCard from "../components/Posts";
//import Likes from "../components/Likes";
//import { response } from 'express';


export default {
    name:"forum",
    components:{
      PostCard,
    
    },
    
    data() {
      return {
        title: null,
        userID : localStorage.getItem('userID'),
        publications: null,
        show_create: true,
        //publicationArray: localStorage.getItem('publicationArray'),
        errMsg: null,
        usernamePublication: null,
        userIdPublication: null,
        username_logged_in: null,
      }
    },


    mounted() {
     
      axios
      .get('/publication')
      .then(
        response => {
          this.publications = response.data.data,
          console.log('publication by ID',this.publications);
            
        }    
      )
      .catch(
        error => console.log(error)
      )


      axios
      .get('/users/' + this.userID)
      .then(
        response => {
          console.log(response.data.data[0].username);
          this.username_logged_in =  response.data.data[0].username;

        }
      )
      .catch(
        error => console.log(error)
      )
      
    
    },

    methods:{
      createPublication(){
        
        if(this.userID){
            
            console.log('I work');
            this.$router.push('/createpost');  
        } else {
            
            //console.log('login to create a publication');
            this.errMsg = "Please login to create a publication"
        }    
        
      }
    }



     
}


</script>

<style lang="scss" scoped>

  .container{
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    h2{
      text-align: center;
      margin-bottom: 30px;
    }
    .show_create{
      width: 40px;
      padding: 0;
      align-self: center;
      margin-bottom: 20px;
      font-size: 35px;
      border-radius: 100px;
      background-color: rgb(224, 244, 246);
    }
    .errMsg{
          align-self: center;
          color: red;
    }
    .forum{
        display: flex;
        flex-direction: column;   
     
    }
  }

</style>
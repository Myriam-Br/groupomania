<template>
  <div class="container">
      <h1>FORUM PAGE</h1>
      <button v-if="show_create"  @click="createPublication" class="show_create" >Create post</button>
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
        userId : localStorage.getItem('userID'),
        publications: null,
        show_create: true,
        publicationArray: localStorage.getItem('publicationArray'),
        errMsg: null,
        usernamePublication: null,
        userIdPublication: null
      }
    },


    mounted() {
     
      const headers = { 
        "Authorization": "Bearer " + localStorage.getItem('mytoken'),
      }; 
      console.log(headers);
      axios
      .get('/publication')
      .then(
        response => {
          this.publications = response.data.data,
          console.log('publication by ID',this.publications);
          var publicationArray = JSON.parse(this.publications);
          localStorage.setItem('publicationArray', publicationArray);
          console.log(this.publications);    
        }    
      )


        axios.get('/users/' + localStorage.getItem('userComment'))
       .then(
           response => {
             this.username = response.data.data[0].username;
             this.userID = response.data.data[0].created_at;
            // console.log(response.data.data[0]);
           }
       )
       .catch(
           error => console.log(error)
       )
    
    },

    methods:{
      createPublication(){
        
        if(this.userId){
            this.show_create
            console.log('I work');
            this.$router.push('/createpost');  
        } else {
            this.show_create = !this.show_create
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
    .show_create{
      width: 50px;
      align-self: center;
    }
    .errMsg{
          align-self: center;
          color: red;
    }
    .forum{
        display: flex;
        flex-direction: column;   
        padding: 0px 15%;

       
    }
  }

</style>
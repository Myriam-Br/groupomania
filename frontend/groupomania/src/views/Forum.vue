<template>
  <div class="container">
      <h1>FORUM PAGE</h1>
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
        publications: null,
        publicationArray: localStorage.getItem('publicationArray'),
      }
    },


    mounted() {
     
       const headers = { 
        "Authorization": "Bearer " + localStorage.getItem('mytoken'),
      }; 
      console.log(headers);
      axios
      .get('/publication', { headers})
      .then(
        response => {
          this.publications = response.data.data,
          console.log('publication by ID',this.publications);
          var publicationArray = JSON.stringify(this.publications);
          localStorage.setItem('publicationArray', publicationArray)
         
        }    
      )

     
    },



     
}


</script>

<style lang="scss" scoped>

  .container{
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
    .forum{
        display: flex;
        flex-direction: column;   
        padding: 0px 15%;
    }
  }

</style>
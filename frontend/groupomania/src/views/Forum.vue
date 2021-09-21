<template>
  <div class="container">
      <h1>FORUM PAGE</h1>
       <div class="forum"> 
         <div class="publication">
            <PostCard v-for="(publication, index) in this.publications " :key="index" :publication="publication"/>
         </div>
    
      </div>
      <span>{{info}}</span>
      <span>{{test}}</span>
      <span>{{likes}}</span>
  </div>
</template>

<script>
import axios from 'axios';
import PostCard from "../components/Posts";
//import { response } from 'express';


export default {
    name:"forum",
    components:{
      PostCard,
    },
    
    data() {
      return {
        info: null,
        test: null,
        title: null,
        data: null,
        likes: null
      }
    },


    mounted() {
      axios
      .get('/publication')
      .then(
        response => {
          this.publications = response.data.data,
          this.info = response.data.data[8],
          this.title = response.data.data[8].title
          console.log('publication by ID',this.publications.id);
        }    
      )
  
      axios     
      .get('/likes/' ,{
        params: {
          publicationID : 9
        }
      })
      .then(
        response => {
          this.likes = response.data.data
          console.log(this.likes)
        }       
      )
       
    }

     
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

    .publication{
      border: 2px solid black;
      height: 10px;
      margin-bottom: 6px;
    }
  }

</style>
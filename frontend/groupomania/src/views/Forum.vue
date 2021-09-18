<template>
  <div class="container">
      <h1>FORUM PAGE</h1>
       <div class="forum"> 
      <PostCard />
      </div>
      <span>{{info}}</span>
  </div>
</template>

<script>
import axios from 'axios';
import PostCard from "../components/Posts";


export default {
    name:"forum",
    components:{
      PostCard,
    },
    
    date() {
      return {
        info: null,
      }
    },

    mounted () {
     axios
     .get('/publication')
     .then(response => (this.info = response.data))
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
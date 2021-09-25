<template>
  <div class="likes">
        <button @click="sendLike" class="like"></button>
        <span class="like-counter" >0</span>
        <button  @click="sendDislike" class="dislike"></button>
        <span class="dislike-counter">0</span> 
  </div>
</template>

<script>
//import axios from 'axios';
//import axios from 'axios';
//import axios from 'axios'
export default {
    name: 'likes',
    props: [],
    data() {
      return{
        userID : localStorage.getItem('userID'),
        //like_count: null,
        //dislike_count:null,
        like:null,
        dislike:null,
        publicationArray: JSON.parse(localStorage.getItem('publicationArray')),

      }
             
    },

    methods: {
      sendLike() {
        this.like = 1,
        this.dislike = 0
       //console.log('send like');
      // console.log(this.publicationArray.length);
      },

      sendDislike() {
        this.like = 0,
        this.dislike = 1
      // console.log('send dislike');
      }
       
    },

  

}
</script>

<style lang="scss">

 .like{
        background-color: rgb(72, 218, 72);
        width: 20px;
        height: 20px;
    }
  .dislike{
      background-color: rgb(200, 43, 43);
      width: 20px;
      height: 20px;
  }

</style>
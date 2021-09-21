<template> 
    <div class="post">
        <h2>{{publication.title}}</h2>
        <span>{{publication.id}}</span>
        <img :src="publication.imageUrl" class="gif_img" alt="image">
        <button @click="sendLike" class="like"></button>
        <span class="like-counter"></span>
        <button class="dislike"></button>
        <span class="dislike-counter"></span> 
        <Comments/>  
        <span>{{this.message}}</span>
        <span class="posted_at">Posted: {{publication.created_at}}</span> 
    </div>
   
</template>

<script>
import axios from 'axios'
import Comments from "../components/Comments"
//import { response } from 'express'
//import Likes from "../components/Likes"
export default {
    props:["publication"],

    components: {
        Comments      
    },

    data() {
        return {
            title: null,
            imageUrl: null,
            test:null,
            likes:null,
            dislikes: null,
            message:null
        }
    },

    methods: {
        async sendLike() {
            this.likes = 1;
            this.dislikes = 0;
            const response = await axios.post('/likes', {
            userID: 61,
            publicationID: 14,
            like: this.likes,
            dislike: this.dislikes,
           });
            console.log(response.data);
        },
        async sendDislike() {
            this.likes = 0;
            this.dislikes = 1;
            const response = await axios.post('/likes', {
            userID: 61,
            publicationID: 14,
            like: this.likes,
            dislike: this.dislikes,
           });
            console.log(response.data);

            if(response.data.status==false){
                this.message = "you've already liked/disliked this publication!";
                console.log('already rated');
            } else {
                console.log(response.data.message);
            }
        },
    },

    mounted(){
       axios

    }


   


  

   
}
</script>

<style lang="scss" scoped>


    
.post{
    background-color: rgb(156, 180, 223);
    width: 100%;
    height: 350px;
    padding: 5px 20px;
    border-radius: 10px;
    align-self: center;
    margin-bottom: 20px;

   h2{
       text-align: center;
   }

    .comment-section{
        width: 92%;
        height: 50px;
        background-color: rgb(255, 255, 255);
        border: 1px black solid;
    }

    .gif_img{
        width: 100%;
        height: 200px;
        background-color: aqua;
    }

    input{
        height: 50px;
    }
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
}



</style>
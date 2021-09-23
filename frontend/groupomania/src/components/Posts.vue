<template> 
    <div class="post">
        <h2>{{publication.title}}</h2>
        <span>{{publication.id}}</span>
        <img :src="publication.imageUrl" class="gif_img" alt="image">
        
        <div class="likes">
        <button @click="sendLike" class="like"></button>
        <span class="like-counter" >{{this.like_count}}</span>
        <button  @click="sendDislike" class="dislike"></button>
        <span class="dislike-counter">{{this.dislike_count}}</span> 
        </div>
        <Comments v-for="(comms, index) in this.comment_list" :key="index" :comms="comms"/>
        <div class="comment-field-container">
             <input class="comment_field" type="text" v-model="comment_field"> 
             <button @click="createComment">send</button>
        </div> 
       

        <span>{{this.message}}</span>
        <span class="posted_at">Posted: {{publication.created_at}}</span> 
        <button @click="recupID">test</button>
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
        Comments,   
    },

    data() {
        return {
            userID : localStorage.getItem('userID'),
            like: true,
            title: null,
            imageUrl: null,
            message:null, 
            like_count: null,
            dislike_count:null,
            publicationArray : JSON.parse(localStorage.getItem('publicationArray')),
            comment_list : null,
            comment_field: null

        }
    },

    methods: {
        recupID(){
            console.log(this.publication.id);
        }, 
        sendLike() {
            this.like = 1,
            this.dislike = 0
            console.log('send like');
            console.log(this.publicationArray.length);
            axios
            .post('likes', {
                userID: this.userID,
                publicationID: this.publication.id,
                like: this.like,
                dislike: this.dislike,
            })
        },

        sendDislike() {
            this.like = 0,
            this.dislike = 1
            console.log('send dislike');
            axios
            .post('likes', {
                userID: this.userID,
                publicationID: this.publication.id,
                like: this.like,
                dislike: this.dislike,
            })
        },

        createComment() {
            axios
            .post('/comments', 
                {
                    userID: this.userID,
                    publicationID: this.publication.id,
                    commentaire: this.comment_field,
                    created_at: new Date()
                }
            )
        }
    },

     mounted() {
            const headers = { 
            "Authorization": "Bearer " + localStorage.getItem('mytoken'),
            }; 
   
               //get total likes
            axios.get('/likes/total_likes/' + this.publication.id, { headers})
                .then(
                    response => this.like_count = parseInt(response.data.data[0].total_likes)
                )
                .catch (       
                    console.log('ERROR')
                )
          
            axios.get('/likes/total_dislikes/' + this.publication.id, { headers})
            
                .then(
                response => this.dislike_count = parseInt(response.data.data[0].total_dislikes)
                ) 
                .catch(
                    console.log('ERROR')
                )

            axios.get('/comments/' + this.publication.id, {headers})
                .then(
                    response => this.comment_list = response.data.data
                )
                .catch(
                    console.log('ERROR')
                )

    }
}
</script>

<style lang="scss" scoped>


    
.post{
    background-color: rgb(156, 180, 223);
    width: 100%;
    height: auto;
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
    .comment-field-container{
        display: flex;
        .comment_field{
            height: 30px;
            width: 99%;     
        }

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
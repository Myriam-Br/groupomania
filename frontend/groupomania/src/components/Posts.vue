<template> 
    <div class="container">
        <div class="post">
            <div class="info_user">  
                <span>{{this.username}}</span> 
                <span class="posted_at"> {{publication.created_at}}</span> 
            </div>

            <h2>{{publication.title}}</h2>
            <img :src="publication.imageUrl" class="gif_img" alt="image">
            <div class="interaction">
                <div class="likes">
                    <div class="like">
                        <button @click="sendLike" class="like-btn"></button>
                        <span class="like-counter" >{{this.like_count}}</span>
                    </div>
                    <div class="dislike">
                        <button  @click="sendDislike" class="dislike-btn"></button>
                        <span class="dislike-counter">{{this.dislike_count}}</span> 
                    </div>
                </div> 
                <button @click="showComments" class="show">comment</button>
                <span>{{this.message}}</span>
                <button @click="test">test</button>
            </div>
         </div>

    </div>
   
   
</template>

<script>
import axios from 'axios'
//import Comments from "../components/Comments"
//import { response } from 'express'
//import Likes from "../components/Likes"
export default {
    props:["publication"],

    components: {
          
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
            comment_field: null,
            show: null,
            username: null,
            //comment_count: null,
            created_at: this.publication.created_at
        }
    },

    methods: {
        
       
        test(){
            console.log();
        }, 
        sendLike() {
            /*
            const headers = { 
                "Authorization": "Bearer " + localStorage.getItem('mytoken'),
            }; */
            this.like = 1,
            this.dislike = 0
            console.log('send like');
            console.log(this.publicationArray.length);
            axios
            .post('likes',{
                userID: this.userID,
                publicationID: this.publication.id,
                like: this.like,
                dislike: this.dislike,
            })
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.log(error)
            )
        },

        sendDislike() { 
            /*
            const headers = { 
                "Authorization": "Bearer " + localStorage.getItem('mytoken'),
            }; */
            //console.log(headers);
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

        

        showComments(){
            this.show = true;
            this.$router.push('/publication_by_id'); 
            localStorage.setItem('publicationById', this.publication.id) 
           console.log('CHECK PUBLICATION: ', this.publication.userID);
            localStorage.setItem('publicationByUserId', this.publication.userID);   
        }


    },

     mounted() {
         /*
            const headers = { 
            "Authorization": "Bearer " + localStorage.getItem('mytoken'),
            }; */
   
               //get total likes
            axios.get('/likes/total_likes/' + this.publication.id)
                .then(
                    response => this.like_count = parseInt(response.data.data[0].total_likes)
                )
                .catch (       
                    console.log('ERROR')
                )
          
            axios.get('/likes/total_dislikes/' + this.publication.id)
            
                .then(
                response => this.dislike_count = parseInt(response.data.data[0].total_dislikes)
                ) 
                .catch(
                    console.log('ERROR')
                )

            axios.get('/comments/' + this.publication.id)
                .then(
                    response => this.comment_list = response.data.data
                )
                .catch(
                    console.log('ERROR')
                )



            axios.get('/users/' + this.publication.userID)
                .then(
                    response => {
                    console.log('INFO USER:', response);
                    this.username = response.data.data[0].username;
                    }
                )
                .catch(
                    error => console.log(error)
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
    border-radius: 0px;
    align-self: center;
    color: black;

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
    .interaction{
        display: flex;
        justify-content: center;
        .likes{
            display: flex;
            margin-right: 10px;

            .like{
                display: flex; 
                margin-right: 10px;
                .like-btn{
                    background-color: rgb(72, 218, 72);
                    width: 20px;
                    height: 20px; 
                    margin-right: 5px;    
                }        
            }
             .dislike{
                display: flex;
                .dislike-btn{
                    background-color: rgb(200, 43, 43);
                    width: 20px;
                    height: 20px;
                    margin-right: 5px;
                }
            }
        }
       
        
        
    }

    
   
}



</style>
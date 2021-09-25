<template>
<div class="container">
  <div class="post_container">
    <div class="info_post">
       <span>{{this.username_publication}}</span>
       <span class="posted_at">Posted: {{this.created_at}}</span>
    </div>
    
    <div class="post">
        <h2></h2>
        <span></span>
        <img class="gif_img" alt="image">
        <button class="btn_delete_publication" v-if="this.show_delete" @click="deteteComment">x</button>
        
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
        </div>

        <Comments  v-for="(comms, index) in this.comment_list" :key="index" :prop="comms" class="comment-section"/>

          <div class="comment-field-container">
              <input class="comment_field" type="text" v-model ="comment_field"> 
              <button @click="createComment">send</button>    
          </div> 
 
        <button >test</button>
    </div>
  </div>
   
</div>
 
     
</template>

<script>
import Comments from "../components/Comments.vue"
import axios from "axios"
export default {
    name: 'postId',
    components: {
      Comments
    },
    data(){ 
      return {
        //get item from localStorage
        publication_by_id : localStorage.getItem('publicationById'), 
        created_at: localStorage.getItem('publicationByIdCreateAt'),
        userID: localStorage.getItem('userID'),
        user_publication: localStorage.getItem('publicationByUserId'),

        //
        username_publication: localStorage.getItem('usernamepublication'),
        comment_list: null,
        comment_field: null,

        //show button delete only if publication -> userID matches logged in user-> id
        show_delete: localStorage.getItem('userID') === localStorage.getItem('publicationByUserId'),

        // get like/dislike count from method get
        dislike_count: parseInt(localStorage.getItem('total_dislikes')),
        like_count: parseInt(localStorage.getItem('total_likes')),
            
      }
    
    },
    methods:{
      
      createComment() {  
      
        axios
          .post('/comments', {
            userID : this.userID,
            publicationID: this.publication_by_id,
            comment_user: this.comment_field
          })
          .then(
            response => {
              console.log(response)
            }
          )
          .catch(
            error => console.log(error)
          )
        
      },

      sendLike() {
    
          this.like = 1,
          this.dislike = 0
          console.log('send like');
          
          axios
          .post('likes',{
              userID: this.userID,
              publicationID: this.publication_by_id,
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
     
            this.like = 0,
            this.dislike = 1
            console.log('send dislike');
            axios
            .post('likes', {
                userID: this.userID,
                publicationID: this.publication_by_id,
                like: this.like,
                dislike: this.dislike,
            })
            .then(
              response => console.log(response)
            )
            .catch (
              error => console.log(error)
            )
        },
},

    
    mounted(){

      axios.get('/likes/total_likes/' + this.publication_by_id)
                .then(
                    response => {
                      localStorage.setItem('total_likes', response.data.data[0].total_likes);
                      }
                )
                .catch (       
                    console.log('ERROR')
                )
          
      axios.get('/likes/total_dislikes/' + this.publication_by_id)
            
                .then(
                response => {
                  localStorage.setItem('total_dislikes',response.data.data[0].total_dislikes )
                }
                ) 
                .catch(
                    console.log('ERROR')
                )


      //to get the username
      axios
      .get('/users/' + this.user_publication)
      .then(
        response => { 
          localStorage.setItem('usernamepublication', response.data.data[0].username)        
          }
      )
      .catch(
        error => console.log(error)
      )

    //get comments list for the publication 
    axios
    .get('/comments/' + this.publication_by_id)
    .then(
      response => {
        console.log('COMMENT LIST FOR PUBLICATION', response.data.data);
        this.comment_list = response.data.data;
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
    color: white;

  .post_container{
      display: flex;
      flex-direction: column;   
      padding: 0px 15%;

      .info_post{
        span{
          margin-right: 10px;
        }
        .posted_at{
          font-size: 12px;
        }
        
      }

      .post{
        background-color: rgb(156, 180, 223);
        width: 100%;
        height: auto;
        padding: 5px 20px;
        border-radius: 0px;
        align-self: center;
        margin-bottom: 20px;
        position: relative;
   

          h2{
            text-align: center;
          }

        .comment-section{
          width: 92%;
          height: auto;
          padding: 5px;
          background-color: rgb(255, 255, 255);
          color: black;
        
        }
        .btn_delete_publication{
          position: absolute;
          right: 0;
          top: 0;
          margin-right: 5px;
          font-size: 22px;
          font-weight: bold;
          background-color: transparent;
          box-shadow: none;
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
      }
  }
}



</style>
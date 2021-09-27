<template>
<div class="container">
  <div class="post_container">
    <div class="info_post">
       <span>{{this.username_publication}}</span>
       <span class="posted_at">Posted: {{this.publication_created_at}}</span>
    </div>
    
    <div class="post">
        <h2></h2>
        <span></span>
        <img  class="gif_img" alt="image">
        <span class="img_url">{{this.publication_image_url}}</span>
        <button v-if="this.show_btn_delete_publication" @click="deletePublication" class="btn_delete">X</button>

        
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

        <Comments  v-for="(comment_field, index) in this.comment_list" :key="index" :comment_field="comment_field" class="comment-section"/>

          <div class="comment-field-container">
              <input class="comment_field" type="text" v-model ="comment_field"> 
              <button @click="createComment">send</button>    
          </div> 

          <span class="err_msg">{{this.msg_err}}</span>

 
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
        userID: localStorage.getItem('userID'),
        publication_created_at:null, 
        publication_user_id: null,
        publication_image_url: localStorage.getItem('publicationByIdImage'),
        user_id_publication: localStorage.getItem('publicationByUserId'),

        //
        username_publication: null,
        comment_list: null,
        comment_field: null,
        show_btn_delete_publication: localStorage.getItem('userID')===localStorage.getItem('publicationByUserId') || localStorage.getItem('isAdmin')==1, 

        // get like/dislike count from method get
        //likes section 
        like_count: null,
        dislike_count:null,
        status: true,

        //err mg
        msg_err:null,
        like:null,
        dislike:null,

   
            
      }
    
    },
    methods:{
      
      createComment() {  
         const headers= {
            "Authorization": "Bearer" +' '+ localStorage.getItem('mytoken'),
          };
      
        axios
          .post('/comments', {
            userID : this.userID,
            publicationID: this.publication_by_id,
            comment_user: this.comment_field
          }, { "headers" : headers})
          .then(
            response => {
              console.log(response.data.status);
              location.reload()
              if(response.data.status==false){
                this.msg_err = 'Please login to your account';       
              }else{
                console.log('comment saved successfully');
              }
             
            }
          )
          .catch(
            error => console.log(error)
          )
        
      },

      sendLike() {

        if(this.userID){
          this.like = 1,
          this.dislike = 0
          console.log('send like');
          const headers= {
            "Authorization": "Bearer" + ' ' + localStorage.getItem('mytoken'),
            'Content-Type' : 'multipart/form-data'
          };console.log(headers);
          
          axios
          .post('/likes',{
              userID: this.userID,
              publicationID: this.publication_by_id,
              like_user: this.like,
              dislike_user: this.dislike,
          }, {"headers" : headers})
          .then(
              response => {
                console.log('RESPONSE', response.data.status);
                location.reload()
              }
              
          )
          .catch(
              error => console.log(error)
          )

          

        }else{
            this.msg_err = 'Please login to your account'
        }
    
          
      },

      sendDislike() { 
        if(this.userID){
          this.like = 0,
          this.dislike = 1
          console.log('send dislike');
          const headers= {
             "Authorization": "Bearer" + ' ' + localStorage.getItem('mytoken'),
            'Content-Type' : 'multipart/form-data'
          };console.log(headers);
          axios
          .post('/likes', {
              userID: this.userID,
              publicationID: this.publication_by_id,
              like_user: this.like,
              dislike_user: this.dislike,
          }, {"headers" : headers})
          .then(
            response => {
              console.log(response);
              location.reload()

              }
          )
          .catch (
            error => console.log(error)
          )
        } else{
          this.msg_err= 'Please login to your account'
        }
    
         
      },

      deletePublication(){
         const headers= {
            "Authorization": "Bearer" + ' ' + localStorage.getItem('mytoken'),
            'Content-Type' : 'multipart/form-data'
          };console.log(headers);
        console.log('btn to delete publication');
        axios
        .delete('/publication/' + localStorage.getItem('publicationById'), {"headers" : headers})
        .then(
          response => {
            console.log(response);
            this.$router.push('/')
          }
        )
        .catch(
          error => console.log(error)
        )
      }
},

    
    mounted(){

      //get publication by id

      axios.get('/publication/' + this.publication_by_id)
      .then(
        response => {
          console.log('publicationById', response.data.data[0].created_at);
          this.publication_created_at = response.data.data[0].created_at;
          this.publication_user_id = response.data.data[0].userID;
          localStorage.setItem('user_id_publication_for_username',response.data.data[0].userID)
          }
        
      )
      .catch(

      )

      axios.get('/likes/total_likes/' + this.publication_by_id)
                .then(
                    response => {
                        this.like_count = response.data.data[0].total_likes
                    }
                )
                .catch (       
                    console.log('ERROR')
                )
    
      axios.get('/likes/total_dislikes/' + this.publication_by_id)
      
          .then(
          response =>  {
              console.log(response.data.data[0].total_dislikes);
              this.dislike_count = response.data.data[0].total_dislikes;  

              }
          ) 
          .catch(
              console.log('ERROR')
          )



      //to get the username
      axios
      .get('/users/' + localStorage.getItem('user_id_publication_for_username'))
      .then(
        response => { 
          console.log(response.data.data[0].username);   
          this.username_publication = response.data.data[0].username;   
          }
      )
      .catch(
        error => console.log(error)
      )


    //get comments list for the publication 
    axios
    .get('/comments/' + localStorage.getItem('publicationById'))
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
      align-self: center; 
      width: 80%;

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
        .btn_delete{
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
        .err_msg{
        align-self: center;
        color: rgb(187, 6, 51);
        font-size: 15px;
        }
      }
  }
}



</style>
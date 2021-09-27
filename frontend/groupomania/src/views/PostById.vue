<template>
<div class="container">
  <div class="post_container">
    <div class="info_post">
        <h2>{{this.publication_title}}</h2>     
       <span class="info-user">Posté par: {{this.username_publication}}</span>
    </div>
    
    <div class="post">
        <h2></h2>
        <span></span>
        <img  class="gif_img" alt="image" :src="this.publication_image_url">
        <span class="posted_at">Posted: {{this.create_at_format}}</span>
        <button v-if="this.show_btn_delete_publication" @click="deletePublication" class="btn_delete">X</button>
     
        <div class="interaction">
                <div class="likes">
                    <div class="like">
                        <button @click="sendLike" class="like-btn"></button>
                        <span class="like-counter" >{{this.like_count}}</span>
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
import dayjs from 'dayjs'
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
        publication_title: localStorage.getItem('publicationByIdTitle'),

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

        user_like_publication:null,
        publication_like_id:null,
        like_array: null,
        //err mg
        msg_err:null,

        //date
        create_at_format: dayjs(this.publication_created_at).format('YYYY-MM-DD')
  
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
          console.log('send like');
          const headers= {
            "Authorization": "Bearer" + ' ' + localStorage.getItem('mytoken'),
          };console.log(headers);
          
          axios
          .post('/likes',{
              userID: this.userID,
              publicationID: this.publication_by_id,
              like_user: this.like,
          }, {"headers" : headers})
          .then(
              response => {
                console.log('RESPONSE', response);
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
      text-align: center;

      .posted_at{
          font-size: 12px;
        }
      .info_post{
        .info-user{
          font-size: 12px ;
          margin-bottom: 10px;
        }
         h2{ 
          text-align: center;
          font-size: 18px;
          margin-bottom: 10px;
        }

      }

      .post{
        height: auto;
        padding: 5px 20px;
        border-radius: 0px;
        align-self: center;
        margin-bottom: 20px;
        position: relative;
   

       

        .like-btn{
          margin-bottom: 5px;
        }
        .comment-section{
          width: 97%;
          height: auto;
          padding: 5px;
          background-color: rgb(255, 255, 255);
          color: black;
        
        }
        .btn_delete{
          position: absolute;
          right: 0;
          top: 0;
          margin-right: 20px;
          font-size: 22px;
          font-weight: bold;
          background-color: transparent;
          box-shadow: none;
        }
        .gif_img{
          width: 100%;
          margin-bottom: 5px;
          object-fit: scale-down;
        }
        .comment-field-container{
           display: flex;
           margin-top: 5px;
          .comment_field{
              height: 30px;
              width: 100%;  
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
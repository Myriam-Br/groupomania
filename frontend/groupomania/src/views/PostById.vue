<template>
<div class="container">
  <div class="post_container">
    <div class="info_post">
       <span>{{this.username}}</span>
       <span class="posted_at">Posted: {{this.created_at}}</span>
    </div>
    
    <div class="post">
        <h2></h2>
        <span></span>
        <img class="gif_img" alt="image">
        
        <div class="likes">
          <button class="like"></button>
          <span class="like-counter" ></span>
          <button class="dislike"></button>
          <span class="dislike-counter"></span> 
        </div>

        <Comments class="comment-section" v-for="(comms, index) in this.comment_list" :key="index" :comms="comms"/>

        <div class="hide">
          <div class="comment-field-container">
              <input class="comment_field" type="text" v-model ="comment_field"> 
              <button @click="createComment">send</button>
          </div> 
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
        publication_by_id : localStorage.getItem('publicationById'),
        username: null,
        comment_list: null,
        comment_field: null,
        created_at: null,
        userID: localStorage.getItem('userID'),
        //commentdate: new Date(),        
      }
    
    },
    methods:{
       createComment() {
         
          const headers = { 
                "Authorization": "Bearer " + localStorage.getItem('mytoken'),
          };console.log(headers);
          console.log(this.publication_by_id.data[0].id);
            axios
            .post('/comments',
                {
                    userID: this.userID,
                    publicationID: JSON.stringify(this.publication_by_id.data[0].id),
                    commentaire: this.comment_field,               
                }
            )
            .then(
                response => console.log(response)
            )
            .catch(
                console.log('login to leave a comment')
            )                 
        },
    },
    mounted(){
     /* const headers = { 
                "Authorization": "Bearer " + localStorage.getItem('mytoken'),
      }; */

      axios.get('/publication/' + localStorage.getItem('publicationById'))
      .then(
        response => {
          console.log('PUBLICATION BY ID: ', response.data.data[0].userID);
          this.publication_by_id = response.data;
          this.userPublication = response.data.data[0].userID
          localStorage.setItem('userPublication', response.data.data[0].userID );
          this.created_at = response.data.data[0].created_at

          }
      )
      .catch(
        error => console.log(error)
      )
      

      axios.get('/comments/' + this.publication_by_id)
      .then(
          response => {
          console.log('COMMENT LIST: ', response)
          this.comment_list = response.data.data;
          var commentList = JSON.stringify(this.comment_list)
          localStorage.setItem('commentList', commentList)},
          
      )
      .catch(
          console.log('ERROR')
      )


      axios
      .get('/users/' + localStorage.getItem('userPublication'))
      .then(
        response => {
          //console.log('DATA', response.data.data[0].username);
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
.container{
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;

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
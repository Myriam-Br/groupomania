<template>
  <div class="comment-container">  
            <p class="username">{{this.username_of_publication}}</p>
            <p class="comment">{{comms.comment_user}}</p>
            <button v-if="this.user_id==this.userID || localStorage.getItem('isAdmin')==1" @click="deleteComment" class="delete_comment" >X</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "comments",
    props:[ "comms"], 

    data() {
        return{
            comment_of_user: null,
            user_id: this.comms.userID,
            userID: localStorage.getItem('userID'),
            publicationID: this.comms.publicationID,
            username_of_publication: null, //get with user_comment_id
            comment_id: this.comms.id,
        };    
    },

   mounted(){

       //get username
       axios
       .get('/users/' + this.comms.userID)
       .then(
           response => {     
               //console.log('comment reponse', response.data.data[0].username);
               this.username_of_publication = response.data.data[0].username;
               }
       )
       .catch(
           error => console.log(error)
       )
    

   },

   methods: {
       //post a comment
       deleteComment() {
           axios
           .delete('/comments/' + this.comment_id)
           .then(
               response => console.log(response)
               
           )
           .catch(
               error => console.log(error)
           )

       }
      

    
   }

}
</script>

<style lang="scss" scoped>
.comment-container{
        width: 100%;
        height:45%; 
        display: flex; 
        background-color: azure;
        position: relative;
        color: black;
        p{
            margin-right: 30px;
        }
        .username{
            color: purple;
            font-size: 15px;
            font-weight: 500;
        }
        .delete_comment{
            position: absolute;
            margin-right: 5px;
            font-size: 15px;
            font-weight: bold;
            background-color: transparent;
            box-shadow: none;
            top: 0;
            right: 0;
        }
   
}
</style>
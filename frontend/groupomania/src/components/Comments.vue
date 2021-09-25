<template>
  <div class="comment-container">  
            <p class="username">{{this.username_of_publication}}</p>
            <p class="comment">{{this.comment_of_user}}</p>
            <button class="delete_comment" >X</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "comments",
    props:[ "comms"], 

    data() {
        return{
            comment_of_user: this.comms.comment_user,
            user_comment_id: this.comms.userID,
            userID: localStorage.getItem('userID'),
            publicationID: this.comms.publicationID,
            username_of_publication: null, //get with user_comment_id

            
        };    
    },

   mounted(){

       //get username
       axios
       .get('/users/' + this.user_comment_id )
       .then(
           response => {
               //console.log('comment reponse', response.data.data[0].username);
               this.username_of_publication = response.data.data[0].username;
               console.log('comment reponse', response.data);
               }

       )
       .catch(

       )
    

   },

   methods: {
       //post a comment
      

    
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
<template>
  <div class="comment-container">  
            <p class="username">{{this.username}}</p>
            <p class="comment">{{comms.comment_user}}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "comments",
    props:[ "comms"], 

    data() {
        return{
            commentaire: null,
            userID: localStorage.getItem('userID'),
            userComment: localStorage.setItem('userComment', this.comms.userID),
            username: null,

            
        };    
    },

   mounted(){
       axios.get('/users/' + localStorage.getItem('userComment'))
       .then(
           response => this.username = response.data.data[0].username
       )
       .catch(
           error => console.log(error)
       )
   }

}
</script>

<style lang="scss" scoped>
.comment-container{
        width: 100%;
        height:45%; 
        display: flex; 
        background-color: azure;
        p{
            margin-right: 30px;
        }
        .username{
            color: purple;
            font-size: 15px;
            font-weight: 500;
        }
   
}
</style>
<template> 
    <div class="container">
        <div class="post">
            <div class="info_user">  
                <span>{{this.username}}</span> 
                <span class="posted_at"> {{publication.created_at}}</span> 
            </div>
            <h2>{{publication.title}}</h2>
            <img  class="gif_img" alt="image">
            <span class="image_url">{{publication.imageUrl}}</span>
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
                <button @click="showComments" class="show" >...</button>
            </div>
            <span class="err_msg">{{this.msg_err_like}}</span>
         </div>

    </div>
   
   
</template>

<script>
import axios from 'axios'
export default {
    props:["publication"],

    components: {
          
    },

    data() {
        return {
            user_publication : this.publication.userID,// from the forum page with get ('/publication')
            userID: localStorage.getItem('userID'),

            //likes section 
            like: null,
            dislike: null,
            title: null,
            imageUrl: null,
            message:null, 
            like_count: null,
            dislike_count:null,

            //publicationArray : JSON.parse(localStorage.getItem('publicationArray')),

            //comments section
            username: null,

            //message error
            msg_err_like: null

        }
    },

    methods: {
        
       
        sendLike() {
            if(this.userID) {
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
                    publicationID: this.publication.id,
                    like_user: this.like,
                    dislike_user: this.dislike,
                }, { "headers" : headers })
                .then(
                    response => {
                        console.log(response);
                        if(response.data.status==false){
                            console.log('sometging wrong');
                        }else {
                            //location.reload()
                        }           
                    }
                )
                .catch(
                    error => console.log(error)
                )
                
            }else {
                 this.msg_err_like = 'Please login to your account'
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
                .post('likes', {
                    userID: this.userID,//from local storage -> account logged in
                    publicationID: this.publication.id,//from the forum page with get ('/publication')
                    like_user: this.like,
                    dislike_user: this.dislike,
                }, { "headers" : headers }) 
                .then(
                    response => {
                        console.log(response);
                        //location.reload()
                    }
                )
                .catch(
                    error => console.log(error)
                )          
            }else {
                this.msg_err_like = 'Please login to your account'
            }
           
        },

        

        showComments(){
                this.$router.push('/publication_by_id'); 
                localStorage.setItem('publicationById', this.publication.id) ;
                localStorage.setItem('publicationByIdCreateAt', this.publication.created_at);//display post date
                localStorage.setItem('publicationByUserId', this.publication.userID);  //storage to display the username get('/users/:id) :id = localStorage.getItem('publicationByUserId') 
                localStorage.setItem('publicationByIdImage', this.publication.imageUrl);  
        }
    },

     mounted() {
      
   
               //get total likes
            axios.get('/likes/total_likes/' + this.publication.id)
                .then(
                    response => {
                        this.like_count = response.data.data[0].total_likes
                    }
                )
                .catch (      
                    error => console.log(error)
                )
          
            axios.get('/likes/total_dislikes/' + this.publication.id)
            
                .then(
                response =>  {
                   // console.log(response.data.data[0].total_dislikes);
                    this.dislike_count = response.data.data[0].total_dislikes;    
                    }
                ) 
                .catch(
                    error => console.log(error)
                )

            axios.get('/users/' + this.user_publication)
                .then(
                    response => {
                    this.username = response.data.data[0].username;
                    }
                )
                .catch(
                    error => console.log(error)
                )

                if(this.userID){
                    axios.get('/users/' + this.userID)
                            .then(
                                response => {
                                    localStorage.setItem('isAdmin', response.data.data[0].isAdmin)
                                }

                            )
                            .catch(
                                error => console.log(error)
                            )

                }else{
                    console.log('error');
                }

          

    }
}
</script>

<style lang="scss" scoped>

.post{
    background-color: rgb(156, 180, 223);
    width: 80%;
    height: auto;
    padding: 5px 20;
    border-radius: 0px;
    align-self: center;
    color: black;

   h2{
       text-align: center;
   }

    .gif_img{
        width: 100%;
        height: 200px;
        background-color: aqua;
    }
   
    .interaction{
        display: flex;
        justify-content: center;
        .show{
            font-size: 25px;
            padding: 0;
            font-weight: 500;
            
        }
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

    .err_msg{
        align-self: center;
        color: rgb(187, 6, 51);
        font-size: 15px;
    }

    
   
}



</style>
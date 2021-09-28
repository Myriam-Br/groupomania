<template> 
    <div class="container">
        <div class="post">  
            <div>
                 <h2>{{publication.title}}</h2>
                <span class="info_user"> Posté par: {{this.username}}</span>  
            </div>
                
            
            <img  class="gif_img" alt="image" :src="publication.imageUrl">
            
            <div class="interaction">
                <div class="likes">
                    <div class="like">
                        <button @click="sendLike" class="like-btn" aria-label="like"></button>
                        <span class="like-counter" >{{this.like_count}}</span>
                    </div>
                </div> 
                <button @click="showComments" class="show" >...</button>
            </div>
            <span class="posted_at"> Posted: {{this.create_at_format}}</span> 
            <span class="err_msg">{{this.msg_err_like}}</span>
         </div>

    </div>
   
   
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
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
            title: null,
            imageUrl: null,
            message:null, 
            like_count: null,
            dislike_count:null,
           
            //publicationArray : JSON.parse(localStorage.getItem('publicationArray')),

            //comments section
            username: null,

            //message error
            msg_err_like: null,

            //date format
            create_at_format: dayjs(this.publication.created_at).format('YYYY-MM-DD')

        }
    },

    methods: {
        
       
        sendLike() {
            if(this.userID) {
                this.like = 1,
                console.log('send like');
                const headers= {
                    "Authorization": "Bearer" + ' ' + localStorage.getItem('mytoken'),
                };console.log(headers);
                axios
                .post('/likes',{
                    userID: this.userID,
                    publicationID: this.publication.id,
                    like_user: this.like,
                }, { "headers" : headers })
                .then(
                    response => {
                        console.log(response);     
                       location.reload()        
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
                localStorage.setItem('publicationByIdTitle', this.publication.title);  
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
    width: 80%;
    height: auto;
    padding: 5px 20;
    border-radius: 0px;
    align-self: center;
    color: rgb(255, 255, 255);
    text-align: center;

    .info_user{
        font-size: 12px ;
        margin-bottom: 10px;
    }
   h2{
       text-align: center;
       font-size: 18px;
       margin-bottom: 10px;
   }

    .gif_img{
        margin-top: 5px;
        width: 80%;  
        margin-bottom: 8px;
    }
    .posted_at{
        font-size: 12px;
    }
   
    .interaction{
        display: flex;
        justify-content: center;
        margin-top: 10px;
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
        }
       
        
        
    }

    .err_msg{
        align-self: center;
        color: rgb(187, 6, 51);
        font-size: 15px;
    }

    
   
}

@media screen and ( min-width:500px ) {
    .post{
        width: 60%;
        .gif_img{

        }
    }
    
}



</style>
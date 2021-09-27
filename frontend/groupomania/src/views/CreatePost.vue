<template>
<div class="upload-gif container">
    <h1>Create post</h1>

    <div class="gif-container">
        <h2>create your post</h2>
        
        <input class="publication_title" name="title" type="text" v-model="title_publication">
        <img class="file_preview" :src="this.preview" alt="">
        <input @change="onFileChange" class="file_select" type="file" name="image" accept='image/*'/>  
        <button @click="onUploadFile"   class="btn-create">Submit</button>      
    </div>  

    <span class="msg_err">{{this.errMsg}}</span>

</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "mygif",
    components: {

    },
    data() {
        return {
            title_publication: null,
            preview: null,
            image: null,
            userID :localStorage.getItem('userID'), 
            show_delete: null,
            errMsg: null
        }
    },

    methods: {
       
      
        onFileChange(e) {
            console.log('targeted file: ', e.target.files);
            this.image = e.target.files[0];
            console.log(e.target.files[0]);
            console.log(this.image.name.split('.jpg')[0]);

            var reader = new FileReader();
            reader.onload = (e) => {
                this.preview = e.target.result    
             
            }
           
           reader.readAsDataURL(this.image);
 
        }, 


        onUploadFile(){
              
                const fd = new FormData();
                //fd.append('image', this.image, this.image.name)
                fd.append('userID', this.userID);
                fd.append('title', this.title_publication);
                fd.append('image', this.image, this.image.name);
                console.log(this.image, this.image.name);

                const headers= {
                    "Authorization": "Bearer" + ' ' + localStorage.getItem('mytoken'),
                    'Content-Type' : 'multipart/form-data',
                };
                if(this.title_publication==null){
                    this.errMsg = 'your post is not complete'
                } else{   

                axios.post('/publication',
                   fd,
                   {"headers" : headers}         
                    ) 
                        .then(
                            res => {
                                console.log('this is the response: ',res);
                                this.$router.push('/');
                            }
                        )
                        .catch(
                             error => console.log(error)
                        )                    
                }         
        }         
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
   
    
    .gif-container{
    background-color: rgb(15, 54, 77);
    width: 50%;
    align-self: center;
    display: flex;
    flex-direction: column;
  
    position: relative;

    .file_preview{
        object-fit: scale-down;
        width: 70%;
        background-color: black;
        object-fit: cover;
        align-self: center;
    }
    .file_select{
        height: 50px;
    }
    .btn-create{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    }
    .msg_err{
        color: red;
    }



}





</style>
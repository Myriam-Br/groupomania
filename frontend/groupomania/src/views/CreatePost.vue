<template>
<div class="upload-gif">
    <h1>Create post</h1>

    <div class="gif-container">
        <h2>create your post</h2>
        
        <input class="publication_title" type="text" v-model="title_publication">
        <img class="file_preview" src="" alt="">
        <input @change="onFileChange" class="file_select" type="file" name="imageUrl" accept='image/*'/>  
        <button @click="onUploadFile"   class="btn-create">Submit</button> 
        
    </div>  

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
        }
    },

    methods: {
       
      
        onFileChange(e) {
            console.log('targeted file: ', e.target.files[0].name);
            this.image = e.target.files[0];
     
        }, 

        onUploadFile(){
                console.log('je fonctionne');
                const fd = new FormData();
                //fd.append('image', this.image, this.image.name)
                fd.append('userID', this.userID);
                fd.append('title', this.title_publication);
                fd.append('imageUrl', this.image, this.image.name);

                const headers= {
                    "Authorization": "Bearer" + localStorage.getItem('mytoken'),
                    'Content-Type' : 'multipart/form-data'
                };

                   axios.post('/publication',
                   fd,
                   {"header" : headers}         
                    ) 
                        .then(
                            res => {
                                console.log('this is the response: ',res);
                                this.$router.push('/');
                            }
                        )
                        .catch(
                        console.log('ERROR')
                        )
            
        }
     
    }

}
</script>

<style lang="scss" scoped>


.gif-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 50px;
    position: relative;

    .file_preview{
        height: 50px;
        background-color: black;
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




</style>
<template>
<div class="upload-gif">
    <h2></h2>
    <div class="gif-container">
        <div class="gif-description">
            <input class="publication_title" type="text" v-model="title_publication">
        </div>

        <div class="gif-image">
            <input type="file" @change="onFileChange" accept='image/*' >  
            <img :src="preview"  height="200" class="preview" alt="">
        </div>

        <div class="gif-date">
            <p class="created_at">{{this.create_at}}</p>
        </div>
        <button @click="onUploadFile"  class="btn-create">Submit</button>   
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
            create_at: new Date(),
            image:null,
            userID :localStorage.getItem('userID'), 
        }
    },

    methods: {

        onFileChange(e) {
            this.image = e.target.files[0];       
            const reader = new FileReader();
            reader.readAsDataURL( this.image);
            reader.onload = e => {
            this.preview = e.target.result;
            };
            console.log('targeted file: ', e.target.files[0]);
        }, 

        onUploadFile(){         
            const fd = new FormData();      
            fd.append('image', this.image, this.image.name);

            /*const headers = { 
                "Authorization": "Bearer " + localStorage.getItem('mytoken'),
                "Content-Type":"multipart/form-data"
            }; */

            axios.post('/publication',
            {  userID: this.userID,
                title:this.title_publication,
                imageUrl: fd,
                create_at: this.create_at  }        
            ) 
            .then(
                res => console.log('this is the response: ',res)
            )
            .catch(
              console.log('ERROR')
            )
        },
     
    }

}
</script>

<style lang="scss" scoped>

.upload-gif{

    .gif-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin:0 15% ;
        border: solid black 2px;
        border-radius: 5px;
        position: relative;
        padding-bottom: 30px;

        .gif-description{
            margin-bottom: 5px;
            width: 100%;
            border-bottom: solid black 1px;
            .publication_title {
                height: 30px;
                width: 99%;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                resize: none;
                border: none;
                overflow: auto;
                outline: none;
                font-size: 18px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
            }
        }
        .gif-image {

            .preview{
            width: 100%;
            height: 200px;
            border-radius: 5px;
            object-fit: scale-down;
            //display: flex;
            }
        }

        .btn-create{
            width: 60px;
            height: 30px;
            padding: 3px;
            box-shadow: none;
            background-color: rgb(21, 55, 148);
            color: white;
            font-weight: 400;
            font-size: 16px;
            position: absolute;
            right: 0;
            bottom: 0;

        }
    }
   
}
</style>
<template>
<div class="upload-gif">
    <h2></h2>
    <div class="gif-container">
        <div class="gif-description">
            <input class="publication_title" type="text" v-model="title_publication">
        </div>
        <input @change="onFileChange" type="file" name="imageUrl" accept='image/*'/>  
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
            image:null,
            userID :localStorage.getItem('userID'), 
            show_delete: null,
        }
    },

    methods: {
       
      
        onFileChange(e) {
            console.log('targeted file: ', e.target.files[0].name);
            
        }, 

        onUploadFile(){
                console.log('je fonctionne');

                   axios.post('/publication',
                {  userID: this.userID,
                    title: this.title_publication,
                    imageUrl: "some file",
                }        
                ) 
                .then(
                    res => {
                        console.log('this is the response: ',res)
                    }
                )
                .catch(
                console.log('ERROR')
                )
            this.$router.push('/');
        }
     
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
<template>
<div class="upload-gif">
    <h2></h2>
    <div class="gif-container">
        <div class="gif-description">
            <input class="publication_title" type="text" v-model="title_publication">
        </div>

        <div class="gif-image">
           <input type="file" @change="onFileSlected">
           <input type="text" class="image">
        </div>

        <div class="gif-date">
            <p class="created_at">{{this.create_at}}</p>
        </div>
        <button @click="onUpload"  class="btn-create">Submit</button>   
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
            //selected_file: null,
            //imagetest : null,
            create_at: new Date(),

        }
    },

    methods: {
        onFileSlected(event) {
            console.log(event);
            this.selected_file = event.target.files[0] //file that we've uploaded
            console.log(event.target.files[0]);
        },

        onUpload(){
            const fd = new FormData();
            fd.append('image', this.selected_file, this.selected_file.name);
            console.log(fd);

            axios.post('/publication/' , {
                userID: 31,
                title: this.title_publication,
                imageUrl : fd,
                created_at : new Date()
            }) 
            .then(
                res => console.log(res)
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

            .preview-image{
            width: 100%;
            height: auto;
            border-radius: 5px;
            object-fit: scale-down;
            }
            #publication_gif{
                display: none;
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
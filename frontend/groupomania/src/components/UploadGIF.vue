<template>
<div class="upload-gif">
    <h2></h2>
    <div class="gif-container">
        <div class="gif-description">
            <textarea class="description"></textarea>
        </div>

        <div class="gif-image">
            <img :src="imagePreview" class="preview-image" alt="giftoshare" @click="openUpload">
            <input type="file" name="mygif" id="mygif" @change="updatedPreview">
        </div>

        <button @click="btnSubmit" class="btn-create">Submit</button>
       
    </div>  
</div>
</template>

<script>
export default {
    name: "mygif",
    components: {

    },
    data() {
        return {
            imagePreview: null,
            description: null,
        }
    },

    methods: {
        openUpload() {
            document.getElementById('mygif').click()
        },

        updatedPreview(e) {
            var reader, files = e.target.files
            if(files.length === 0){
                console.log('empty');
            }
            reader = new FileReader()

            reader.onload = (e) => {
                this.imagePreview = e.target.result
            }
            reader.readAsDataURL(files[0])

        },

        btnSubmit() {
            alert('je fonctionne');

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
            .description {
                height: 30px;
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
            width: 400px;
            height: 200px;
            border-radius: 5px;
            object-fit: scale-down;
            }
            #mygif{
                display: none;
            }
        }

        .btn-create{
            border-radius: none;
            border: none;
            width: 60px;
            height: 30px;  
            position: absolute;
            bottom: 0;
            right: 0;

        }
    }
   
}
</style>
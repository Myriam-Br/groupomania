<template>
<div class="gif-container">
    <h2>UploadGIF</h2>
    <img :src="imagePreview" class="preview-image" alt="giftoshare" @click="openUpload">

    <input type="file" name="mygif" id="mygif" @change="updatedPreview">
</div>
</template>

<script>
export default {
    name: "mygif",
    components: {

    },
    data() {
        return {
            imagePreview: '',
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

        }
    }

}
</script>

<style lang="scss" scoped>

.gif-container{
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
</style>
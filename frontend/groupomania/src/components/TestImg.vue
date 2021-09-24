<template>
  <div class="image_publication">
      <form action="/" enctype="multipart/form-data" method="post">
        <input type="file" name="image" accept='image/*' >
        <input type="submit" value="Upload">
      </form>  
      <button>Upload</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "publication_image",
    data() {
        return {
            image: null,
            userID: localStorage.getItem('userID')


        }
    },
    methods: {
        onfile() {
         
        },
        onUpload() {
            axios

        }
        

    }

}
</script>

<style>

</style>
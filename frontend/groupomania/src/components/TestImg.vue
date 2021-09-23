<template>
  <div class="image_publication">
      <input type="file" />
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
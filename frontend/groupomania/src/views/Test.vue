<template>
<div class="upload-gif">
    <h1>test upload image</h1>
    <div class="gif-container">
        <div class="gif-description">
            <input class="publication_title" type="text" v-model="title_publication">
        </div>
        <form action="/" method="POST" enctype="multipart/form-data">
            <input type="file" name="imageUrl" accept='image/*'/>  
            <input type="submit" class="btn-submit"/>  
        </form>
    
    </div>  

</div>
</template>
<script>
//import axios from "axios"

export default {
  name: "home",
  data(){
    
    return{
      image: null,
      preview:null
    }
  },


}
</script>

<style lang="scss" scoped>
.image_preview{
  height: auto;
}

</style>
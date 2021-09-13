<template>
<div class="container createpost">
    <h1>CREATE A POST</h1>
    <div class="newpost">
        <UploadGIF/>
    </div>
</div>
  
</template>

<script>
import UploadGIF from "../components/UploadGIF.vue"
export default {
    name:"createpost",
    components: {
        UploadGIF,
    }

}
</script>

<style>

</style>
<template>
<div>
    <div class="profil-user">
    <h1>Edit profil</h1>
    <div class="profil-info">
        <img class="image-profil-preview" :src="imageProfilPreview" alt="picture" @click="openUpload">
        <input type="file" name="profil-pic" id="profil-pic" @change="updatedPreview">
        <input type="text"> 
        <input type="text"> 
        <button>apply changes</button>  
    </div>
    
</div>
</div>
  
</template>

<script>
export default {
    name:"editprofil",
    data() {
        return {
            imageProfilPreview: null
        }
        
    },

    methods: {
        openUpload() {
            document.getElementById('profil-pic').click()
        },

        updatedPreview(e) {
            var reader, files = e.target.files
            if(files.length === 0){
                console.log('empty');
            }
            reader = new FileReader()

            reader.onload = (e) => {
                this.imageProfilPreview = e.target.result
            }
            reader.readAsDataURL(files[0])

        },
    }

}
</script>

<style lang="scss" scoped>
.profil-user{
    
    width: 100%;
    background-color: brown;
   
    h1{
        text-align: center;
    }
    .profil-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .image-profil-preview{
            width:  200px;
            height: 200px;
            border-radius: 100px;
            border: solid black 1px;
            object-fit: scale-down;
            }
            #profil-pic{
                display: none;
            }

            input{
                width: auto;
                overflow: auto;
                outline: none;
                margin-bottom: 5px;
            }
    }

      
   
}
            

</style>
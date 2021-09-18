<template> 
    <div class="post">
        <h2>title: </h2>
        <img alt="image">
        <button class="like"></button>
        <span class="like-counter">0</span>
        <button class="dislike"></button>
        <span class="dislike-counter">0</span>
        <Comments/>   
    </div>
   
</template>

<script>

import Comments from "../components/Comments"
export default {

    components: {
        Comments,
    },

    data() {
        return {
            title: null,
            imageUrl: null,
            likes: null,
            dislikes: null,

        }
    },

    methods: {
      
    }


   


  

   
}
</script>

<style lang="scss" scoped>


    
.post{
    background-color: rgb(156, 180, 223);
    width: 100%;
    height: 400px;
    padding: 5px 20px;
    border-radius: 10px;
   align-self: center;
   margin-bottom: 20px;

   h2{
       text-align: center;
   }

    .comment-section{
        width: 92%;
        height: 50px;
        background-color: rgb(255, 255, 255);
        border: 1px black solid;
    }

    img{
        width: 100%;
        height: 100px;
    }
    input{
        height: 50px;
    }
    .like{
        background-color: rgb(72, 218, 72);
        width: 20px;
        height: 20px;
    }
    .dislike{
        background-color: rgb(200, 43, 43);
        width: 20px;
        height: 20px;
    }
}



</style>
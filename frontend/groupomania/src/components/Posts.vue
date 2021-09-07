<template> 
    <div class="post">
        <h2>{{post.title}}</h2>
        <img >
        <button class="like">Like</button>
        <span class="like-counter">0</span>
        <button class="disllike">Dislike</button>
        <span class="dislike-counter">0</span>
        <Comments/>
       
       
    </div>
   
</template>

<script>
import Comments from "../components/Comments.vue"
export default {
    name: "posts",
    props:["post"],
    components: {
        Comments,
    },

   
}
</script>

<style lang="scss" scoped>


    
.post{
    background-color: rgb(156, 180, 223);
    width: 520px;
    height: 320px;
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
        background-color: darkcyan;
        width: 100%;
        height: 100px;
    }
    input{
        width: 99%;
        height: 20px;
    }
}



</style>
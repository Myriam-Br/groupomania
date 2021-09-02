<template>
     
    <div class="post">
        <h2>{{post.title}}</h2>
        <img >
        <button class="like">Like</button>
        <span class="like-counter">0</span>
        <button class="disllike">Dislike</button>
        <span class="dislike-counter">0</span>
        <ul class="comment-section">
            <li class="coms-sent">{{comment}}</li>
        </ul> 
        <input type="text" class="comment" v-model= "comment">
        <button @click="sendComment" class="btn-comment">Envoyer</button>
    </div>
   
</template>

<script>
export default {
    name: "posts",
    props:["post"],

    data() {
        return{
            comment: null,
            sampleComms: [
                {
                }
            ]


        };

        
    },

    methods: {
        sendComment() {
            if(this.comment !== ""){
                alert('je fonctionne');
                console.log(document.getElementsByClassName('coms-sent'));
            }
        }

    }
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
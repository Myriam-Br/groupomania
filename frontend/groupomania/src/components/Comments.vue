<template>
  <div class="comments">
       <div class="comment-container">
            <p class="coms-sent">{{comment}}</p>
        </div> 
        <input type="text" class="comment" v-model= "comment">
        <button @click="sendComment" class="btn-comment">Envoyer</button>

  </div>
</template>

<script>
export default {
    name: "comments",

    data() {
        return{
            comment: null,
            userComs : [],
        };    
    },

    render:{ 
        function(createElement){
            var newElement = createElement('p', 'hi');
            console.log(newElement);
            return createElement('div', [
                newElement
                
            ])      
        }

    },

    methods: {
        sendComment() {  
            if(this.comment !== null){
            var commentaire = this.comment;
            this.userComs.push(commentaire); 
            }
            console.log(this.userComs.length);
            console.log(this.userComs);
            this.userComs.forEach(element => {
                console.log(element);
            });
            console.log(document.getElementsByClassName('comments'));
            console.log(document.createElement('div'));           
        }

    }

}
</script>

<style lang="scss" scoped>
.comments{
    .comment-container{
        width: 92%;
        height: 50px;
        background-color: rgb(255, 255, 255);
        border: 1px black solid;

        .coms-sent{
            display: none;
        }
    }
    input{
        width: 99%;
    }
}
</style>
<template>
  <div class="comment-container">  
        <textarea class="comment-field"></textarea>
        <button @click="sendComment" class="btn-comment">Send</button>
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
.comment-container{
        width: 100%;
        height: 50px;
        background-color: rgb(255, 255, 255);
        border: 1px black solid;    
        display: flex; 
        flex-direction: column;

        .comment-field{
                max-height: 70px;
                resize: none;
                border: black solid 1px;
                overflow: auto;
                outline: none;
                font-size: 12px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;

        }
        .btn-comment{
            width: 60px;
            height: 40px;
        }
}
</style>
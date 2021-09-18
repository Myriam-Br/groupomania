<template>
  <div class="comment-container">  
      <div class="white-container">
            <ul class="list-coms">
                <li>Content comment</li>
                <li>Content comment</li>
            </ul>
            <textarea class="comment-field"></textarea>
        </div>

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
        height:45%; 
        display: flex; 
        flex-direction: column;
        
        .white-container {
           border: solid black 2px;
            
            .list-coms{
                height: auto;
                padding: 15px 5px;
            }

            .comment-field{
                max-height: 80px;
                height: 50px;
                width: 99%;
                resize: none;
                border: black solid 1px;
                overflow: auto;
                outline: none;
                font-size: 12px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;

            }
        }

        .btn-comment{
            width: 60px;
            height: 30px;
            padding: 3px;
            box-shadow: none;
            background-color: rgb(21, 55, 148);
            color: white;
            font-weight: 400;
            font-size: 16px;
            float: right;
        }
}
</style>
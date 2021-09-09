<template>
  <div class="forum">
       <div class="container"> 
      <Posts :post="post" v-for="post in postSample" :key="post"/>
      </div>
  </div>
</template>

<script>
import Posts from "../components/Posts.vue";
export default {
    name:"forum",
    components:{
      Posts,
    },

    data(){
      return {
        postSample: [
          {
            title: "my first post",
            imageUrl: "my first post image",
          },
          {
            title: "my second post",
            imageUrl: "my second post image",
          }
        ]
      }
    }

}
</script>

<style lang="scss" scoped>

  .forum{
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
    .container{
        display: flex;
        flex-direction: column;   
        padding: 0px 15%;
    }
  }

</style>
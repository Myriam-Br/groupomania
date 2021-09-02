<template>
  <div class="home">
    <h1>HOME PAGE!!</h1>
    <div class="container"> 
      <Posts :post="post" v-for="post in postSample" :key="post"/>
    </div>
     
  </div>
</template>

<script>
import Posts from "../components/Posts.vue";
export default {
    name: 'home',
    components:{
      Posts
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
          },
          {
            title: "my third post",
            imageUrl: "my third post image",
          }
        ]
      }
    }
};
</script >

<style lang="scss" >
.home{

  .container{
    display: flex;
    flex-direction: column;
  }
}
</style>
<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "app",
  components:{
    Navigation,
  }
}
</script>


<style lang="scss">
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}

.link{
    text-decoration: none;
    color: black;
    cursor: pointer;
}

</style>

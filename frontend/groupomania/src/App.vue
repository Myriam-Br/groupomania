<template>
  <div id="app">
    <NavigationProfil/>
    <Navigation/>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import NavigationProfil from "./components/NavigationProfil.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components:{
    Footer,
    NavigationProfil,
    Navigation
  }
}
</script>


<style lang="scss">
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  
}
#app{
  position: relative;
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

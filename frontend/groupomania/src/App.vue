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
button {
  background-color: rgb(208, 227, 236);
  border: none;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.609);
  cursor: pointer;
}

</style>

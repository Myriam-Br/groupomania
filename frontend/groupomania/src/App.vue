<template>
  <div id="app">
    <header>
      <NavigationProfil/>
      <Navigation/>
    </header>  
    <router-view class="view-container"></router-view>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavigationProfil from "./components/NavigationProfil";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export default {
  name: "app",
  components:{
    Footer,
    NavigationProfil,
    Navigation,
  },
  
}
</script>


<style lang="scss">
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  background-color: rgb(234, 244, 245);
  
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
.view-container{

}


</style>

<template>
  <div id="app">
    <header>
      <navigationProfil></navigationProfil>
      
    </header>  
    <router-view class="view-container"></router-view>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import NavigationProfil from "./components/NavigationProfil";

//import Navigation from "./components/Navigation";
//import Footer from "./components/Footer";


export default {
  name: "app",
  components:{
    NavigationProfil
  
  },
  data() {
    return {
      isConnected : localStorage.getItem('userID'),
    }
  },
  
}
</script>


<style lang="scss">

//------------RESET CSS-------------//
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body{
  line-height: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: rgb(26, 27, 27);  
  color: white;
}
#app{
 
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

h1{
      text-align: center;
      font-size: 20px;
      margin-bottom: 20px;
      color: white;
      font-weight: bold;
}

footer{
position: absolute;
bottom: 0%;
right: 0%;
left: 0%;
background-color: aquamarine;
align-self: center;
}
 .likes{
    display: flex;
    margin-right: 10px;

    .like{
        display: flex; 
        margin-right: 10px;
        .like-btn{
            background-color: rgb(72, 218, 72);
            width: 20px;
            height: 20px; 
            margin-right: 5px;    
        }        
    }
      .dislike{
        display: flex;
        .dislike-btn{
            background-color: rgb(200, 43, 43);
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }
        }

</style>

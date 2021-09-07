<template>
<footer>
    <div class="footer-container">
         <ul class="list-footer">
             <li>policy</li>
             <li>privacy</li>
             <li>copyright</li>
         </ul>
    </div>
</footer>
  
</template>

<script>
export default {
    name: "footer"

}
</script>

<style lang="scss" scoped>
.footer-container{
    display: flex;
    justify-content: space-between;
    height: 60px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;  
    .list-footer{
        display: flex;
        width: 100%;
        justify-content: space-around;
        color: grey; 
        font-style: italic;
    }
}
</style>
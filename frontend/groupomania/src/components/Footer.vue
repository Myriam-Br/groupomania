<template>
    <div class="footer-container">
         <ul class="list-footer">
             <li>privacy policy</li>
             <li>help</li>
             <li>copyright</li>
         </ul>
    </div> 
</template>

<script>
export default {
    name: "footer_pg",
 

}
</script>

<style lang="scss" scoped>
.footer-container{
    display: flex;
    justify-content: space-between;
   

    .list-footer{
        display: flex;
        width: 100%;
        justify-content: right;
        color: grey; 
        font-style: italic;
        margin-right: 5px;

        li{
            margin-left: 10px;
        }
    }
}
</style>
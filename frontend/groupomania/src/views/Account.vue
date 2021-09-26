<template>
<div>
    <div class="container profil-user">

    <div class="profil">
      
        <button @click="deleteAccount" class="delete" >Delete account</button>    
    </div>
       
    </div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
    name:"editprofil",
    data() {
        return {
            email: null,
            username: null,
        }        
    },

    methods: {
        deleteAccount() {
            axios.delete('/users/' + localStorage.getItem('userID'))
            .then(
                response => console.log(response)

            )
            .catch(
               error => console.log(error)
            )

            localStorage.removeItem("mytoken");
            localStorage.removeItem("userID");
            localStorage.removeItem("email");
            localStorage.removeItem("username");
            this.$router.push('/');  
            location.reload()
        },
    /*
        updateAccount() {
             axios.put('/users/' + localStorage.getItem('userID'), {
                email: this.email,
                username: this.username,
             });

        }
    */   


       
    }

}
</script>

<style lang="scss" scoped>
.profil-user{
    
    width: 100%;
    color: white;
    .profil{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .profil-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

            input{
                width: auto;
                overflow: auto;
                outline: none;
                margin-bottom: 5px;
            }
    }

    .delete{
         background-color: rgb(208, 227, 236);
        width: 200px;
        align-self: center;
        margin-top: 50px;
       
    }

      
   
}
            

</style>
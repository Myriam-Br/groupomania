<template>
<div>
    <div class="container profil-user">

    <h1>Edit profil</h1>
        <div class="profil-info">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email"> 
            <button >apply changes</button>  
        </div>

        <button @click="deleteAccount" class="delete" >Delete account</button>    
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
            const response = axios.delete('/users/' + localStorage.getItem('userID'));
            console.log(response);
            localStorage.removeItem("mytoken");
            localStorage.removeItem("userID");
            localStorage.removeItem("email");
            localStorage.removeItem("username");
            this.$router.push('/');  
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
       
    }

      
   
}
            

</style>
<template>
<div>
    <div class="container profil-user">
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
            axios.delete('/users/' + localStorage.getItem('userID'))
            .then(
                response => {
                    console.log(response);
                    this.$router.push('deleteconfirmation')

                }

            )
            .catch(
               error => console.log(error)
            )

           
            this.$router.push('/');  
            localStorage.clear();
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

}
            

</style>
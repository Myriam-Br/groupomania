<template>
  <div class="container">
      <Modal v-if="modalActive" v-on:close-modal="closeModal"/>
      <h1>Reset your password</h1>
       <div class="form-resetpw">
        <label for="email">Email</label>
        <input @submit="checkForm" type="email" class="username" v-model= "email" novalidate="true">
        <button @click="openModal" class="send-mail">Send mail</button>
      </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
    name: "forgotpassword",
    
    data() {
        return {
            error: [],
            email: null,
            modalActive: false,
            modalMessage: "",
        }
    },

    components : {
        Modal
    },
    methods : {
        closeModal(){
            this.modalActive = !this.modalActive;
            this.email = "";
        },    

        checkForm() {
            this.errors = [];
            if(!this.email){
                this.errors.push('Email required.');
            }else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }   
        },

      
        openModal() {
           var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(this.email != "" && regex.test(this.email)){
                this.modalActive = true;
            }
        },
    }

}
</script>

<style lang="scss">
.container{
    padding: 20px 20px;
    margin-top: 20px;

    h1{
        text-align: center;
    }
    .form-resetpw{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        input{
            width: 300px;
            height: 30px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid black;
        } 
    }
    .send-mail{
        margin-top: 10px;
        width: 300px;
        height: 25px;
        align-self: center;
        border: 1px black solid;
        border-radius: 5px;
        background-color: lavender;
        cursor: pointer;
    }
}

</style>
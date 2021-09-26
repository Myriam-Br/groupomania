<template>
  <div class="container signup-in-up">
      <h1>SIGN UP</h1>

      <form @submit.prevent="register" class="form-signup">

        <label for="username">Username</label>
        <input type="text" class="username" v-model= "username">

        <label for="email">Email</label>
        <input type="text" class="email" v-model= "email">

        <label for="password">Password</label>
        <input type="password" class="password" v-model= "password">

        <button @click="register"  class="btn-signup">Sign up</button>
      </form>
      
      <div class="error"></div>
      <p class="signin-msg">
        Already have an account?
        <router-link class="link link-to-signin" :to="{ name : 'signin'}">Sign in</router-link>
      </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "signup",

    data(){
      return{
          username: '',
          email: '',
          password: '',
      };
    },
    methods: {
          async register() { 
            //send request
            await axios.post('users/register', {
              username: this.username,
              email: this.email,
              password : this.password,
            }) 
            .then(
              response => {
                console.log(response);
                this.$router.push('/signin')
              }
            )
            .catch(
              error => {
                console.log(error);
                this.$router.push('/signup')
              }
            )

           
        
            
              
          } 
    }
}

</script>

<style lang="scss" scoped>
.container{
    padding: 20px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    

    .form-signup{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

        input{
            width: 300px;
            height: 30px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid black;
        }    
    }

    .btn-signup{
      margin-top: 10px;
        width: 300px;
        height: 25px;
        align-self: center;
        border: 1px black solid;
        border-radius: 5px;
        background-color: lavender;
        cursor: pointer;
    }

    .signin-msg{
        text-align: center;

        .link-to-signin{
        color: rgb(117, 4, 42);
        font-weight: 500;    
        }
    }

}
</style>
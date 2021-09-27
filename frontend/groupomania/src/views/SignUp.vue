<template>
  <div class="container signup-in-up">
      <h1>SIGN UP</h1>

      <form @submit.prevent="register" class="form-signup">

        <label for="username">Username</label>
        <input type="text" class="username" v-model= "username">

        <label for="email">Email</label>
        <input type="email" class="email" v-model= "email">

        <label for="password">Password</label>
        <input type="password" class="password" v-model= "password">

        <button @click="register"  class="btn-signup">Sign up</button>
      </form>
      
      <div class="error"></div>
      <p class="signin-msg">
        Already have an account?
        <router-link class="link link-to-signin" :to="{ name : 'signin'}">Sign in</router-link>
      </p>
      <span class="msg_err">{{this.err_msg}}</span>
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
          err_msg: null
      };
    },
    methods: {
          async register() { 
            
            //send request
            const response =  await axios.post('users/register', {
              username: this.username,
              email: this.email,
              password : this.password,
            }); 
            if(this.username=='' || this.email=='' || this.password==''){
              this.err_msg = 'Please fill all the fields correctly';
            } else if(response.data.status==true){
               this.err_msg='' ;
               this.$router.push('/signin');       
            }else{
               console.log('ERROR');
               this.err_msg = 'Password must contain 6 or more characters a digita lower-case letter an upper-case letter'
           }
     
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

    .msg_err{
      text-align: center;
      margin-bottom: 10px;
    }

}
</style>
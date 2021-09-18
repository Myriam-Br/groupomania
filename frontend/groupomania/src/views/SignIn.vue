<template>
    <div class="container signup-in-up">
      <h1>SIGN IN</h1>
      <form @submit.prevent="login" class="form-signin">
        <label for="email">Email</label>
        <input type="text" class="email" v-model="email">
        <label for="password">Password</label>
        <input type="password" class="password" v-model="password">  
        <button  @click="login" class="btn-signin">Sign In</button>
      </form>
      <div class="error"></div>
      <p class="signup-msg">
        Don't have an account? 
        <router-link class="link link-to-signup" :to="{ name : 'signup'}">Sign up</router-link>  
      </p>
      <p class="forgotpw-msg">
           Forgot your password?
        <router-link class="link link-to-resetpw" :to="{ name : 'forgotpassword'}">Reset password</router-link>
      </p>


  </div>
</template>

<script >
import axios from 'axios';
export default {
    name: "signin",
   
    data() {
        return{
          email: '',
          password: '',
        };
    },
  
    methods: {
        async login() {
           const response = await axios.post('/users/login', {
               email: this.email,
               password: this.password
           });
           if(response.data.status==true) {
                this.$router.push('/account');          
           } else{
               console.log('ERROR');
           }
        //console.log(response.data.status);
            console.log(response);
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    padding: 20px 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1{
        text-align: center;
    }

    .form-signin{
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
    .btn-signin{
        margin-top: 10px;
        width: 300px;
        height: 25px;
        align-self: center;
        border: 1px black solid;
        border-radius: 5px;
        background-color: lavender;
        cursor: pointer;

    }
    .signup-msg {
        text-align: center;
        .link-to-signup{
        color: rgb(117, 4, 42);
        font-weight: 500;    
        }

    }
    .forgotpw-msg {
        text-align: center;
        margin-top: -10px;
        .link-to-resetpw{
        color: rgb(117, 4, 42);
        font-weight: 500;    
        }

    }

}

</style>
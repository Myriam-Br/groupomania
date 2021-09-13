<template>
  <div class="container signup-in-up">
      <h1>SIGN UP</h1>
      <div class="form-signup">
        <label for="firstname">First Name</label>
        <input type="text" class="firstname" v-model= "firstname">

        <label for="lastname">Last Name</label>
        <input type="text" class="lastname" v-model= "lastname">

        <label for="username">Username</label>
        <input type="text" class="username" v-model= "username">

        <label for="email">Email</label>
        <input type="text" class="email" v-model= "email">

        <label for="password">Password</label>
        <input type="password" class="password" v-model= "password">
      </div>
      <button @click="register"  class="btn-signup">Sign up</button>

      <div class="error" v-if="error">{{this.errorMsg}}</div>
      <p class="signin-msg">
        Already have an account?
        <router-link class="link link-to-signin" :to="{ name : 'signin'}">Sign in</router-link>
      </p>
  </div>
</template>

<script>
export default {
    name: "signup",

    data(){
      return{
          firstname: null,
          lastname: null,
          username: null,
          email: null,
          password: null,
          error: null,
          errorMsg: "",
      };
    },

    methods: {
        register() {
            if(this.firstname !== "" || this.lastname !== "" || this.username !== "" || this.email !== "" || this.password !== "" ) {
                this.error = false;
                this.errorMsg= "";  
            }   
            
            this.error = true;
            this.errorMsg = "Please fill out all the fields";        
        },
    }


}
</script>

<style lang="scss" scoped>
.container{
    padding: 20px 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
      text-align: center;
    }

    .form-signup{
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
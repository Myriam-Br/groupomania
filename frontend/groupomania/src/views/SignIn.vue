<template>
    <div class="container signup-in-up">
      <h1>SIGN IN</h1>
      <div class="form-signin">
        <label for="username">Username</label>
        <input type="text" class="username" v-model="username">
        <label for="password">Password</label>
        <input type="password" class="password" v-model="password">
      </div>
      <button class="btn-signin" @click="login">Sign In</button>
      <div class="error" v-if="error">{{this.errorMsg}}</div>
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

<script>
export default {
    name: "signin",
   
    data() {
        return{
          username: null,
          password: null,
          error: null,
          errorMsg: "",
        };
    },

    methods: {
        login() {
            if(this.username !== "" || this.password !== "" ) {
                this.error = false;
                this.errorMsg= "";  
                this.$router.push('forum') 
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
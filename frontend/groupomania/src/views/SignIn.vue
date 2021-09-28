<template>
    <div class="container signup-in-up">
      <h1>SIGN IN</h1>
      <form @submit.prevent="login" class="form-signin">
        <label for="email">Email</label>
        <input type="email" id="email" class="email" v-model="email">
        <label for="password">Password</label>
        <input type="password" id="password" class="password" v-model="password">  
        <button  @click="login" class="btn-signin">Sign In</button>
      </form>
      <div class="error">{{this.errormsg}}</div>
      <p class="signup-msg">
        Don't have an account? 
        <router-link class="link link-to-signup" :to="{ name : 'signup'}">Sign up</router-link>  
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
          errormsg:'',
        };
    },
  
    methods: {
        async login() {
           const response = await axios.post('/users/login', {
               email: this.email,
               password: this.password
           });

           if(this.email=='' || this.password==''){
               this.errormsg = 'Please fill all the fields'
           }else if(response.data.status==true) {
                this.$router.push('/');  
                this.errormsg ='' ;
                location.reload()
                   
           } else{
               console.log('ERROR');
               this.errormsg = 'email or password incorrect'
           }
        //console.log(response.data.status);
            //console.log(response.data);
            var token = response.data.token;
            localStorage.setItem('mytoken',token);
            var userID = response.data.userID;
            if(userID==undefined){
                console.log('not valid');
            }else{
                localStorage.setItem('userID',userID);
            }
            var username = response.data.username;
            localStorage.setItem('username',username);
            
            
            var email = response.data.data.user.email;
            //console.log(email);
            localStorage.setItem('email',email);     
            
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

  
    .form-signin{
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
    .error{
        color: red;
        text-align: center;
        margin-bottom: 10px;
    }

    .signup-msg {
        text-align: center;
        margin-bottom: 20px;
        .link-to-signup{
         color: rgb(0, 255, 200);
        font-weight: 500;    
        font-size: 18px;  
        }

    }

}

</style>
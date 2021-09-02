<template>
  <div class="container">
      <h1>Reset your password</h1>
       <div class="form-resetpw">
        <label for="email">Email</label>
        <input type="text" class="username">
        <button class="send-mail">Send mail</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "forgotpassword",

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
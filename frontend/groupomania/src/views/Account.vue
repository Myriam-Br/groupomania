<template>
<div class="container profil-user">
    <h1>MY PROFIL</h1>
    <div class="profil-info">
        <img class="profil-pic" src="" alt="">
        <p class="username">Username</p>
        <p class="bio">Bio</p>
    </div>
    <router-link class="edit-profil link" :to="{ name : 'editprofil'}">Edit</router-link> <br>
</div>
  
</template>

<script>

export default {
    name:"account",


}
</script>

<style lang="scss" scoped>
    .container{
        text-align: center;
        .profil-info{
            align-self: center;
            .profil-pic{
                border: 1px black solid;
                width: 100px;
                height: 100px;
                border-radius: 50px;
            }
        }
        .edit-profil{
            align-self: center
        }
    }
</style>
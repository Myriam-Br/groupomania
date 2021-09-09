<template>
<div class="profil-user">
    <h1>MY PROFIL</h1>
    <div class="profil-info">
        <img class="profil-pic" src="" alt="">Picture
        <p class="username">Username</p>
        <p class="bio">Bio</p>
    </div>
    <router-link class="edit-profil link" :to="{ name : 'editprofil'}">Edit</router-link>
</div>
  
</template>

<script>

export default {
    name:"profil",


}
</script>

<style lang="scss" scoped>

</style>
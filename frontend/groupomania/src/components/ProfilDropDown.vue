<template>
  <div class="profil-drop-down">
      <div class="container-drop-down">
          <ul class="list-link">
              <router-link class="myprofil link" :to="{ name : 'profil'}">My profil</router-link>
              <router-link class="myprofil link" :to="{ name : '#'}">Disconnect</router-link>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"profildropdown"

}
</script>

<style lang="scss" scoped>
.profil-drop-down{
    background-color: rgb(162, 162, 179);
    padding:20px;
    display: none;


    .list-link{
        display: flex;
        flex-direction: column;
    }

}

</style>
<template>
      <div class="confirm_delete">
        <h1>Votre compte a été supprimé avec succès!</h1>
        <h2>Notez que vous ne pourrais ni commenter, ni liker ou disliker les publications de vos collègues.</h2>
        <button @click="backToHome" class="btn_retour_home">Revenir à la page d'accueil</button>
    </div>
</template>

<script>
export default {

    name : "deleteconfirmation",
    methods: {
        backToHome(){
            this.$router.push('/')
            localStorage.clear()
        }
    }


}
</script>

<style>

</style>

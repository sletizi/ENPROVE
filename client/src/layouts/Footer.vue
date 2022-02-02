<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    padless
  >
    <v-card
      class="flex"
      flat
      tile>
      <v-card-text class="white--text text-center">
        {{ new Date().getFullYear() }} — <strong>  Copyright &copy; 2020 faiilbuono , MIT </strong>
      </v-card-text>
    </v-card>

  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({}),
  }
</script>

<style lang="sass">
  #home-footer 
    .v-card-text
      background-attachment: fixed
</style>

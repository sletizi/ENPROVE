<template>
  <v-bottom-navigation
    :value="value"
    color="teal"
    grow
    fixed
  >
    <v-btn v-for="navitem in items" :key="navitem.name" :to=" navitem.route ">
      <span>{{navitem.title}}</span>
      <v-icon>{{navitem.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>


<script>
export default {
  name: 'HomeAppBar',
  data() {
    return {
      items: [
        { icon: "mdi-home", title: "Home", route:"/"},
        { icon: "mdi-format-list-checks", title: "Your words", route:"my_words"},
        { icon: "mdi-chart-line", title: "Stats", route:"contact-us"},
        { icon: "mdi-nintendo-game-boy", title: "Play with words", route:"contact-us"},
        { icon: "mdi-cog", title: "Settings", route:"faq"}
      ]
    }
  },

  computed:{
    onMobile(){
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods:{
    goHome: function(){
      this.$router.replace('/');
    }
  }
}
</script>

<style lang="sass">
  #home-app-bar
    .v-btn
      &::before
        display: none
</style>
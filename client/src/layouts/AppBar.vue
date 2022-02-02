<template>
  <div>
    <v-app-bar
          id="home-app-bar">
      <v-toolbar-title>
          Improve your english words
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items  class="hidden-sm-and-down">
        <v-btn v-for="item in items" :key="item.title" :to=" item.route " text>
          <v-icon left> {{item.icon}} </v-icon> {{item.title}}
        </v-btn>
      </v-toolbar-items>

      <v-menu
        v-if="onMobile"
        class="hidden-md-and-up"
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item.icon" @click="item.to">
              <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>          

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'HomeAppBar',
  data() {
    return {
      items: [
        { icon: "mdi-home", title: "Home", route:""},
        { icon: "mdi-account-group", title: "Your words", route:"about"},
        { icon: "mdi-email", title: "Play with words", route:"contact-us"},
        { icon: "mdi-help", title: "Settings", route:"faq"}
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
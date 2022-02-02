<template>
  <v-app>

    <home-view />

    <bottom-nav-bar />

  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',
    components: {
      HomeView: () => import('@/layouts/View'),
      BottomNavBar: () => import('@/layouts/BottomNavBar')
    },
  }
</script>

<template>
  <base-section
    id="sign-up-or-log"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="6"
          align="center"
          justify="center"
        >
          <v-btn
              x-large
              color=red
              dark
              to="login"
            >
              Accedi
            </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="6"
          align="center"
          justify="center"
        >
          <v-btn
              x-large
              color=red
              dark
              to="signup"
            >
              Registrati
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionSignUpOrLog',
  }
</script>
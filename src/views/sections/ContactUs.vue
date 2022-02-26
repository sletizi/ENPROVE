<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 2"
              title="HAI DELLE DOMANDE?CONTATTACI"
            />

            <base-body space="0">
              <span class="white--text">
                Vi ricordiamo che stiamo facendo un'opera gratuita e che siamo tutti lavoratori/studenti; pertanto cercheremo di rispondere il prima possibile alle vostre richieste, nei limiti del possibile
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              href="mailto:help.faiilbuono@gmail.com"
              large
              outlined
              target="_blank"
            >
              Contattaci
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionContactUs',
  }
</script>

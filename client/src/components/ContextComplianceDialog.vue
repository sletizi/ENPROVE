<template>
    <v-dialog
      v-model="dialogVisible"
      max-width="290"
    >
      <v-card class="pa-5">
        <v-card-title class="text-h5" justify="center">
          {{(this.translation).toUpperCase()}}
        </v-card-title>
        <br>
        <v-card-text class="text-h7">
          The translation is compliant with the phrase context?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="reportAsErrorOrAccept('Y')"
          >
            Yes
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="reportAsErrorOrAccept('N')"
          >
            Report as mistake
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'ContextComplianceDialog',
    props: {
      value: Boolean,
      sheet: Object,
      translation: String
    },
    computed: {
      dialogVisible: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    },
    methods:{
        reportAsErrorOrAccept: function(status){
            this.sheet.getRows({
              offset: this.$store.state.row_number,
              limit: 1
            }).then(row => {
              row[0].COMPLIANT=status;
              row[0].save();
            });
            this.dialogVisible = false
        }
    }
}
</script>
<style>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>

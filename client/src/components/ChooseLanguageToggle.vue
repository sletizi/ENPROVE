<template>
    <v-container class="text-center">
      <p class="text-md-center">Choose the language</p>
      <v-btn-toggle
        v-model="toggledLang"
        shaped
        mandatory >
        <v-btn
            large 
            v-for="language in languages" 
            :key="language.name"> 
            {{language.icon_text}}
        </v-btn>
      </v-btn-toggle>
    </v-container>
</template>

<script>
  export default {
    name: 'ChooseLanguageToggle',
    data: function() {
      return {
        toggledLang: "en",
        languages: [
            {
                name: "en",
                icon_text : "EN 🏴󠁧󠁢󠁥󠁮󠁧󠁿"
            },
            {
                name: "it",
                icon_text : "IT 🇮🇹"
            }
        ]
      };
    },
    watch: {
      toggledLang: function (val) {
        if(val==0){
          this.$store.dispatch('swap_lang','en')
        }else if(val==1){
          this.$store.dispatch('swap_lang','it')
        }
      }
    }
    
  }
</script>
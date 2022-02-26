<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="searched"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="wordList"
      :search="searched"
      @click:row="handleClickOnRow"
    ></v-data-table>
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        sm="6"
        md="4"
      >      
        <translation-component-card
          v-model="show_details"
          v-bind:translation="translation_item"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TranslationComponentCard from '@/components/TranslationComponentCard';
  export default {
    name: 'WordListComponent',
    props: {
      wordList: {
        required: true, 
        type: Array,
        default: function () { return [] }
      },
    },
    components:{
      'translation-component-card': TranslationComponentCard
    },
    data() {
      return {
        searched: "",
        translation_item:{
          word:"guilty",
          translation:"colpevole",
          src_lang:"en",
          target_lang:"it",
          inserted_time:"28/12/2021 20.50.00",
          google_translate_link:"https://translate.google.it/?hl=it&sl=en&tl=it&text=guilty&op=translate"
        },
        show_details: false,
        headers: [
          { text: 'Word', value: 'word' },
          { text: 'Translation', value: 'translation' },
          { text: 'Insertion Date', value: 'insertion_date'}
          //{ text: 'Category', value: 'category' },
          //{ text: 'Error rate', value: 'error_rate' },
          // other possibilies: category, error_rate_, usage_example
        ],
      };
    },
    methods:{
      handleClickOnRow(value){
        this.show_details = true
      }
    }
  }
</script>
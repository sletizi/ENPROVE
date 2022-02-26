<template>
    <v-dialog v-model="dialogVisible"
        max-width="600px"
        persistent>
        <v-card class="mx-auto pa-5">
            <v-card-text>
                <p class="text--primary font-weight-black text-center">
                {{translation.inserted_time}}
                </p>
                <div class="text-h5 text--primary text-center font-weight-bold">
                    <country-flag :country="srcLangTranslated" size='big'/>
                    <p> {{translation.word}}</p>
                </div>
                <button disabled>
                    <v-icon
                    dark
                    right
                    x-large
                    center
                    >
                    mdi-arrow-down-bold-box-outline
                    </v-icon>
                </button>
                <div class="text-h5 text--primary text-center font-weight-bold">
                    <country-flag :country="targetLangTranslated" size='big'/>
                    <p> {{translation.translation}}</p>
                </div>
            </v-card-text>
            <v-row class="align-center justify-center">
                <ul class= "font-weight-black " v-for="(meaning, meaning_index) in meanings" :key="meaning_index">
                    {{(meaning.partOfSpeech).toUpperCase()}}
                    <li class="font-weight-bold" v-for="(definition, definition_index) in meaning.definitions" :key="definition_index" > 
                    {{definition.definition}} <br> 
                    Example : {{definition.example}}
                    <ul class="font-weight-bold"> Synonyms
                        <li v-for="(synonym, synonym_index) in definition.synonyms" :key="synonym_index" class= "font-weight-medium">
                            {{ synonym }} 
                        </li>
                    </ul>
                    <br>
                    <ul class="font-weight-bold"> Antonyms
                        <li v-for="(antonym, antonym_index) in definition.antonyms" :key="antonym_index" class= "font-weight-medium">
                        {{ antonym }} 
                        </li>
                    </ul>
                </li>
                <br>
                </ul>
            </v-row>

            <div class=" text--primary text-center font-weight-bold">
                <button @click="openInNewTab(translation.google_translate_link)">
                    Translate with google
                    <v-icon
                    dark
                    right
                    x-large
                    >
                    mdi-google-translate
                    </v-icon>
                </button>
            </div>
            
            <v-card-actions class="pt-0">
                    <v-btn text color="teal accent-4" @click="dialogVisible = false">
                    Close
                    </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import axios from 'axios';
import CountryFlag from 'vue-country-flag'

//import { mdiGoogleTranslate } from '@mdi/js';
//import { mdiArrowDownBox } from '@mdi/js';
export default {
    name: 'TranslationComponentCard',
    components:{
        'country-flag':CountryFlag
    },
    props: {
        value: Boolean,
        translation: {
            required: true, 
            type: Object,
            default: function () { return {} }
        },
    },
    created(){
        console.log("created")
        axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+this.getEnglishWord).then((res) => {
            console.log(res.data[0].meanings)
            this.meanings = res.data[0].meanings;
        }).catch((error) => {
            console.log(error);
        });
    },
    computed: {
        dialogVisible: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        },
        srcLangTranslated: function () {
            return this.translateLangForFlag(this.translation.src_lang);
        },
        targetLangTranslated: function () {
            return this.translateLangForFlag(this.translation.target_lang);
        },
        getEnglishWord: function() {
            /*USEFUL BECAUSE THE API DICTIONARY WORKS ONLY WITH ENGLISH TERMS AND I'M NOT SURE IF THE TRANSLATED WORD IS ENGLISH OR ITALIAN*/
                    console.log("getEnglishWord")
            return  (this.translation.src_lang=='it') ? this.translation.translation : this.translation.word 
        }
    },
    data() {
        return {
            meanings: [],
        };
    },
    methods:{
        openInNewTab: function(url) {
            var win = window.open(url, '_blank');
            win.focus();
        },
        translateLangForFlag: function(lang) {
            if (lang=='it'){
                return lang
            }else if(lang=='en'){
                return 'gb-eng'
            }
        }
    }
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
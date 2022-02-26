<template fill-height fluid>
    <v-main fill-height fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6"  md="12" class="py-2">
                <toggle-languages/>  
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="12" class="py-12">
                <v-text-field
                class="ma-6"
                v-model="unKnownWord"
                solo
                label="Put here your unknown word"
                clearable
                
                ></v-text-field>
            </v-col>
        </v-row>  
        <v-row align="center" justify="center">
            <v-col cols=12 sm="6" md="12" class="py-12">
                <div class="text-center">
                    <v-btn
                    v-on:click="translate(); loading_translation=true"
                    :loading="loading_translation"
                    :disabled="disableIfEmpty"
                    rounded
                    color="primary"
                    dark
                    >
                    TRANSLATE
                    </v-btn>
                </div>
            </v-col>
        </v-row>    
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="12" class="py-12">
                <p class="font-weight-bold text-center">
                {{translation}}
                </p>  
            </v-col>
        </v-row>
        <compliance-dialog v-model="show_compliance_dialog" v-bind:sheet="sheet" v-bind:translation="translation"/>
   </v-main>      
</template>

<script>
import ChooseLanguageToggle from '@/components/ChooseLanguageToggle';
import ContextComplianceDialog from '@/components/ContextComplianceDialog';


import axios from 'axios';

export default {
    data() {
      return {
        unKnownWord: "",
        translation:"",
        sheet: undefined,
        loading_translation: false,
        show_compliance_dialog : false,
        show_change_src_lang_dialog: false
      };
    },
    computed: {
        disableIfEmpty() {
            return this.unKnownWord.length <= 0;
        }
    },
    components: {
        'toggle-languages': ChooseLanguageToggle, 
        'compliance-dialog': ContextComplianceDialog
    },
    methods: {
        translate: function () { 
            const body = JSON.stringify({
                srcLang: this.$store.getters.getSourceLang,
                targetLang: this.getOppositeLang(this.$store.getters.getSourceLang),
                word: this.unKnownWord
            });
            axios.post("localhost:3002/translations", body).then((res) => {
                console.log(res.data[0].meanings)
                this.translation = //TODO;
                this.loading_translation=false
                this.showComplianceContextDialog();
            }).catch((error) => {
                console.error(error);
            });
            /*this.sheet.addRow({ SRC_LANG : this.$store.getters.getSourceLang, PAROLA: this.unKnownWord }).then(a => {
                this.sheet.getRows().then(row => {
                    this.$store.state.row_number = a._rowNumber-2
                    this.translation = row[this.$store.state.row_number].TRADUZIONE;
                    this.loading_translation=false
                    this.showComplianceContextDialog();
                    this.checkProbableErrorInSource(row[this.$store.state.row_number])

                });
                /*axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+this.unKnownWord).then((res) => {
                    console.log(res.data[0].meanings)
                    //TODO: WRITE MEANINGS
                }).catch((error) => {
                    console.error(error);
                });              
            }); */ 
            
        },
        showComplianceContextDialog: function() {
            this.show_compliance_dialog = true
        },
        getOppositeLang: function(lang) {
            if (lang == "it") {
                return "en"
            }else {
                return "it"
            } 
        }
    }
}
</script>

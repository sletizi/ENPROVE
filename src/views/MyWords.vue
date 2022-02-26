<template>
    <v-main align="center">
        <word-list-component :wordList="wordList"/>
   </v-main>      
</template>

<script>
export default {
    data() {
        return {
            sheet: undefined,
            wordList: [],
        };
    },
    beforeCreate(){
        /*doc.useServiceAccountAuth(creds).then(a => {
            console.log('Use cred done!')
            doc.loadInfo().then(info => {
                console.log("Info loaded");
                this.sheet = doc.sheetsByIndex[0];
                this.sheet.getRows().then(rows => {
                    this.wordList = rows.map(element => {
                        return {
                            word: element.PAROLA,
                            translation : element.TRADUZIONE,
                            insertion_date: element.DATA_INSERIMENTO
                        }
                    });
                })
            })
        });*/
    },
    created(){
        
    },
    components: {
        WordListComponent: () => import('@/components/DataTable'),
    },
}

</script>


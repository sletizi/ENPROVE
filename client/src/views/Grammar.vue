<template>
    <v-main align="center">
        <verbs/>
   </v-main>      
</template>

<script>
export default {
    data() {
       
    },
    beforeCreate(){
        
    },
    created(){
        
    },
    components: {
        Verbs: () => import('@/components/TenseVerbCard'),
    },
}

</script>

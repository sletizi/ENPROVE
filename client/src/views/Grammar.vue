<template>
    <v-main align="center">
        <verbs/>
   </v-main>      
</template>

<script>
export default {
    components: {
        Verbs: () => import('@/components/TenseVerbCard'),
    },
}

</script>

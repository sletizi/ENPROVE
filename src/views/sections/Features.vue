<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Cash liquido ora',
          text: 'Se compri una gift card attraverso il nostro sito i soldi giungeranno in pochi giorni al commerciante, che tuttavia disporrà di denaro per poter sostenere i costi fissi a cui è sottoposto nonostante le chiusure dovute alla pandemia',
        },
        {
          icon: 'mdi-camera-outline',
          title: "Aiuta le attività locali invece dei colossi dell'ecommerce",
          text: "I soldi destinati a queste attività locali probabilmente non sarebbero mai stati destinati a loro e sarebbero finiti ai colossi digitali dell'ecommerce",
        }
      ],
    }),
  }
</script>

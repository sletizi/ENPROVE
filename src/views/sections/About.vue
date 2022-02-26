<template>
  <base-section id="about">
    <base-section-heading title="Chi siamo">
      Perché nasce questo progetto
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(member, i) in teamMembers"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="member"
            align="left"
            horizontal
          >
            member.title
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAbout',

    data: () => ({
      teamMembers: [
        {
          name: 'Dev1',
          icon: 'mdi-fountain-pen-tip',
          role: 'A'
        },
        {
          name: 'Dev2',
          icon: 'mdi-cellphone',
          role: 'A'
        },
        {
          name: 'Dev3',
          icon: 'mdi-pencil-box-outline',
          role: 'A'
        },
        {
          name: 'Dev4',
          icon: 'mdi-image-size-select-actual',
          role: 'A'
        },
        {
          name: 'Dev5',
          icon: 'mdi-ice-pop',
          role: 'A'
        },
        {
          name: 'Dev6',
          icon: 'mdi-help-circle-outline',
          role: 'A'
        },
      ],
    }),
  }
</script>

<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field label="Nome" />

    <base-text-field label="Email" />

    <base-text-field label="Oggetto" />

    <base-textarea
      class="mb-6"
      label="Le tue necessità"
    />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      href="mailto:help.faiilbuono@gmail.com"
      outlined
      target="_blank"
    >
      Invia Messaggio
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseContactForm',

    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'Inviaci una mail',
      },
    },
  }
</script>

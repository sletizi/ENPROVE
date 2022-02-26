<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'SignUp',

    metaInfo: { title: 'SignUp' },

    extends: View,

    mixins: [
      LoadSections([
        'sign-up',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'signup',
      },
    },
  }
</script>

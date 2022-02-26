<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Login',

    metaInfo: { title: 'Login' },

    extends: View,

    mixins: [
      LoadSections([
        'log_in',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'business_login',
      },
    },
  }
</script>

<script>
  import View from '@/views/View'

  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'SignUpOrLog',

    metaInfo: { title: 'SignUpOrLog' },

    extends: View,

    mixins: [
      LoadSections([
        'sign-up-or-log',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'business_sigunp_or_log',
      },
    },
  }
</script>

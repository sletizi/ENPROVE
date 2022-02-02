<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'FAQ',

    metaInfo: { title: 'FAQ' },

    extends: View,

    mixins: [
      LoadSections([
        
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'faq',
      },
    },
  }
</script>

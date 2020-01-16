<template>
  <div>
    <v-header />
    <toolbar v-if="signedIn"/>
  </div>
</template>

<script>
  import header from '@/presentation/Header'
  import toolbar from '@/container/ToolbarContainer'
  import { mapGetters } from 'vuex'

  export default {
    name: 'HeaderView',
    components: {
      'v-header': header,
      'toolbar': toolbar
    },
    computed: {
        ...mapGetters(['signedIn'])
    }
  }
</script>

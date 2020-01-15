<template>
  <div>
    <header/>
    <toolbar />
  </div>
</template>

<script>
  import header from '@/presentation/Header'
  import toolbar from '@/presentation/Toolbar'

  export default {
    name: 'HeaderView',
    components: {
      'header': header,
      'toolbar': toolbar
    }
  }
</script>

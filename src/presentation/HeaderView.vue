<template>
  <div id="container-header">
    <v-header />
    <v-navbar />
  </div>
</template>

<script>
  import header from '@/presentation/Header'
  import navbar from '@/container/NavBarContainer'

  export default {
    name: 'HeaderView',
    components: {
      'v-header': header,
      'v-navbar': navbar
    }
  }
</script>

<style scoped>

#container-header {
      width: 100%;
      background-color: #1e272e;
      display: flex;
      flex-direction: column;
  }

</style>

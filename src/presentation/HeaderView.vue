<template>
  <div 
    id="container-header"
  >
    <v-header />
    <div 
      class="navbar-container"
    >
      <v-navbar />
    </div>
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

.navbar-container{
  position:absolute;
  right: 0px;
  display: flex;
  flex-direction: row;
}
#container-header {
      width: 100%;
      height:100px;
      background-color: #1e272e;
      display: flex;
      flex-direction: row;
}

</style>

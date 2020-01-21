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
  display: flex;
  flex-direction: row;
}

#container-header {
      width: 100%;
      height: 100px;
      background-color: #1e272e;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
}

@media screen and (max-width: 850px) {
    #container-header {
      flex-direction: column;
      height: auto;
      overflow: hidden;
    }

    .navbar-container{
       display: flex;
       flex-direction: row;
       background-color: #1e272e;
       justify-content: flex-end;
    }
}

</style>

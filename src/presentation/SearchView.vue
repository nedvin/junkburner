<template>
  <div>
    <overview/>
    <searchContainer />
  </div>
</template>

<script>
  import Overview from '@/container/MealContainer'
  import SearchContainer from '@/container/SearchContainer'

  export default {
    name: 'SearchView',
    components: {
      'overview': Overview,
      'searchContainer': SearchContainer
    }
  }
</script>

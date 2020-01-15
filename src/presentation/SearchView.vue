<template>
  <div>
    <overview/>
    <searchContainer />
  </div>
</template>

<script>
  import Overview from '@/presentation/MealOverview'
  import SearchContainer from '@/container/SearchContainer'

  export default {
    name: 'SearchView',
    components: {
      'overview': Overview,
      'searchContainer': SearchContainer
    }
  }
</script>

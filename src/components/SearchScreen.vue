<template>
  <div>
    <overview/>
    <searchComponent />
  </div>
</template>

<script>
  import Overview from '@/components/MealOverview'
  import SearchComponent from '@/components/SearchComponent'

  export default {
    name: 'SearchScreen',
    components: {
      'overview': Overview,
      'searchComponent': SearchComponent
    }
  }
</script>

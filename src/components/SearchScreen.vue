<template>
  <div>
    <overview/>
    <search />
  </div>
</template>

<script>
  import Overview from '@/components/MealOverview'
  import Search from '@/components/Search'

  export default {
    name: 'SearchScreen',
    components: {
      'overview': Overview,
      'search': Search
    }
  }
</script>

<template>
  <div>
    <sidebar/>
    <search />
  </div>
</template>

<script>
  import OverView from '@/components/MealOverview'
  import Search from '@/components/Search'

  export default {
    components: {
      'overview': Overview,
      'search': Search
    }
  }
</script>

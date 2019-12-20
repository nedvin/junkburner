<template>
  <div>
    <sidebar/>
    <search />
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Search from '@/components/Search'

  export default {
    components: {
      'sidebar': Sidebar,
      'search': Search
    }
  }
</script>

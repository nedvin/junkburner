<template>
  <div>
    <sidebar />
    <dish />
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Dish from '@/components/Dish'

  export default {
    components: {
      'sidebar': Sidebar,
      'dish': Dish
    }
  }
</script>

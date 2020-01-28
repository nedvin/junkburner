<template>
  <div>
    <overview/>
    <v-workout-container />
  </div>
</template>

<script>
  import Overview from '@/presentation/MealOverview'
  import workoutContainer from '@/container/WorkoutContainer'

  export default {
    name: 'WorkoutView',
    components: {
      'overview': Overview,
      'v-workout-container': workoutContainer
    }
  }
</script>
<template>
  <div>
    <overview/>
    <v-workout-container />
  </div>
</template>

<script>
  import Overview from '@/container/MealContainer';
  import workoutcontainer from '@/container/WorkoutContainer';
  import {mapGetters} from "vuex";

  export default {
    name: 'WorkoutView',
    components: {
      'overview': Overview,
      'v-workout-container': workoutcontainer
    },
    computed: {
      ...mapGetters(["totalExercise"])
    }
  }
</script>


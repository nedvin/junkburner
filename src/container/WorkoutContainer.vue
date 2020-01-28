<template>
       <v-workout/>
</template>

<script>
import Workout from "@/presentation/Workout"

export default {
    name: 'WorkoutContainer',
    components: {
        "v-workout": Workout
    }
}
</script>
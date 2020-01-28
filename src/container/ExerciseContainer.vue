<template>
    <div>
        <v-exercise 
            v-if="this.lessThen350Kcal(this.totalKcal)"
            workoutType="Exercise"
            :exerciseName="this.totalExercise.workout.warmup.name"
            :exerciseTime="this.totalExercise.workout.warmup.tid"
        />
        <v-exercise 
            v-if="!this.lessThen350Kcal(this.totalKcal)"
            workoutType="Warmup"
            :exerciseName="this.totalExercise.workout.warmup.name"
            :exerciseTime="this.totalExercise.workout.warmup.tid"
        />
        <v-exercise 
            v-if="!this.lessThen350Kcal(this.totalKcal)"
            workoutType="Workout"
            :exerciseName="this.totalExercise.workout.workout.name"
            :exerciseTime="this.totalExercise.workout.workout.tid"
        />
    </div>
</template>

<script>
import Exercise from "@/presentation/Exercise"
import {mapGetters} from "vuex";

export default {
    name: 'ExerciseContainer',
    components: {
        "v-exercise": Exercise
    },
    methods: {
        lessThen350Kcal(kcalAmount){
            return kcalAmount < 350;
        }
    },
    computed: {
        ...mapGetters(["totalExercise", "totalKcal"])
    },
    props: [
        "type"
    ]
}
</script>
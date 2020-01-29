<template>
    <v-workout @punishUser="generateWorkout"/>
</template>

<script>
import workout from "@/presentation/Workout"
import {mapGetters, mapActions} from "vuex";

export default {
    name: 'WorkoutContainer',
    components: {
        "v-workout": workout
    },
    methods: {
        lessThen350Kcal(kcalAmount){
            return kcalAmount < 350;
        },
        ...mapActions([
            "generateWorkoutSession"
        ]),
        generateWorkout(){
            this.generateWorkoutSession({kcal: this.totalKcal, userId: this.userId});
        }
    },
    computed: {
        ...mapGetters([
            "totalExercise", 
            "totalKcal",
            'userId'
        ])
    },
    props: [
        "type"
    ]
}
</script>
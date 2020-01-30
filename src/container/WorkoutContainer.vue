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
        ...mapActions([
            "generateWorkoutSession"
        ]),
        generateWorkout(){
            this.generateWorkoutSession({
                kcal: this.totalKcal, 
                userId: this.userId
            });
        }
    },
    computed: {
        ...mapGetters([
            "totalKcal",
            'userId'
        ])
    }
}
</script>
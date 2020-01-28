<template>
    <meal-overview @punishMe="generateWorkout"/>
</template>

<script>
import mealOverview from "@/presentation/MealOverview"
import {mapActions, mapGetters} from "vuex";
export default {
    components: {
        "meal-overview" : mealOverview
    },
    computed : {
        ...mapGetters([
            "totalKcal"
        ])
    },
    methods: {
        ...mapActions([
            "generateWorkoutSession"
        ]),
        generateWorkout(){
            this.generateWorkoutSession(this.totalKcal);
            this.$router.push('Workout');
        }
    }


}
</script>


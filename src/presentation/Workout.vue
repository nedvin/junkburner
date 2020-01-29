<template>
    <div id="workout-container">
        <div class="box-80">
            <h1>Calculated training</h1>
        </div>
        <div v-if="!signedIn" class="sign-in-message">
            You need to sign in to be able to use the training generator!
        </div>
        <div class="exercises-container" v-if="signedIn">
            <v-exercise-container />
        </div>
        <div class="box-80 centered" v-if="signedIn">
            <span>
                {{
                    "Perform for " +
                        totalExercise.sessions +
                        "x session(s) spending a total of " +
                        totalExercise.totalTime.hours +
                        " hours and " +
                        totalExercise.totalTime.minutes +
                        " minutes for a total of " +
                        totalExercise.totalKcal +
                        " amount of kcal burned."
                }}
            </span>
        </div>
        <div class="box-80 centered" v-if="signedIn">
            <button class="btn btn-abort" @click="punishUser">
                Different punishment please
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import exercisecontainer from "@/container/ExerciseContainer";
export default {
    name: "WorkoutView",
    components: {
        "v-exercise-container": exercisecontainer
    },
    computed: {
        ...mapGetters([
            "totalExercise", 
            "signedIn"])
    },
    methods: {
        punishUser() {
            this.$emit("punishUser");
        },

    }
};
</script>

<style scoped>
.sign-in-message {
    margin-top: 20px;
    font-size: 1.2em;
}

#workout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.centered {
    display: flex;
    justify-content: center;
}

.box-80 {
    width: 80%;
}

.exercises-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
}
</style>

<template>
    <div class="exercise-container">
        <div class="exercise-header">
            <h1>{{this.workoutType}}</h1>
        </div>
        <div class="exercise-name">
            <p>{{this.exerciseName}}</p>
        </div>
        <div class="exercise-time">
            <p>{{this.exerciseTime + " min"}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Workout",
    data() {
        return {};
    },
    methods: {},
    computed: {},
    props: [
        "workoutType",
        "exerciseName",
        "exerciseTime"
    ]
};
</script>

<style scoped>
    .exercise-container{
        width: 200px;
        display: inline-block;
    
    }
</style>

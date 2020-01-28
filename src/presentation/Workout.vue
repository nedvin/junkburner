<template>
    <div id="workout-container">
        <div class="box-80">
            <h1>Calculated training</h1>
        </div>
        <div class="exercise-div">
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="box-80 centered">
            <button class="btn btn-abort">Punish me</button>
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
    computed: {}
};
</script>

<style scoped>
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
</style>

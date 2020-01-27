/**************  STATE ***************************/
import workoutInfo from '@/data/modules/exerciseInfo';
const state = {
    workout : {},
    totalKcal: 0,
    totalTime: {
        minuter : 0,
        timmar : 0
    },
    sessions : 0,
    workoutTemplates: [
        {warmup: workoutInfo.exercises[1], workout: workoutInfo.exercises[0]},
        {warmup: workoutInfo.exercises[2], workout: workoutInfo.exercises[7]},
        {warmup: workoutInfo.exercises[2], workout: workoutInfo.exercises[8]},
        {warmup: workoutInfo.exercises[2], workout: workoutInfo.exercises[9]},
        {warmup: workoutInfo.exercises[3], workout: workoutInfo.exercises[0]},
        {warmup: workoutInfo.exercises[4], workout: workoutInfo.exercises[5]},
        {warmup: workoutInfo.exercises[4], workout: workoutInfo.exercises[6]},
        {warmup: workoutInfo.exercises[4], workout: workoutInfo.exercises[8]},
        {warmup: workoutInfo.exercises[4], workout: workoutInfo.exercises[10]},
        {warmup: workoutInfo.exercises[4], workout: workoutInfo.exercises[11]}
    ]
};

/**************  GETTERS ***************************/
const getters = {
    exercises : state => state.exercises,
    totalKcal: state => state.totalKcal,
    totalTime: state => state.totalTime,
    sessions: state => state.sessions,
    totalExercise: state => JSON.parse(JSON.stringify(state))
};

/**************  ACTIONS ***************************/


const actions = {
    generateWorkoutSession({commit}, kcal){
        let seed = Math.floor(Math.random() * 10);
        let workout = state.workoutTemplates[seed];
        console.log(workout);

    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    storeTotalExercise(state, totalExercise){
        state.exercises = totalExercise.exercises;
        state.totalKcal = totalExercise.totalKcal;
        state.totalTime = totalExercise.totalTime;
        state.sessions = totalExercise.sessions;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
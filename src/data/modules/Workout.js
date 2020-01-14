/**************  STATE ***************************/

const state = {
    exercises : [],
    totalKcal: 0,
    totalTime: {
        minuter : 0,
        timmar : 0
    },
    sessions : 0
};

/**************  GETTERS ***************************/
const getters = {
    exercises : state => state.exercises,
    totalKcal: state => state.totalKcal,
    totalTime: state => state.totalTime,
    sessions: state => state.sessions,
    totalExercise: state => state.slice()
};

/**************  ACTIONS ***************************/

const actions = {
    generateSession({commit}, kcal){
        seed1 = Math.floor(Math.random() * 10);
        seed2 = Math.floor(Math.random() * 10);
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
/**************  STATE ***************************/

const state = {
    exercises : [],
    totalKcal: 0,
    totalTime: {
        minutes : 0,
        hours : 0
    },
    sessions : 0
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
    generateSession({commit}, kcal){
        seed1 = Math.floor(Math.random() * 10);
        seed2 = Math.floor(Math.random() * 10);
        if(seed1){
            
        }
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    storeTotalExercise(state, totalExercise){
        state.exercises = totalExercise.exercises;
        state.totalKcal = totalExercise.totalKcal;
        state.totalTime = totalExercise.totalTime;
        state.sessions = totalExercise.sessions;
    },

    clearWorkoutState(state) {
        state.exercises = [],
        state.totalKcal = 0,
        state.totalTime = {
            minutes: 0,
            hours: 0
        },
        state.sessions = 0
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
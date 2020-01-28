/**************  LOCAL FUNCTIONS ***************************/
import workoutInfo from '@/data/modules/exerciseInfo';
const workoutTemplates = [
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
];


/**************  STATE ***************************/

const state = {
    workout : {},
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
    generateWorkoutSession({commit}, kcal){
        let workoutSession = {
            workout : {},
            totalKcal: 0,
            totalTime: {
                minutes : 0,
                hours : 0
            },
            sessions : 1
        };
        let seed = Math.floor(Math.random() * 10);
        workoutSession.workout = workoutTemplates[seed];
        let totalTimeInMin = 0;
        if(kcal > 1000){
            workoutSession.sessions = Math.ceil(kcal/1000);
            kcal = kcal / workoutSession.sessions;
        }
        if(kcal < 350){
            let workoutTid = kcal / workoutSession.workout.warmup.kcalPerMin;
            workoutSession.workout.warmup.tid = Math.ceil(workoutTid);
            workoutSession.workout.workout.tid = 0;
        }
        else{
            workoutSession.workout.warmup.tid = 15;
            kcal -= workoutSession.workout.warmup.tid * workoutSession.workout.warmup.kcalPerMin;
            workoutSession.workout.workout.tid = Math.ceil(kcal / workoutSession.workout.workout.kcalPerMin);  
        }
        
        totalTimeInMin = (workoutSession.workout.workout.tid + workoutSession.workout.warmup.tid) * workoutSession.sessions;
        workoutSession.totalTime.hours = Math.floor(totalTimeInMin / 60);
        workoutSession.totalTime.minutes = totalTimeInMin % 60;
        
        workoutSession.totalKcal = workoutSession.workout.warmup.kcalPerMin*workoutSession.workout.warmup.tid;
        workoutSession.totalKcal += workoutSession.workout.workout.kcalPerMin*workoutSession.workout.workout.tid;
        workoutSession.totalKcal = Math.round(workoutSession.sessions*workoutSession.totalKcal);
        commit('storeTotalExercise', workoutSession)
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    storeTotalExercise(state, totalExercise){
        state.workout = totalExercise.workout;
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
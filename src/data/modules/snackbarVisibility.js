/**************  STATE ***************************/

const state = {
    alertVisibility: false,
    successVisibility: false,
    snackbarMessage: ''
};

/**************  GETTERS ***************************/
const getters = {
    alertVisibility: state => state.alertVisibility,
    successVisibility: state => state.successVisibility,
    snackbarMessage: state => state.snackbarMessage
};

/**************  ACTIONS ***************************/

const actions = {
    setAlertVisible({commit}){
        commit('setAlertVisible');
    },
    setAlertNotVisible({commit}){
        commit('setAlertNotVisible');
    },
    setSuccessVisible({commit}){
        commit('setSuccessVisible');
    },
    setSuccessNotVisible({commit}){
        commit('setSuccessNotVisible');
    },
    setSnackbarMessage({commit}, msg) {
        commit('setSnackbarMessage', msg)
    }
};

/**************  MUTATIONS ***************************/
const mutations = {
    setAlertVisible(state){
        state.alertVisibility = true;
    },
    setAlertNotVisible(state){
        state.alertVisibility = false;
    },
    setSuccessVisible(state){
        state.successVisibility = true;
    },
    setSuccessNotVisible(state){
        state.successVisibility = false;
    },
    setSnackbarMessage(state, msg) {
        state.snackbarMessage = msg;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
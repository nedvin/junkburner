/**************  STATE ***************************/

const state = {
    loginVisibility: false,
    signUpVisibility: false
};

/**************  GETTERS ***************************/
const getters = {
    loginVisibility : state => state.loginVisibility,
    signUpVisibility : state => state.signUpVisibility
};

/**************  ACTIONS ***************************/

const actions = {
    setLoginVisible({commit}){
        commit('setLoginVisible');
    },
    setLoginNotVisible({commit}){
        commit('setLoginNotVisible');
    },
    toggleLoginVisible({commit}){
        commit('toggleLoginVisible');
    },
    setSignUpVisible({commit}){
        commit('setSignUpVisible');
    },
    setSignUpNotVisible({commit}){
        commit('setSignUpNotVisible');
    },
    toggleSignUpVisible({commit}){
        commit('toggleSignUpVisible');
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    setLoginVisible(state){
        state.loginVisibility = true;
    },
    setLoginNotVisible(state){
        state.loginVisibility = false;
    },
    toggleLoginVisible(state){
        state.loginVisibility = !state.loginVisibility;
    },
    setSignUpVisible(state){
        state.signUpVisibility = true;
    },
    setSignUpNotVisible(state){
        state.SignUpVisibility = false;
    },
    toggleSignUpVisible(state){
        state.signUpVisibility = !state.signUpVisibility;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
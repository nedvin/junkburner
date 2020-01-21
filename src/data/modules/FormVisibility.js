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
        if(!state.signUpVisibility){
            state.loginVisibility = true;
        } 
    },
    setLoginNotVisible(state){
        state.loginVisibility = false;
    },
    toggleLoginVisible(state){
        if(state.signUpVisibility && !state.loginVisibility){
            state.signUpVisibility = false;
        }
        state.loginVisibility = !state.loginVisibility;
    },
    setSignUpVisible(state){
        if(!state.loginVisibility){
            state.signUpVisibility = true;
        }
    },
    setSignUpNotVisible(state){
        state.signUpVisibility = false;
    },
    toggleSignUpVisible(state){
        if(!state.signUpVisibility && state.loginVisibility){
            state.loginVisibility = false;
        }
        state.signUpVisibility = !state.signUpVisibility;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
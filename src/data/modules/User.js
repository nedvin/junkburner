/**************  STATE ***************************/

const state = {
    age : 0,
    length : 0,
    weight : 0,
    kcalRdi : 0,
    userId : "",
    gender : ""
};

/**************  GETTERS ***************************/
const getters = {
    age : state => state.age,
    length : state => state.length,
    weight : state => state.weight,
    kcalRdi : state => state.kcalRdi,
    userId : state => state.userId,
    gender : state => state.gender
};

/**************  ACTIONS ***************************/

const actions = {
    loadUser({commit}, user){
        commit("loadUser", user);
        commit("calculateKcalRdi");
    },
    setAge({commit}, age){
        commit("setAge", age);
        commit("calculateKcalRdi");
    },
    setLength({commit}, length){
        commit("setLength", length);
        commit("calculateKcalRdi");
    },
    setWeight({commit}, weight){
        commit("setWeight", weight);
        commit("calculateKcalRdi");
    },
    setGender({commit}, gender){
        commit("setGender", gender);
        commit("calculateKcalRdi");
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    loadUser(state, user){
        state.age = user.age;
        state.length = user.length;
        state.weight = user.weight;
        state.userId = user.userId;
        state.gender = user.gender;
    },
    setAge(state, age){
        state.age = age;
    },
    setLength(state, length){
        state.length = length;
    },
    setWeight(state, weight){
        state.weight = weight;
    },
    setGender(state, gender){
        state.gender = gender;
    },
    calculateKcalRdi(state){ // Revised Harris-Benedict Equation
        if(state.gender === "F"){
            state.kcalRdi = Math.round(88.362 + 13.397*state.weight + 4.799*state.length - 5.677*state.age);
        }
        else{
            state.kcalRdi = Math.round(447.593 + 9.247*state.weight + 3.098*state.length - 4.33*state.age);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
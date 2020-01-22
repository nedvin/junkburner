/**************  STATE ***************************/

const state = {
    currentMeal : [],
    totalKcal : 0,
    totalFat : 0,
    totalCarb : 0,
    totalProt : 0,

};

/**************  GETTERS ***************************/
const getters = {
    currentMeal : state => state.currentMeal,
    totalKcal : state => state.totalKcal,
    totalFat : state => state.totalFat,
    totalCarb : state => state.totalCarb,
    totalProt : state => state.totalProt,

};

/**************  ACTIONS ***************************/

const actions = {
    addDish({commit}, dish){
        commit("addDish", dish);
        commit("addNutrition", dish);
    },

    removeDish({commit}, dish){ // Styr upp om denna ska ta ett index eller ngt.
        commit("removeDish", dish.id);
        commit("removeNutrition", dish)
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    addDish(state, dish){
        state.currentMeal.push(dish);
    },

    removeDish(state, dishId){
        state.currentMeal = state.currentMeal.filter(dish => dish.id !== dishId);
    },

    addNutrition(state, dish){
        state.totalKcal += dish.kcal;
        state.totalFat += dish.fat;
        state.totalCarb += dish.carbs;
        state.totalProt += dish.protein;
    },

    removeNutrition(state, dish){
        state.totalKcal -= dish.kcal;
        state.totalFat -= dish.fat;
        state.totalCarb -= dish.carbs;
        state.totalProt -= dish.protein;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
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
    },

    removeDish({commit}, dish){
        commit("removeDish", dish["nix_item_id"]);
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    addDish(state, dish){
        state.currentMeal.append(dish);
    },

    removeDish(state, dishId){
        state.currentMeal = state.currentMeal.filter(dish => dish["nix_item_id"] !== dishId);
    },

    addNutrition(state, dish){
        state.totalKcal += dish.nf_calories;
        state.totalFat += dish.nf_total_fat;
        state.totalCarb += dish.nf_total_carbohydrate;
        state.totalProt += dish.nf_total_protein;
    },

    removeNutrition(state, dish){

    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
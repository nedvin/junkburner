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
    addDish({commit, dispatch}, dish){
        let dishInMeal = state.currentMeal.find(dishInMeal => dishInMeal.id === dish.id);
        if(!dishInMeal){
            commit("addDish", dish);
            commit("addNutrition", dish);
        }
        else{
            dispatch('setAmount', {id: dish.id, amount: (dishInMeal.amount + 1)})
        }
    },

    removeDish({commit}, dish){ 
        commit("removeDish", dish.id);
        commit("removeNutrition", dish);
    },

    setAmount({commit, dispatch}, payload) {
        let dishToChange = state.currentMeal.find(dish => payload.id === dish.id);
        let newAmount = payload.amount;
        if(dishToChange.amount > newAmount){
            dispatch('removeNutritionWithAmount', {dish: dishToChange, amount: (dishToChange.amount - newAmount)});
        }
        else{
            dispatch('addNutritionWithAmount', {dish: dishToChange, amount: (newAmount - dishToChange.amount)});
        }
        commit('setAmount', {dish: dishToChange, amount: newAmount});
    },

    removeNutritionWithAmount({commit}, payload){
        for(let i=0; i < payload.amount; i++){
            commit('removeNutrition', payload.dish);
        }
    },
    
    addNutritionWithAmount({commit}, payload){
        for(let i=0; i < payload.amount; i++){
            commit('addNutrition', payload.dish);
        }
    },

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
    },

    setAmount(state, payload) {
        payload.dish.amount = payload.amount;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
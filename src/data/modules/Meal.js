/**************  STATE ***************************/

const state = {
    currentMeal : [],
    totalKcal : 0,
    totalFat : 0,
    totalCarb : 0,
    totalProt : 0
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
import {db} from "@/main";

const actions = {
    initMealState({commit}, user) {
        let userRef = db.collection('users').doc(user.uid);
        userRef.get().then(doc => {
            if(doc.exists) {
                return {
                        currentMeal: doc.data().mealState.currentMeal,
                        totalKcal: doc.data().mealState.totalKcal,
                        totalFat: doc.data().mealState.totalFat,
                        totalCarb: doc.data().mealState.totalCarb,
                        totalProt: doc.data().mealState.totalProt,
                    }
            }
        }).then(mealState => {
            commit('initMealStateFirebase', mealState);
            }
        )
    },
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

    setAmount({commit}, payload) {
        let dishToChange = state.currentMeal.find(dish => payload.id === dish.id);
        let newAmount = payload.amount;
        commit('removeNutrition', dishToChange);
        commit('setAmount', {dish: dishToChange, amount: newAmount});
        commit('addNutrition', dishToChange)
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    initMealStateFirebase(state, mealState) {
        state.currentMeal = mealState.currentMeal,
        state.totalKcal = mealState.totalKcal,
        state.totalCarb = mealState.totalCarb,
        state.totalFat = mealState.totalFat,
        state.totalProt = mealState.totalProt
    },
    addDish(state, dish){
        state.currentMeal.push(dish);  
    },

    removeDish(state, dishId){
        state.currentMeal = state.currentMeal.filter(dish => dish.id !== dishId);
    },

    addNutrition(state, dish){
        state.totalKcal += Math.round(dish.kcal * dish.amount);
        state.totalFat += Math.round(dish.fat * dish.amount);
        state.totalCarb += Math.round(dish.carbs * dish.amount);
        state.totalProt += Math.round(dish.protein * dish.amount);
    },

    removeNutrition(state, dish){
        state.totalKcal -= Math.round(dish.kcal * dish.amount);
        state.totalFat -= Math.round(dish.fat * dish.amount);
        state.totalCarb -= Math.round(dish.carbs * dish.amount);
        state.totalProt -= Math.round(dish.protein * dish.amount);
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
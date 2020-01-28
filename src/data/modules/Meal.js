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
    addDish({commit, dispatch}, payload){
        let dishInMeal = state.currentMeal.find(dishInMeal => dishInMeal.id === payload.dish.id);
        if(!dishInMeal){
            commit("addDish", payload.dish);
            commit("addNutrition", payload.dish);
        }
        else{
            dispatch('setAmount', {id: payload.dish.id, amount: (dishInMeal.amount + 1)})
        }
        dispatch('updateMealStateFirebase', payload.userId);
    },

    removeDish({commit, dispatch}, payload){ 
        commit("removeDish", payload.dish.id);
        commit("removeNutrition", payload.dish);
        dispatch('updateMealStateFirebase', payload.userId)
    },

    setAmount({commit, dispatch}, payload) {
        let dishToChange = state.currentMeal.find(dish => payload.id === dish.id);
        let newAmount = payload.amount;
        commit('removeNutrition', dishToChange);
        commit('setAmount', {dish: dishToChange, amount: newAmount});
        commit('addNutrition', dishToChange)
        dispatch('updateMealStateFirebase', payload.userId)
    },

    updateMealStateFirebase({commit}, userId) {
        db.collection('users').doc(userId).update({
            mealState: {
                currentMeal: state.currentMeal,
                totalCarb: state.totalCarb,
                totalFat: state.totalFat,
                totalKcal: state.totalKcal,
                totalProt: state.totalProt
            }
        });
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
    },

    clearMealState(state) {
        state.currentMeal = [];
        state.totalKcal = 0,
        state.totalFat = 0,
        state.totalCarb = 0,
        state.totalProt = 0
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
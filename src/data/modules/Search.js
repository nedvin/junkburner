/**************  LOCAL FUNCTIONS ***************************/

import apiInfo from "./apiConfig";

const apiHeaderTemplate = new Headers({
    "x-app-id": apiInfo["x-app-id"],
    "x-app-key" : apiInfo["x-app-key"],
    "x-remote-user-id" : apiInfo["x-remote-user-id"]
});

//Based on Christian Bogdans course material.
const handleHTTPError = (response)  => {
    if(response.ok){
      return response;
    }
    else if(response.status === 503){
      throw Error("Nutritionix service temporarily unavailable. Please try again in a moment.")
    }
    throw Error(response.statusText);
}

/**************  STATE ***************************/
const state = {
    searchResult : [],
    searchQuery : "",
    restaurant: "",
    selectedDish : {},
    dishDetails : {},
    apiNutrientData: []
};

/**************  GETTERS ***************************/
const getters = {
    searchResult : state => state.searchResult,
    searchQuery : state => state.searchQuery,
    selectedDish : state => state.selectedDish,
    dishDetails : state => state.dishDetails,
    restaurant : state => state.restaurant,
    apiNutrientData : state => state.apiNutrientData
};

/**************  ACTIONS ***************************/

const actions = {

    newSearch({commit}){
        let url = "https://trackapi.nutritionix.com/v2/search/instant";
        let apiHeader = new Headers(apiHeaderTemplate);
        apiHeader.append("Content-Type", "application/json");
        let apiBody = JSON.stringify({
            "query" : state.restaurant + " " + state.searchQuery,
            "detailed": true
        })
        return fetch(url, {
            method : "POST",
            headers : apiHeader,
            body : apiBody
        }).then(handleHTTPError)
        .then(response => response.json())
        .then(response => commit("newSearchResult", response["branded"]));
    },

    newQuery({commit}, query){
        commit("changeQuery", query);
    },

    selectDish({commit}, index){     // TODO: Styr upp vilken slags parameter denna ska ta. Ett index? En rätt? Index just nu placeholder.
        let dish = state.searchResult[index];
        commit("newSelectedDish", dish);
    },

    newSearchDetails({commit}){
        let url = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=";
        url = url + state.selectedDish["nix_item_id"];
        let apiHeader = new Headers(apiHeaderTemplate);
        apiHeader.append("Content-Type", "application/x-www-form-urlencoded");
        return fetch(url, {
                method : "GET",
                headers : apiHeader
            }).then(handleHTTPError)
            .then(response => response.json())
            .then(response => commit("newDishDetails", response.foods[0]));

    },

    selectRestaurant({commit}, restaurant) {
        commit("changeQuery", "")
        commit('newSearchResult', [])
        commit("selectRestaurant", restaurant)
    },

    changeQuery({commit}, query) {
        commit("changeQuery", query)
    },

    INIT_SEARCH({commit}){
        let url = "https://trackapi.nutritionix.com/v2/utils/nutrients";
        return fetch(url)
            .then(handleHTTPError)
            .then(response => response.json())
            .then(response => response.filter(
                element => element.api_name === "nf_protein" || element.api_name === "nf_total_fat" || element.api_name === "nf_total_carbohydrate" || element.api_name === "nf_calories"
            )).then(response => commit("addApiData", response));
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    changeQuery(state, query){
        state.searchQuery = query;
    },

    newSearchResult(state, result){
        result = result.map(dish => {
            dish.full_nutrients.forEach(dishNutrient => {
                state.apiNutrientData.forEach(nutrient => {
                    if(dishNutrient.attr_id === nutrient.attr_id){
                        dishNutrient.name = nutrient.api_name;
                    }
                })
            });
            return dish;
        });
        state.searchResult = result;
    },

    newSelectedDish(state, dish){
        state.selectedDish = dish;
    },

    newDishDetails(state, dish){
        state.dishDetails = dish;
    },

    selectRestaurant(state, restaurant) {
        state.restaurant = restaurant;
    },

    addApiData(state, data){
        state.apiNutrientData = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
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
    dishDetails : {}
};

/**************  GETTERS ***************************/
const getters = {
    searchResult : state => state.searchResult,
    searchQuery : state => state.searchQuery,
    selectedDish : state => state.selectedDish,
    dishDetails : state => state.dishDetails,
    restaurant : state => state.restaurant
};

/**************  ACTIONS ***************************/

const actions = {

    newSearch({commit}){
        let url = "https://trackapi.nutritionix.com/v2/search/instant";
        let apiHeader = new Headers(apiHeaderTemplate);
        apiHeader.append("Content-Type", "application/json");
        let apiBody = JSON.stringify({
            "query" : state.searchQuery
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
        commit("selectRestaurant", restaurant)
    }

};

/**************  MUTATIONS ***************************/
const mutations = {
    changeQuery(state, query){
        state.searchQuery = query;
    },

    newSearchResult(state, result){
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
    }

};

export default {
    state,
    getters,
    actions,
    mutations
}
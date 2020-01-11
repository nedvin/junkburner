/**************  STATE ***************************/

const state = {
    searchResult : [],
    searchQuery : ""
};

/**************  GETTERS ***************************/
const getters = {
    searchResults : state => state.searchResults,
    searchQuery : state => state.searchQuery
};

/**************  ACTIONS ***************************/
import apiInfo from "./apiConfig";
const actions = {
    newSearch({commit}){
        let url = "https://trackapi.nutritionix.com/v2/search/instant";
        let apiHeader = new Headers({
            "x-app-id": apiInfo["x-app-id"],
            "x-app-key" : apiInfo["x-app-key"],
            "x-remote-user-id" : apiInfo["x-remote-user-id"],
            "Content-Type" : "application/json"
        });

        let apiBody = JSON.stringify({
            "query" : state.searchQuery
        })

        fetch(url, {
            method : "POST",
            headers : apiHeader,
            body : apiBody
        }).then(response => response.json())    //TODO: HTTP felhantering
        .then(response => commit("newSearchResult", response["branded"]));
    },

    newQuery({commit}, query){
        commit("changeQuery", query);
    },

};

/**************  MUTATIONS ***************************/
const mutations = {
    changeQuery(state, query){
        state.searchQuery = query;
    },

    newSearchResult(state, result){
        state.searchResult = result;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
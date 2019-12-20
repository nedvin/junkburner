
/**************  STATE ***************************/

const state = {
    searchResults : [],
    currentDish : [{}],
    searchQuery :  "",
    searchType :  ""
};

/**************  GETTERS ***************************/
const getters = {
    searchResults : state => state.searchResults,
    currentDish : state => state.currentDish,
    searchQuery : state => state.searchQuery,
    searchType : state => state.searchType
};

/**************  ACTIONS ***************************/
import restInfo from "../apiconfig.js"
const actions = {

    newQuery({commit}, query){
        commit("changeQuery", query);
    },

    newType({commit}, type){
        commit("changeType", type);
    },

    getAllDishes({commit}){

        let query = state.searchQuery;
        let type = state.searchType;
        let fetchUrl = restInfo.ENDPOINT + "recipes/search";
        if(type != undefined){
            fetchUrl = fetchUrl + `?type=${type}`;
            if(query != undefined){
                fetchUrl = fetchUrl + `&query=${query}`;
            }
        }
        
        return fetch(fetchUrl, {
            headers : {
              'X-Mashape-Key' : restInfo.API_KEY
            }
          }).then(this.handleHTTPError)
            .then(response => response.json())
            .then(response => {
                commit('newSearchDone', response.results)
            })
            .catch((error) => console.log(error));
    },

    getDish({commit}, id) {
        let fetchUrl = restInfo.ENDPOINT + `recipes/${id}/information`;
        return fetch(fetchUrl, {
          headers : {
            'X-Mashape-Key' : restInfo.API_KEY
          }
        }).then(this.handleHTTPError)
          .then(response => response.json())
          .then(retrievedDish => {
            commit("newDish", retrievedDish);
          })
          .catch((error) => console.log(error));
      },

      // Initialize state
      INIT_SEARCH({commit}){
        let initialState = ["searchResults", "searchQuery", "searchType", "currentDish"]
        .map(index => JSON.parse(window.localStorage.getItem(index)));
        commit("initializeState_search", initialState);
        
      }
};

/**************  MUTATIONS ***************************/
const mutations = {

    changeQuery(state, query){
        state.searchQuery = query;
        window.localStorage.setItem("searchQuery", JSON.stringify(state.searchQuery));
    },

    changeType(state, type){
        state.searchType = type;
        window.localStorage.setItem("searchType", JSON.stringify(state.searchType));
    },
    
    newSearchDone(state, searchResult){
        state.searchResults = searchResult;
        window.localStorage.setItem("searchResults", JSON.stringify(state.searchResults));
    },

    newDish(state, dish){
        state.currentDish = [dish];
        window.localStorage.setItem("currentDish", JSON.stringify(state.currentDish));
    },

    initializeState_search(state, initialState){

        state.searchResults = (typeof initialState[0] != "undefined") ? initialState[0] : [];
        state.searchQuery = (typeof initialState[1] != "undefined") ? initialState[1] : "";
        state.searchType = (typeof initialState[2] != "undefined") ? initialState[2] : "All";
        state.currentDish = (typeof initialState[3] != "undefined") ? initialState[3] : [{}];
    }
};

//Based on Christian Bogdans course material.
function handleHTTPError(response) {
    if(response.ok){
      return response;
    }
    else if(response.status === 404){
      return response;
    }
    throw Error(response.statusText);
}

export default {
    state,
    getters,
    actions,
    mutations
}
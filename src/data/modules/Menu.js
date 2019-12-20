/******** STATE *************/
const state = {
    menu :  [],
    price : 0,
    guests : 1
};

/******** GETTERS *************/
const getters = {
    menu : state => state.menu,
    price : state => state.price,
    guests : state => state.guests
};

/******** ACTIONS *************/
const actions = {
    addDish({commit}, dish){
        commit("addDish", dish);
    },

    removeDish({commit}, dishId){
        commit("removeDish", dishId);
    },

    changeNumberOfGuests({commit}, guests){
        commit("setNumberOfGuests", guests);
    },

    // Initialize state
    INIT_MENU({commit}){
        let initialState = ["menu", "price", "guests"]
        .map(index => JSON.parse(window.localStorage.getItem(index)));
        commit("initializeState_menu", initialState);
    }
};

/******** MUTATIONS *************/
const mutations = {
    addDish(state, dish){
        state.menu.push(dish);
        window.localStorage.setItem("menu", JSON.stringify(state.menu));
        updatePrice();
    },

    removeDish(state, dishId){

        state.menu = state.menu.filter((menuDish) => menuDish.id != dishId);
        window.localStorage.setItem("menu", JSON.stringify(state.menu));
        updatePrice();
    },

    setNumberOfGuests(state, guests){
        state.guests = guests;
        window.localStorage.setItem("guests", JSON.stringify(state.guests));
        updatePrice();
    },

    initializeState_menu(state, initialState){
        state.menu = (typeof initialState[0] != "undefined") ? initialState[0] : [];
        state.price = (typeof initialState[1] != "undefined") ? initialState[1] : 0;
        state.guests =  (typeof initialState[2] != "undefined") ? initialState[2] : 1;
    }

};

function updatePrice(){
    if(state.menu.length !== 0){
        let sum = 0;
        state.menu.forEach(dish => {sum = sum + dish.pricePerServing});
        state.price = Math.round(state.guests * sum);

    }
    else{
        state.price = 0;
    }
    window.localStorage.setItem("price", JSON.stringify(state.price));
}

export default {
    state,
    getters,
    actions,
    mutations
}

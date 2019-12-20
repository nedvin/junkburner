<template>
    <div id="container-sidebar">
        <div id="collapsible-btn-div">
            <span id="collapsible-header">My dinner</span>
            <span>{{price}}</span>
            <button id="collapsible-btn" @click="toggleVisibility">+</button>
        </div>
        <div id="sideBarView" class="sidebar-ctrl-visibility">
            <h3>My dinner</h3>
            <div id="sidebar-num-people-row">
                <span>People</span>
                <select @change="setGuests" class="value-num-guests" v-bind:value = "guests">
                    <option v-for="number in 19" class="select-element" :key="number" :value= "number">{{ number }}</option>
                </select>
            </div>
            <div id="dishItems-list-top-outer">
                <div id="dishItems-list-top-inner">
                    <span>Dish</span>
                    <span>Cost</span>
                </div>
            </div>
            <div id="sidebar-total-sum">
                <span>{{price}} SEK</span>
            </div>
            <div id="sidebar-dishes-div">
                <div v-for="dish in menu" :key="dish.id">
                    <div class="sidebar-dish-item">
                        <span>
                            <button @click="remDish" class="delete-btn" :id="dish.id">X</button>
                        </span>
                        <span>
                            {{ dish.title }}
                        </span>
                        <span>
                            {{  Math.round(dish.pricePerServing*guests) }}
                        </span>
                    </div>
                </div>
            </div>
            <button @click="$router.push('overview')" id= "confirm-dinner-btn">Confirm dinner</button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  
    computed: {
        ...mapGetters(["menu", "price", "guests"])
    },

    methods: {
        remDish(e){
            this.removeDish(e.target.id);
        },

    ...mapActions(["removeDish", "changeNumberOfGuests"]),

    setGuests(e){
        this.changeNumberOfGuests(e.target.value);
    },

    // TODO: Replace this with something more up Vue standards
    toggleVisibility() {
        let sideBarContent = document.body.querySelector("#sideBarView");

        if(sideBarContent.className === "sidebar-ctrl-visibility") {
            sideBarContent.className = "sidebar-visible";
        }
        else {
            sideBarContent.className = "sidebar-ctrl-visibility";
        }
    },
  }
};
</script>

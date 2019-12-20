<template>
    <div id="container-details">
        <div  v-for="dish in currentDish" :key="dish.name">
            <div id="details-view-top">
                <div id="details-view-overview">
                    <h2>{{dish.title}}</h2>
                    <div id="pic-container">
                        <img v-bind:src= "dish.image"   class="responsive-pic">
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ir
                        ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
                        ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offic
                        ia deserunt mollit anim id est laborum.
                    </p>
                    <button @click="$router.push('search')" id="back-to-search-btn">Back to search</button>
                </div>
                <div id="details-view-ingredients">
                    <div>
                        <h3>Ingredients for: <span id="guests-span-details">{{guests}}</span> guests</h3>
                        <table id="details-view-ingredients-list">
                            <tr>
                                <td id="top-line" colspan="3"><hr></td>
                            </tr>
                            <tr v-for="ingredient in dish.extendedIngredients" :key="ingredient.name">
                                <td class="list-amount">{{  Math.ceil(ingredient.measures.metric.amount*guests) }}</td>
                                <td class="list-unit">{{ ingredient.measures.metric.unitShort }}</td>
                                <td class="list-ingredient">{{ ingredient.name }}</td>
                            </tr>
                            <tr id="bottom-line-row">
                                <td id="bottom-line" colspan="3"><hr></td>
                            </tr>
                            <tr id="details-view-button-row">
                                <td id="details-ingredients-button-cell" colspan="2">
                                    <button @click="addToMenu" id="add-to-dinner-btn">Add to dinner</button>
                                </td>
                                <td class="details-ingredients-price-cell">{{ Math.round(dish.pricePerServing*guests)}} SEK</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div id="details-view-preparation">
                <div>
                    <h2>Preparations</h2>
                    <ul v-if="dish.analyzedInstructions[0]">
                        <li v-for="instruction in dish.analyzedInstructions[0].steps" :key="instruction">
                           {{instruction.step}}
                        </li>
                    </ul>
                    <ul v-else>
                        No instructions available.
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    methods: {

        ...mapActions(["addDish"]),

        addToMenu(e){
            e.preventDefault();
            this.addDish(this.currentDish[0]);
        }
    },
    computed: {
        ...mapGetters(["currentDish", "guests", "price"])
    }
}
</script>

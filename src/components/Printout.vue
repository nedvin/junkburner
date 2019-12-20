<template>
    <div>
        <div id="container-printout">
            <div id="printout-div">
                <div id="printout-top">
                    <h2>My dinner: <span id="guests-span">{{ noOfGuests }}</span> people</h2>
                    <button @click="$router.push('search')" id="overview-back-btn">Go back and edit dinner</button>
                </div>
                <div id="dishes-div">
                    <div class="printout-dish-wrapper" v-for="dish in menu" :key="dish.id">
                        <div class="printout-picture-div">
                            <h2>{{ dish.title }}</h2>
                            <img v-bind:src= "dish.image" class="responsive-pic">
                        </div>
                        <div class="printout-ingredients">
                            <table>
                                <tr v-for="ingredient in dish.extendedIngredients" :key="ingredient.id">
                                    <td class="list-amount">{{  Math.ceil(ingredient.measures.metric.amount*guests) }}</td>
                                    <td class="list-unit">{{ ingredient.measures.metric.unitShort }}</td>
                                    <td class="list-ingredient">{{ ingredient.name }}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="printout-preparations">
                            <ul v-if="dish.analyzedInstructions[0]">
                                <li v-for="instruction in dish.analyzedInstructions[0].steps" :key="instruction">
                                    {{ instruction.step }}
                                </li>
                            </ul>
                            <ul v-else>
                                No instructions available.
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {

    computed: {
        ...mapGetters(["menu", "guests"])
    }
}
</script>

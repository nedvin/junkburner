<template>
    <div>
        <div id="container-overview">
            <div id="overview-div">
                <div id="overview-top">
                    <h2>My dinner: <span id="guests-span">{{ guests }}</span> people</h2>
                    <button @click="$router.push('search')" id="overview-back-btn">Go back and edit dinner</button>
                </div>
                <div id="overview-middle">
                    <div id="overview-dishes-div" v-for="dish in menu" :key="dish.id">

                        <!-- TODO: koppla till modellen -->
                        <div class="dishHolder">
                            <div class="dishHolderPic">
                                <img :src="dish.image" class="responsive-pic">
                            </div>
                            <div class="dishHolderName">
                                {{dish.title}}
                            </div>
                            <div class="dishHolderPrice">{{ Math.round(dish.pricePerServing*guests)}} SEK</div>
                        </div>

                    </div>
                    <div id="overview-price-div">
                        <p>{{ price }} SEK</p>
                    </div>
                </div>
                <div id="overview-bottom">
                    <hr>
                    <button id="print-btn" @click="$router.push('printout')">Print full recipe</button>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {

    computed : {
        ...mapGetters(["menu", "guests", "price"])
    }
}
</script>

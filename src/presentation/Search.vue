<template>
    <div id="search-container">
        <div class="box-80">
            <h1>Create your meal!</h1>
        </div>

        <!-- CHOOSE RESTAURANT -->
        <div class="restaurants-box box-80">
            <h3>Choose restaurant</h3>
            <v-restaurant-btn-container/>
        </div>

        <!-- CHOOSE TYPE OF FOOD -->
        <v-food-options-container/>        

        <!-- SEARCH RESULTS -->
        <div class="search-results-box">
            <v-food-card v-for="result in searchResult" 
                :key="result.nix_item_id"
                :kcal="result.nf_calories"
                :carbs="result.nf_total_carbohydrate"
                :protein="result.nf_protein"
                :fat="result.nf_total_fat"
                :name="result.food_name"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as impIcons from '@/constants/icons';
import foodCard from '@/presentation/FoodCard'
import restaurantButtonContainer from '@/container/RestaurantButtonContainer'
import foodOptionsContainer from '@/container/FoodOptionsContainer'

export default { 
    props : ["searchResult", "dishDetails"],
    components: {
        'v-food-card': foodCard,
        'v-restaurant-btn-container': restaurantButtonContainer,
        'v-food-options-container': foodOptionsContainer
    }
};
</script>

<style scoped>
/******* GENERAL / MAIN *******/
#search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.box-80 {
    width: 80%;
}

.responsive-pic {
    max-width: 100%;
    height: auto;
}

.icon {
    height: 24px;
}

.icon-small {
    height: 16px;
}

/****** CHOOSE RESTAURANT *******/
.restaurants-box {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
}

.restaurants-box h3 {
    margin-left: 15px;
}

.restaurant-buttons-row {
    display: flex;
    justify-content: space-around;
}

/******** SEARCH RESULTS ******/
.search-results-box {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}

/***** MEDIA QUERIES ******/
@media screen and (max-width: 670px) {
    .restaurant-button {
        width: 50px;
    }

    .icon {
        height: 16px;
    }

    .type-button {
        font-size: 0.8em;
        padding: 2px 8px;
    }

    .food-item-box {
        width: 110px;
    }
}
</style>

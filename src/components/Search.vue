<template>
    <div id="search">
        <div class="restaurants-box">
           <div v-for="button in restaurantButtons" :key="button.key" class="restaurant-button">
               <img :src="button.url" class="responsive-pic">
           </div>
        </div>
        <div class="types-of-food-box">
            this is the types of food
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    data() {
        return {
            restaurantButtons: [{url: require('@/images/mcdonalds_logo.png'), key: "mcDonalds"},
                                {url: require('@/images/bk_logo.png'), key: "burgerKing"},
                                {url: require('@/images/subway_logo.png'), key: "subway"}]
        }
    },
    methods : {
       
    },
    computed : {
      
    }
}
</script>

<style scoped>
    #search {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .restaurants-box {
        display: flex;
        justify-content: space-around;
        background-color: #f5f5f5;
        margin-top: 40px;
        width: 80%;
    }

    .restaurant-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed #000;
        background-color: #fff;
        padding: 10px;
        width: 120px;
        margin: 20px;
    }

    .restaurant-button:hover {
        background-color: orange;
        border: none;
        cursor: pointer;
}

    .types-of-food-box {
        background-color: purple;
        margin-top: 10px;
    }

    .responsive-pic {
        max-width: 100%;
        height: auto;
    }

    @media screen and (max-width: 670px) {
    .restaurant-button {
        width: 50px;
    }
}
</style>
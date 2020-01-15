<template>
    <div id="search-container">
        <div class="box-80">
            <h1>Create your meal!</h1>
        </div>

        <!-- CHOOSE RESTAURANT -->
        <div class="restaurants-box box-80">
            <h3>Choose restaurant</h3>
            <div class="restaurant-buttons-row">
                <div
                    v-for="button in restaurantButtons"
                    :key="button.key"
                    class="restaurant-button"
                    @click="displayMenuOptions(button.key)"
                >
                    <img
                        :src="button.url"
                        :alt="button.alt"
                        class="responsive-pic"
                    />
                </div>
            </div>
        </div>

        <!-- CHOOSE TYPE OF FOOD -->
        <div v-if="mcDonalds.visible" class="types-of-food-box">
            <span
                v-for="icon in mcDonalds.icons"
                :key="icon.name"
                class="type-button"
            >
                <img :src="icon.url" class="icon" />
                <p>{{ icon.name }}</p>
            </span>
        </div>
        <div v-if="burgerKing.visible" class="types-of-food-box">
            <span
                v-for="icon in burgerKing.icons"
                :key="icon.name"
                class="type-button"
            >
                <img :src="icon.url" class="icon" />
                <p>{{ icon.name }}</p>
            </span>
        </div>
        <div v-if="subway.visible" class="types-of-food-box">
            <span
                v-for="icon in subway.icons"
                :key="icon.name"
                class="type-button"
            >
                <img :src="icon.url" class="icon" />
                <p>{{ icon.name }}</p>
            </span>
        </div>

        <!-- SEARCH RESULTS -->
        <div class="search-results-box">
            <div v-for="result in this.searchResult" :key="result.nix_item_id" class="food-item-box">
                <div class="food-picture-box">
                    <img :src="result.photo.thumb" class="responsive-pic" />
                </div>
                <div class="food-title-box">
                    {{ result.food_name }}
                </div>
                <div class="food-options-box">
                    <button class="btn btn-add">Add to meal</button>
                    <button class="btn btn-info" @click="showMoreInfo">More info</button>
                </div>
            </div>
        </div>

        <!-- INFO POPUP BOX, REMAKE THIS -->
        <div v-if="infoBoxVisible" class="food-info">
                    <span>{{ fakeResult.name }}</span>
                    <hr>
                    <table>
                        <tr>
                            <td>Carbohydrates:</td>
                            <td>{{ fakeResult.carbs }} grams</td>
                        </tr>
                        <tr>
                            <td>Fat:</td>
                            <td>{{ fakeResult.fat }} grams</td>
                        </tr>
                        <tr>
                            <td>Protein:</td>
                            <td>{{ fakeResult.protein }} grams</td>
                        </tr>
                        <tr>
                            <td>Calories:</td>
                            <td>900</td>
                        </tr>
                    </table>
                    <div class="food-info-buttons">
                        <button class="btn btn-abort" @click="close">Close</button>
                        <button class="btn btn-green">Add to meal</button>
                    </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as impIcons from '@/constants/icons';

export default {
    data() {
        return {
            restaurantButtons: [
                {
                    url: require("@/images/mcdonalds_logo.png"),
                    alt: "McDonalds logo",
                    key: "mcdonalds"
                },
                {
                    url: require("@/images/bk_logo.png"),
                    alt: "Burger King logo",
                    key: "burgerking"
                },
                {
                    url: require("@/images/subway_logo.png"),
                    alt: "Subway logo",
                    key: "subway"
                }
            ],
            mcDonalds: {
                visible: false,
                icons: [impIcons.HAMBURGER_ICON, impIcons.FRIES_ICON, impIcons.SALAD_ICON, impIcons.COFFEE_ICON, impIcons.DRINKS_ICON]
            },
            burgerKing: {
                visible: false,
                icons: [impIcons.HAMBURGER_ICON, impIcons.FRIES_ICON, impIcons.SALAD_ICON, impIcons.COFFEE_ICON, impIcons.DRINKS_ICON]
            },
            subway: {
                visible: false,
                icons: [impIcons.SANDWICH_ICON, impIcons.SALAD_ICON, impIcons.COFFEE_ICON, impIcons.COOKIES_ICON, impIcons.DRINKS_ICON]
            },
            fakeResult: {
                thumbnail:
                    "https://d2xdmhkmkbyw75.cloudfront.net/2583_thumb.jpg",
                name: "big mac",
                calories: 540,
                fat: 28,
                carbs: 45,
                protein: 25
            },
            infoBoxVisible: false
        };
    },
    methods: {
        showMoreInfo() {
            if(this.infoBoxVisible === true) {
                this.infoBoxVisible = false;
                return;
            }
            this.infoBoxVisible = true
        },
        close() {
            this.infoBoxVisible = false
        },
        displayMenuOptions(restaurant) {
            switch (restaurant) {
                case "mcdonalds":
                    if (this.mcDonalds.visible === true) {
                        this.mcDonalds.visible = false;
                        return;
                    }

                    this.mcDonalds.visible = true;
                    this.burgerKing.visible = false;
                    this.subway.visible = false;
                    break;
                case "burgerking":
                    if (this.burgerKing.visible === true) {
                        this.burgerKing.visible = false;
                        return;
                    }

                    this.mcDonalds.visible = false;
                    this.burgerKing.visible = true;
                    this.subway.visible = false;
                    break;
                case "subway":
                    if (this.subway.visible === true) {
                        this.subway.visible = false;
                        return;
                    }
                    this.mcDonalds.visible = false;
                    this.burgerKing.visible = false;
                    this.subway.visible = true;
                    break;
            }
        },
        ...mapActions(["newQuery", "selectDish", "newSearch", "newSearchDetails"])
    },
    computed: {
        ...mapGetters(["searchResult", "dishDetails", "selectedDish"])
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

.btn {
    padding: 4px;
    color: #fff;
    border: none;
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

.restaurant-button:hover,
.restaurant-button:active {
    background-color: orange;
    border-color: orange;
    cursor: pointer;
}

/******** SEARCH RESULTS ******/
.search-results-box {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.food-item-box {
    margin-left: 7px;
    margin-right: 7px;
    margin-bottom: 15px;
    border: 1px solid black;
   width: 210px;
}

.food-title-box {
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    padding: 5px;
    background-color: orange;
}

.food-options-box {
    padding: 5px;
}

.btn-add {
    background-color: green;
}

.btn-info {
    background-color: blue;
}

/****** CHOOSE TYPE OF FOOD *******/
.types-of-food-box {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.type-button {
    display: flex;
    justify-content: center;
    border: 1px solid #696969;
    border-radius: 50px;
    align-items: center;
    padding: 4px 15px;
    margin-left: 5px;
    margin-top: 10px;
}

.type-button p {
    margin-left: 5px;
}

.type-button:hover {
    background-color: orange;
    color: #fff;
    cursor: pointer;
}

/****** INFO POPUP ******/
.food-info-buttons {
    display: flex;
    justify-content: space-between;
}

.food-info-buttons button {
    margin: 10px;
}

.food-info span {
    display: inline-block;
    margin-top: 10px;
    font-weight: bold;
    text-transform: capitalize;
}

td {
    padding: 2px;
}

.food-info {
    background-color: #808e9b;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-left: 20px;
    padding-right: 20px;
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

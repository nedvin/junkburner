<template>
    <div id="search">
        <div class="box">
            <h1>Create your meal!</h1>
        </div>
        <div class="restaurants-box box">
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
        <div class="search-results-box">
            <div v-for="nr in 10" class="food-item-box">
                <div class="food-picture-box">
                    <img :src="fakeResult.thumbnail" class="responsive-pic" />
                </div>
                <div class="food-title-box">
                    {{ fakeResult.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
                icons: {
                    hamburger: {
                        name: "Hamburgers",
                        url: require("@/images/001-burger.png")
                    },
                    fries: {
                        name: "Fries",
                        url: require("@/images/003-fries.png")
                    },
                    salad: {
                        name: "Salads",
                        url: require("@/images/005-salad.png")
                    },
                    coffee: {
                        name: "Coffees",
                        url: require("@/images/006-coffee.png")
                    },
                    coke: {
                        name: "Drinks",
                        url: require("@/images/007-coke.png")
                    }
                }
            },
            burgerKing: {
                visible: false,
                icons: {
                    hamburger: {
                        name: "Hamburgers",
                        url: require("@/images/001-burger.png")
                    },
                    fries: {
                        name: "Fries",
                        url: require("@/images/003-fries.png")
                    },
                    salad: {
                        name: "Salads",
                        url: require("@/images/005-salad.png")
                    },
                    coffee: {
                        name: "Coffees",
                        url: require("@/images/006-coffee.png")
                    },
                    coke: {
                        name: "Drinks",
                        url: require("@/images/007-coke.png")
                    }
                }
            },
            subway: {
                visible: false,
                icons: {
                    sandwich: {
                        name: "Sandwiches",
                        url: require("@/images/002-sandwich.png")
                    },
                    salad: {
                        name: "Salads",
                        url: require("@/images/005-salad.png")
                    },
                    coffee: {
                        name: "Coffees",
                        url: require("@/images/006-coffee.png")
                    },
                    cookie: {
                        name: "Cookies",
                        url: require("@/images/008-cookie.png")
                    },
                    coke: {
                        name: "Drinks",
                        url: require("@/images/007-coke.png")
                    }
                }
            },
            addIcon: require("@/images/add.png"),
            infoIcon: require("@/images/brochure.png"),
            fakeResult: {
                thumbnail:
                    "https://d2xdmhkmkbyw75.cloudfront.net/2583_thumb.jpg",
                name: "big mac",
                calories: 540,
                fat: 28,
                carbs: 45,
                protein: 25
            }
        };
    },
    methods: {
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
        }
    },
    computed: {}
};
</script>

<style scoped>
#search {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.box {
    width: 80%;
}

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

.search-results-box {
    width: 80%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.food-item-box {
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
}

.food-title-box {
    text-transform: uppercase;
}

.food-option-row-box {
    font-size: 0.8em;
    display: flex;
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
        width: 120px;
    }
}
</style>

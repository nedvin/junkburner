<template>
    <div id="sidebar">
        <div class="sidebar-header">
            <h2>Meal</h2>
            <div class="sidebar-stats-calories">
                <span>{{ myCalories }}</span> /
                <span>{{ recommendedCalories }}</span> kcal
            </div>
            <button
                class="button-visibility btn expand-btn"
                @click="toggleSidebarVisibility">
                Expand
            </button>
        </div>
        <div id="sidebar-wrapper" class="sidebar-ctrl-visibility">
            <div class="sidebar-food-items">
                <div v-for="count in 4" class="sidebar-food-item">
                    <div>
                        <img :src="fakeMenu.icon" class="icon" />
                        <span class="sidebar-food-item-name">{{
                            fakeMenu.name
                        }}</span>
                    </div>
                    <div>
                        <input type="text" class="food-item-amount" value="2" />
                        <button class="btn delete-btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            fakeMenu: {
                type: "hamburger",
                icon: require("@/images/001-burger.png"),
                name: "big mac",
                amount: 2,
                calories: 540,
                fat: 28,
                carbs: 45,
                protein: 25
            },
            myCalories: 900,
            recommendedCalories: 1900
        };
    },
    methods: {
        toggleSidebarVisibility() {
            let wrapper = document.body.querySelector("#sidebar-wrapper");

            if (wrapper.className === "sidebar-ctrl-visibility") {
                wrapper.className = "sidebar-visible";
            } else {
                wrapper.className = "sidebar-ctrl-visibility";
            }
        }
    },
    computed: {}
};
</script>

<style scoped>
#sidebar {
    background-color: #485460;
    min-width: 300px;
}

.button-visibility {
    display: none;
}

.expand-btn {
    background-color: #808e9b;
    color: #f5f5f5;
    padding: 5px 10px;
}

.expand-btn:hover {
    background-color: #485460;
}

.sidebar-visible,
.sidebar-ctrl-visibility {
    display: block;
}

.sidebar-visible {
    display: block;
}

.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 13px;
    padding-right: 13px;
    background-color: #808e9b;
    margin: 10px 8px;
}

.sidebar-food-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
}

.sidebar-food-item-name {
    display: inline-block;
    padding-top: 3px;
    margin-left: 5px;
    text-transform: capitalize;
}

.icon {
    height: 24px;
}

.sidebar-food-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 230px;
    border: 1px solid #000;
    background-color: #9a9898;
    font-size: 95%;
    margin-top: 10px;
}

.sidebar-food-item div {
    display: flex;
    align-items: center;
}

.food-item-amount {
    padding: 2px;
    font-size: 85%;
    width: 35px;
    float: right;
    text-align: center;
}

.delete-btn {
    background-color: #ff3f34;
    font-size: 0.8em;
    color: #fff;
    font-weight: bold;
    padding: 2px 4px;
    margin-left: 5px;
}

.delete-btn:hover {
    background-color: firebrick;
}

@media screen and (max-width: 850px) {
    .button-visibility {
        display: inline-block;
    }

    .sidebar-ctrl-visibility {
        display: none;
    }
}
</style>

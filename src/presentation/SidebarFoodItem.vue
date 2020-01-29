<template>
    <div class="sidebar-food-item">
        <div>
            <img :src="icon" class="icon" />
            <span class="sidebar-food-item-name">{{ name }}</span>
        </div>
        <div>
            <select
                @change="$emit('changeAmount', $event, itemId)"
                :value="amount"
            >
                <option v-for="number in 5" :key="number" :value="number">
                    {{ number }}
                </option>
            </select>
            
            <button class="btn delete-btn" @click="$emit('delete')">
                X
            </button>
        </div>
    </div>
</template>

<script>
import * as impIcons from "@/constants/icons";

export default {
    name: "SidebarFoodItem",
    data() {
        return {
            newAmount: this.amount,
            icons: [
                impIcons.HAMBURGER_ICON,
                impIcons.SANDWICH_ICON,
                impIcons.FRIES_ICON,
                impIcons.SALAD_ICON,
                impIcons.COFFEE_ICON,
                impIcons.DRINKS_ICON,
                impIcons.COOKIES_ICON
            ]
        };
    },
    computed: {
        icon() {
            let foodItemIcon = this.icons.find(
                icon => icon.query === this.type
            );
            return foodItemIcon.url;
        }
    },
    props: [
            "name", 
            "amount", 
            "type", 
            "itemId"
        ]
};
</script>

<style scoped>
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

.sidebar-food-item-name {
    display: inline-block;
    padding-top: 3px;
    margin-left: 5px;
    text-transform: capitalize;
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

.icon {
    height: 24px;
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
</style>

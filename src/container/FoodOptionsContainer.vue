<template>
    <div>
        <v-food-options @click="search" v-if="isSelected(mcDonalds.name)" :icons="mcDonalds.icons" :key="mcDonalds.name" :restaurant="mcDonalds.name"/>
        <v-food-options @click="search" v-if="isSelected(burgerKing.name)" :icons="burgerKing.icons" :key="burgerKing.name" :restaurant="burgerKing.name"/>
        <v-food-options @click="search" v-if="isSelected(subway.name)" :icons="subway.icons" :key="subway.name" :restaurant="subway.name"/>
    </div>
</template>

<script>
import FoodOptions from '@/presentation/FoodOptions'
import * as impIcons from '@/constants/icons'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'FoodOptionsContainer',
        data() {
        return {
            mcDonalds: {
                name: 'McDonalds',
                visible: false,
                icons: [impIcons.HAMBURGER_ICON, impIcons.FRIES_ICON, impIcons.SALAD_ICON, impIcons.COFFEE_ICON, impIcons.DRINKS_ICON]
            },
            burgerKing: {
                name: 'Burger King',
                visible: false,
                icons: [impIcons.HAMBURGER_ICON, impIcons.FRIES_ICON, impIcons.SALAD_ICON, impIcons.COFFEE_ICON, impIcons.DRINKS_ICON]
            },
            subway: {
                name: 'Subway',
                visible: false,
                icons: [impIcons.SANDWICH_ICON, impIcons.SALAD_ICON, impIcons.COFFEE_ICON, impIcons.COOKIES_ICON, impIcons.DRINKS_ICON]
            }
        };
    },
    methods: {
        isSelected(name) {
            return name === this.restaurant;
        },
        search(query) {
            this.changeQuery(query)
            this.newSearch()
        },
        ...mapActions(['changeQuery', 'newSearch'])
    },
    computed: {
        ...mapGetters(['restaurant'])
    },
    components: {
        'v-food-options': FoodOptions
    }
}
</script>
<template>
    <div>
        <v-sidebar-food-item v-for="dishItem in currentMeal" 
            :key="dishItem.nix_item_id"
            />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import sidebarFoodItem from '@/presentation/SidebarFoodItem'

export default {
    name: 'SidebarFoodItemContainer',
    computed: {
        ...mapGetters(['currentMeal'])
    },
    components: {
        'v-sidebar-food-item': sidebarFoodItem
    }
}
</script>
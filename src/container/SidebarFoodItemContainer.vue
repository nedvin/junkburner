<template>
    <div>
        <v-sidebar-food-item v-for="dishItem in currentMeal" 
            :key="dishItem.id"
            :name="dishItem.name"
            :amount="dishItem.amount"
            :type="dishItem.type"
            @delete="removeDish(dishItem)"
            />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import sidebarFoodItem from '@/presentation/SidebarFoodItem'

export default {
    name: 'SidebarFoodItemContainer',
    methods: {
        ...mapActions(['removeDish'])
    },
    computed: {
        ...mapGetters(['currentMeal'])
    },
    components: {
        'v-sidebar-food-item': sidebarFoodItem
    }
}
</script>
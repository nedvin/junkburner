<template>
    <div>
        <v-sidebar-food-item v-for="dishItem in currentMeal" 
            :key="dishItem.id"
            :name="dishItem.name"
            :amount="dishItem.amount"
            :type="dishItem.type"
            :itemId="dishItem.id"
            @delete="removeDish(dishItem)"
            @changeAmount="changeAmount"
            />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import sidebarFoodItem from '@/presentation/SidebarFoodItem'

export default {
    name: 'SidebarFoodItemContainer',
    methods: {
        changeAmount(event, id) {
            let newAmount = event.target.value
            this.setAmount(id, newAmount)
        },
        ...mapActions(['removeDish', 'setAmount'])
    },
    computed: {
        ...mapGetters(['currentMeal'])
    },
    components: {
        'v-sidebar-food-item': sidebarFoodItem
    }
}
</script>
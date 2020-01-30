<template>
    <div>
        <v-sidebar-food-item 
            v-for="dishItem in currentMeal" 
            :key="dishItem.id"
            :name="dishItem.name"
            :amount="dishItem.amount"
            :type="dishItem.type"
            :itemId="dishItem.id"
            @delete="deleteDish(dishItem)"
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
            let newAmount = Number(event.target.value);
            this.setAmount({
                id: id, 
                amount: newAmount, 
                userId: this.userId
            });
        },
        deleteDish(dishItem) {
            let payload = {
                dish: dishItem,
                userId: this.userId
            }
            this.removeDish(payload)
        },
        ...mapActions([
                "removeDish", 
                "setAmount"
            ])
    },
    computed: {
        ...mapGetters([
                "currentMeal",
                "userId"
            ])
    },
    components: {
        'v-sidebar-food-item': sidebarFoodItem
    }
}
</script>
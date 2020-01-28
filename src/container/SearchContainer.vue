<template>
    <search :searchResult="this.searchResult" :dishDetails="this.dishDetails" @addDishToMeal="addDishToMeal"/>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import search from "@/presentation/Search";
export default {
    data() {
        return {
        };
    },
    methods: {
        ...mapActions([
            "newQuery", 
            "selectDish", 
            "newSearch", 
            "newSearchDetails",
            "addDish",
            "removeDish"
            ]),
        addDishToMeal(event){
            event.type = this.searchQuery;
            event.userId = this.userId;
            this.addDish(event);
        }
    },
    computed: {
        ...mapGetters(["searchResult", "dishDetails", "selectedDish", "searchQuery", 'userId'])
    },
    components : {
        "search" : search
    }
};
</script>


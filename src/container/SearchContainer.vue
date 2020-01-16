<template>
    <search :searchResult="this.searchResult" :dishDetails="this.dishDetails" />
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
        ...mapActions(["newQuery", "selectDish", "newSearch", "newSearchDetails"])
    },
    computed: {
        ...mapGetters(["searchResult", "dishDetails", "selectedDish"])
    },
    components : {
        "search" : search
    }
};
</script>


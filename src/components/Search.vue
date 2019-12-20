<template>
    <div id="container-search">
        <div id="internal-search">
            <div id="search-bar">
                 <div id="search-bar-internal">
                    <h2 id="search-header">FIND A DISH</h2>
                    <input @input="searchQueryInput" class="search-bar-items" 
                    id="search-searchbar" v-bind:value = "searchQuery" >
                    <select @change="searchTypeInput" v-bind:value = "searchType"
                    class="search-bar-items" id="search-searchSelect">
                        <option v-for="type in dishTypes" :key= "type" :value="type">{{ type }}</option>
                    </select>
                    <button @click = "makeSearch" class="search-bar-items" 
                    id="search-button">Search</button>
                    <span id="loader" v-if="loading">Loading...</span> 
                </div>
            </div>
            <div id="search-results">
                <div class="dishHolder" v-for="dish in this.searchResults" :key="dish.id">
                    <div class="dishHolderPic">
                        <img @click = "showDishDetails"
                         v-bind:src= "imgUrl + dish.image"  
                         class="responsive-pic" v-bind:id="dish.id">
                    </div>
                    <div @click = "showDishDetails" class="dishHolderName" v-bind:id="dish.id">
                        {{dish.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    data() {
        return {
        dishTypes: ["All", "Main course", "Dessert",
         "Appetizer", "Side dish", "Breakfast", "Starter"],
        imgUrl: "https://spoonacular.com/recipeImages/",
        loading: false
        }
    },
    methods : {
        ...mapActions(["getAllDishes", "getDish", "newQuery", "newType"]),
        makeSearch(){
            this.toggleLoading();
            this.getAllDishes()
            .finally(this.toggleLoading);
        },
        toggleLoading(){
            this.loading = !this.loading;
        },
        showDishDetails(e){
            this.toggleLoading();
            this.getDish(e.target.id)
                .finally(() => {this.toggleLoading(); this.$router.push('details');})
        },
        searchQueryInput(e){
            this.newQuery(e.target.value);
        },
        searchTypeInput(e){
            this.newType(e.target.value);
        }
    },
    computed : {
        ...mapGetters(["searchResults", "searchQuery", "searchType"])
    }
}
</script>

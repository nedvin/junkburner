import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./data/Model.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),

  async created(){
    //initialize store data structure by submitting action.
    this.$store.dispatch('INIT_SEARCH');
    this.$store.dispatch('INIT_MEAL');
    this.$store.dispatch('INIT_WORKOUT');
    // Test för att testa vuexen.
    /*
    this.$store.dispatch("newQuery", "Subway");
    this.$store.dispatch("newSearch")
    .then(() => {this.$store.dispatch("selectDish", 4)})
    .then(() => {this.$store.dispatch("newSearchDetails")});
    */
 }
}).$mount("#app");
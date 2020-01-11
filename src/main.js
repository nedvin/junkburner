import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./data/Model.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),

  created(){
    //initialize store data structure by submitting action.
    this.$store.dispatch('INIT_SEARCH');
    this.$store.dispatch('INIT_MEAL');
    this.$store.dispatch('INIT_WORKOUT');
    this.$store.dispatch("newQuery", "Subway");
    this.$store.dispatch("newSearch");
 }
}).$mount("#app");
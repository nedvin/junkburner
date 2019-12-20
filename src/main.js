import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./data/DinnerModel.js";
import './style.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),

  created(){
    //initialize store data structure by submitting action.
    this.$store.dispatch('INIT_SEARCH');
    this.$store.dispatch('INIT_MENU');
 }
}).$mount("#app");
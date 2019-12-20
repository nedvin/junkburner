import Vue from "vue";
import Vuex from "vuex";
import meal from "./modules/Meal";
import workout from "./modules/Workout";

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
   meal,
   workout
  }
});

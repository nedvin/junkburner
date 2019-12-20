import Vue from "vue";
import Vuex from "vuex";
import menu from "./modules/Menu";
import search from "./modules/Search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
   menu,
   search
  }
});

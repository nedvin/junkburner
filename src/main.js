import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./data/Model.js";
import Vuelidate from 'vuelidate'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

firebase.initializeApp({
  apiKey: "AIzaSyAoxKTWM8Pz78VaZZCK54ZJ8sJFZ8fEgTo",
  authDomain: "junkburner-ed983.firebaseapp.com",
  databaseURL: "https://junkburner-ed983.firebaseio.com",
  projectId: "junkburner-ed983",
  storageBucket: "junkburner-ed983.appspot.com",
  messagingSenderId: "787171612727",
  appId: "1:787171612727:web:6d951b7b717e95fbfa47b2",
});



export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App),

 beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        store.dispatch('setSignedIn');
        store.dispatch('initUser', user);
        store.dispatch('initMealState', user);
        store.dispatch('initSearchState', user);
      }
  })
  },

  async created(){

    //initialize store data structure by submitting action.
  /*  await this.$store.dispatch('INIT_SEARCH');
    this.$store.dispatch('INIT_MEAL');
    this.$store.dispatch('INIT_WORKOUT');

    this.$store.dispatch("newQuery", "mcdonalds burger");
    await this.$store.dispatch("newSearch");
    this.$store.dispatch("newQuery", "mcdonalds burger");
    await this.$store.dispatch("newSearch"); 
    
    this.$store.dispatch("selectDish", 4);
    await this.$store.dispatch("newSearchDetails");
    this.$store.dispatch("addDish", this.$store.getters.dishDetails);
    //this.$store.dispatch("removeDish", this.$store.getters.dishDetails); */
    
 }
}).$mount("#app");
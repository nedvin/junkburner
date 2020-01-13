import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import SearchScreen from "@/components/SearchScreen";
import firebase from 'firebase'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/search",
            name: "Search",
            component: SearchScreen,
            meta: {
                requiresAuth: true
              }
        }
    ]
});

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
    if (requiresAuth && !currentUser) next('/')
    //else if (!requiresAuth && currentUser) next('/search')
    else next()
});

export default router;

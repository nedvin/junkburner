import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/presentation/HomeView";
import SearchView from "@/presentation/SearchView";
import firebase from 'firebase'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/search",
            name: "Search",
            component: SearchView,
           // meta: {
           //     requiresAuth: true
           //   }
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

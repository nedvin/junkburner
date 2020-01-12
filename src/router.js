import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import SearchScreen from "@/components/SearchScreen";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/search",
            name: "Search",
            component: SearchScreen
        }
    ]
});

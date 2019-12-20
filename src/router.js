import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import SelectDish from "@/components/SelectDish";
import Details from "@/components/Details";
import Overview from "@/components/Overview";
import Printout from "@/components/Printout";

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
            name: "SelectDish",
            component: SelectDish,
        },
        {
            path: "/details",
            name: "Details",
            component: Details,
        },
        {
            path: "/overview",
            name: "Overview",
            component: Overview,
        },
        {
            path: "/printout",
            name: "Printout",
            component: Printout,
        }
    ]
});

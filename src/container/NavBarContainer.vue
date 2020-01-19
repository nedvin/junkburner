<template>
    <div>
        <navbutton v-for="button in buttonsToRender" :text="button" :isActive="isActivePage(button)" :key="button"/>
        <!--
        <navbutton v-if="!this.signedIn" text="Sign up!" :isActive="false"/>
        <navbutton text="Home" :isActive="true" />
        <navbutton text="Search" :isActive="false"/>
        <navbutton text="Meal" :isActive="false"/>
        <navbutton text="Workout" :isActive="false"/>
        <navbutton v-if="this.signedIn" text="Profile" :isActive="false"/>
        <navbutton v-if="!this.signedIn" text="Login" :isActive="false"/>
        -->
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { db } from '@/main'
import button from "@/presentation/NavBarButton"
export default {
    name: "Toolbar",
    data() {
        return{
            buttons : ["Sign up!", "Home", "Search", "Meal", "Workout", "Profile", "Login"]
        }
    },
    methods: {
        isActivePage(page){
            return this.$router.currentRoute.name === page;
        }
    },
    computed: {
        buttonsToRender(allButtons){
            let render = this.buttons.slice();
            if(this.signedIn){
                render = render.filter((element) => element !== "Sign up!" || element !== "Login");
            }
            else{
                render = render.filter((element) => element !== "Profile");
            }
            return render;
            console.log(render);
            //console.log(this.$router.currentRoute) TODO: ta bort när allt funkar!
        },
       
        ...mapGetters(['user', 'kcalRdi', 'userId', 'signedIn'])
        
    },
    components: {
        'navbutton' : button
    }
};
</script>
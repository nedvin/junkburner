<template>
    <div>
        <navbutton
            v-for="button in buttonsToRender" 
            :text="button" 
            :isActive="isActivePage(button)" 
            :key="button"
            @navBtnClicked="handleBtnPress"/>
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
        },
        handleBtnPress(event){
            if(event==="Sign up!"){
                //hantera firebase
            }
            else if(event === "Login"){
                //hantera firebase
            }
            else if(event === "Profile"){
                //hantera firebase(profil)
            }
            else{
                this.$router.push(event);
            }
        }
    },
    computed: {
        buttonsToRender: function(allButtons){
            let render = this.buttons.slice();
            if(this.signedIn){
                render = render.filter((element) => element !== "Sign up!" || element !== "Login");
            }
            else{
                render = render.filter((element) => element !== "Profile");
            }
            return render;
        },
       
        ...mapGetters(['user', 'kcalRdi', 'userId', 'signedIn'])
        
    },
    components: {
        'navbutton' : button
    }
};
</script>
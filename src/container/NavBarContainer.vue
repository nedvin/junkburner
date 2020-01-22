<template>
    <div v-if="reRender">
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
            buttons : ["Sign up!", "Home", "Search", "Meal", "Workout", "Profile", "Login"],
            reRender : true
        }
    },
    methods: {
        isActivePage(page){
            return this.$router.currentRoute.name === page;
        },
        handleBtnPress(event){
            if(event==="Sign up!"){
                this.toggleSignUpVisible();
            }
            else if(event === "Login"){
                this.toggleLoginVisible();
            }
            else if(event === "Profile"){
                this.toggleProfileVisible();
            }
            else{
                this.$router.push(event);
            }
            this.forceReRender();
        },
        forceReRender(){ // Hack för att rerendra inte att rekommendera https://michaelnthiessen.com/force-re-render/
            this.reRender = false;
            this.$nextTick(() => {this.reRender = true;})
        },
        ...mapActions([
            "toggleLoginVisible",
            "toggleSignUpVisible",
            "toggleProfileVisible"
        ])
    },
    computed: {
        buttonsToRender: function(allButtons){
            let render = this.buttons.slice();
            if(this.signedIn){
                render = 
                    render.filter((element) => element !== "Sign up!")
                    .filter((element) => element !== "Login");
            }
            else{
                render = render.filter((element) => element !== "Profile");
            }
            return render;
        },
       
        ...mapGetters(['user', 'kcalRdi', 'userId', 'signedIn']) // TODO: Får se om det behövs ngn mer getter än signedIn 
        
    },
    components: {
        'navbutton' : button
    }
};
</script>
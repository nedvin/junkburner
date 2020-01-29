<template>
    <div v-if="reRender">
        <navbutton
            v-for="button in buttonsToRender" 
            :text="button" 
            :key="button"
            @navBtnClicked="handleBtnPress"/>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import button from "@/presentation/NavBarButton"
export default {
    name: "Navbar",
    data() {
        return{
            buttons : ["Sign up!","Profile", "Home", "Meal", "Workout", "Sign out", "Login"],
            reRender : true
        }
    },
    methods: {
        isActivePage(page){
            return this.routeChange === page;
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
            else if(event === "Sign out"){
                this.signOutUser();
            }
            else{
                this.$router.push(event);
            }
        },
        forceReRender(){ // Hack för att rerendra inte att rekommendera https://michaelnthiessen.com/force-re-render/
            this.reRender = false;
            this.$nextTick(() => {this.reRender = true;})
        },
        ...mapActions([
            "toggleLoginVisible",
            "toggleSignUpVisible",
            "toggleProfileVisible",
            "signOutUser"
        ])
    },
    computed: {
        buttonsToRender: function(){
            let render = this.buttons.slice();
            if(this.signedIn){
                render = 
                    render.filter((element) => element !== "Sign up!")
                    .filter((element) => element !== "Login");
            }
            else{
                render = render.filter((element) => element !== "Profile")
                .filter((element) => element !== "Sign out");
            }
            return render;
        },
        ...mapGetters(['user', 'kcalRdi', 'userId', 'signedIn']), // TODO: Får se om det behövs ngn mer getter än signedIn 
        routeChange: function(){
            let screen = this.$router.currentRoute.name;
            return screen;
        }
    },
    components: {
        'navbutton' : button
    },
    watch: {
        $route(to, from){
            this.forceReRender();
        }
    }
};
</script>
<template>
    <div>
        <homedisplay @createMeal="goToSearch" @showFormLogin="showLogin" @showFormSignup="showSignUp"/>
    </div>
</template>

<script>
import homePresentation from "@/presentation/HomeDisplay"
import {mapActions} from 'vuex';
export default {
    components:{
        homedisplay: homePresentation
    },
    methods: {
        showLogin(){
            this.setLoginVisible();
        },
        goToSearch() {
            this.$router.push('/search');
        },
        showSignUp(){
            this.setSignUpVisible();
        },
        ...mapActions(['setLoginVisible','setSignUpVisible'])
    }
}
</script>

<style scoped>

</style>
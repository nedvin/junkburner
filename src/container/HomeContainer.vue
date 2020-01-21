<template>
    <div>
        <homedisplay @showFormLogin="showLogin" @showFormSignup="showSignUp"/>
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
        showSignUp(){
            this.setSignUpVisible();
        },
        ...mapActions(['setLoginVisible','setSignUpVisible'])
    }
}
</script>

<style scoped>

</style>
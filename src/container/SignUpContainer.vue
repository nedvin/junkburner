<template>
    <signupform v-if="this.signUpVisibility" @closeForm="close" @signUp="signUp" />
</template>

<script>
    import signupform from "@/presentation/SignUpForm";
    import { mapGetters, mapActions } from "vuex";
    export default {
        computed: {
            ...mapGetters(["signUpVisibility"])
        },
        methods: {
            close(){
                this.setSignUpNotVisible();
            },
            open(){
                this.setSignUpVisible()
            },
            toggle(){
                this.toggleSignUpVisible()
            },
            ...mapActions([
                "setSignUpVisible", 
                "setSignUpNotVisible", 
                "toggleSignUpVisible",
                "signUpUser",
                "loginUser"
            ]),
            async signUp(userData){
                await this.signUpUser(userData);
                this.close();
                this.loginUser(userData);
            }
        },
        components: {
            signupform: signupform
        }
    }
</script>

<style scoped>

</style>
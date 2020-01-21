<template>
    <signupform v-if="this.signUpVisibility" @closeForm="close"/>
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
                "toggleSignUpVisible"
            ])
        },
        components: {
            signupform: signupform
        }
    }
</script>

<style scoped>

</style>
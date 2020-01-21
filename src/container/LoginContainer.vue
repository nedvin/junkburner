<template>
    <loginform v-if="this.loginVisibility" @closeForm="close"/>
</template>

<script>
    import loginform from "@/presentation/LoginForm"
    import { mapGetters, mapActions } from "vuex";
    export default {
        computed: {
            ...mapGetters(["loginVisibility"])
        },
        methods: {
            close(){
                this.setLoginNotVisible();
            },
            open(){
                this.setLoginVisible()
            },
            toggle(){
                this.toggleLoginVisible()
            },
            ...mapActions([
                "setLoginVisible", 
                "setLoginNotVisible", 
                "toggleLoginVisible"
            ])
        },
        components: {
            loginform: loginform
        }
        
    }
</script>

<style scoped>

</style>
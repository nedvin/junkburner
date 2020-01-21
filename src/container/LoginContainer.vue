<template>
    <loginform v-if="this.loginVisibility" @closeForm="close" @login="login" />
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
                "toggleLoginVisible",
                "loginUser"
            ]),
            login(userData){
                this.loginUser(userData);
                this.close();
            }
        },
        components: {
            loginform: loginform
        }
        
    }
</script>

<style scoped>

</style>
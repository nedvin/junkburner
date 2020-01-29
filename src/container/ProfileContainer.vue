<template>
    <profile 
        v-if="this.profileVisibility" 
        :user="this.user" 
        @closeForm="this.toggle"
        @updateProfile="this.updateProfile"  
    />
</template>

<script>
    import profile from "@/presentation/Profile";
    import { mapGetters, mapActions } from "vuex";
    export default {
        computed: {
            ...mapGetters(["profileVisibility", "user"])
        },
        methods: {
            toggle(){
                this.toggleProfileVisible()
            },
            ...mapActions([
                "toggleProfileVisible",
                "signOutUser",
                "updateUserSettings"
            ]),
            updateProfile(userData){
                this.updateUserSettings(userData);
                this.toggle();
            }
        },
        components: {
            profile: profile
        }
    }
</script>

<style scoped>

</style>
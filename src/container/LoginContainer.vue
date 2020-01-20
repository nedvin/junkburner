<template>
    <loginform v-if="visible" />
</template>

<script>
    import loginform from "@/presentation/LoginForm"
    export default {
        data(){
            return {
                visible: false,
            }
        },
        components: {
            loginform: loginform
        }
        
    }
</script>

<style scoped>

</style>
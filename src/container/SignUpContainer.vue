<template>
    <signupform v-if="visible"/>
</template>

<script>
    import signupform from "@/presentation/SignUpForm";
    export default {
        data(){
            return {
                visible: false,
            }
        },
        components: {
            signupform: signupform
        }
    }
</script>

<style scoped>

</style>
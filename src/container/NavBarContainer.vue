<template>
    <toolbar :user="this.user" @updateUserSettings="this.updateUserSettings" @signout="this.signout"/>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { db } from '@/main'
import toolbar from "@/presentation/Toolbar"
export default {
    name: "Toolbar",
    methods: {
    },
    computed: {
        ...mapGetters(['user', 'kcalRdi', 'userId'])
    },
    components: {
        'toolbar' : toolbar
    }
};
</script>
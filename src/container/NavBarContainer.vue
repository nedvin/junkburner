<template>
<!--<toolbar :user="this.user" @updateUserSettings="this.updateUserSettings" @signout="this.signout"/> -->
    <div>
        <navbutton v-if="!this.signedIn" text="Sign up!" isActive="false"/>
        <navbutton text="Home" isActive="true"/>
        <navbutton text="Search" isActive="false"/>
        <navbutton text="Meal" isActive="false"/>
        <navbutton text="Workout" isActive="false"/>
        <navbutton v-if="this.signedIn" text="Profile" isActive="false"/>
        <navbutton v-if="!this.signedIn" text="Login" isActive="false"/>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { db } from '@/main'
import toolbar from "@/presentation/Toolbar"
import button from "@/presentation/NavBarButton"
export default {
    name: "Toolbar",
    methods: {
    },
    computed: {
        ...mapGetters(['user', 'kcalRdi', 'userId', 'signedIn'])
    },
    components: {
        'toolbar' : toolbar,
        'navbutton' : button
    }
};
</script>
<template>
    <toolbar :user="this.user" @updateUserSettings="this.updateUserSettings" @signout="this.signout"/>
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapActions } from 'vuex';
import { db } from '@/main'
import toolbar from "@/presentation/Toolbar"
export default {
    name: "Toolbar",
    data() {
    },
    methods: {
        signout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace("/");
                });
        },
        updateUserSettings() {
            this.setAge(document.body.querySelector("#age-field").value);
            this.setLength(document.body.querySelector("#length-field").value);
            this.setWeight(document.body.querySelector("#weight-field").value);
            this.setGender(document.body.querySelector("#gender-field").value);
            db.collection('users').doc(this.userId).update({
                age: this.age,
                length: this.length,
                weight: this.weight,
                gender: this.gender
            }).then(() => {console.log('success')}) // Fixa loader och snackbar
        },
        ...mapActions(['setAge', 'setWeight', 'setLength', 'setGender'])
    },
    computed: {
        ...mapGetters(['user', 'kcalRdi', 'userId'])
    },
    components: {
        'toolbar' : toolbar
    }
};
</script>


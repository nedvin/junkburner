<template>
    <div id="toolbar">
        <div class="button-row">
            <button @click="signout" class="btn">Sign out</button>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'

export default {
    name: 'Toolbar',
    methods: {
        signout() {
            firebase.auth().signOut().then(() => {
              this.$router.replace('/')
             })
        }
    }
}
</script>

<style scoped>
    #toolbar {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding: 5px;
    }

    .button-row {
        display: flex;
        justify-content: flex-end;
    }

    .btn {
        padding: 2px;

    }

    .btn:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
</style>
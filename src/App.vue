<template>
    <div id="app" class="container wrapper">
        <v-header class="v-header"/>
        <router-view id="container-main" />
        <signup-container />
        <login-container />
        <profile-container />
        <v-footer />
    </div>
</template>

<script>
import footer from "./presentation/Footer";
import header from "./presentation/HeaderView";
import logincontainer from "@/container/LoginContainer";
import signupcontainer from "@/container/SignUpContainer";
import profilecontainer from "@/container/ProfileContainer"
export default {
    name: "App",
    components: {
        "v-header": header,
        "v-footer": footer,
        "login-container" : logincontainer,
        "signup-container" : signupcontainer ,
        "profile-container" : profilecontainer
    }
};
</script>

<style>
html,
body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}

body {
    font-family: "Arial";
}

.v-header {
    position: fixed;
    z-index: 1;
}

.responsive-pic {
    max-width: 100%;
    height: auto;
}

.container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
}

#container-main {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
    margin-top: 100px;
}

.btn-abort {
    background-color: #ff3f34;
}

.btn-green {
    background-color: #05c46b;
}

.wrapper {
    padding-bottom: 60px;
    min-height: calc(100vh - 60px);
}

@media screen and (max-width: 850px) {
    #container-main {
        flex-direction: column;
        margin-top: 138px;
    }

    button {
        padding: 8px 16px;
    }
}
</style>

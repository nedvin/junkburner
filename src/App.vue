<template>
    <div id="app" class="container wrapper">
        <header-view />
        <router-view id="container-main" />
        <footer-view />
    </div>
</template>

<script>
import footer from "./components/Footer.vue";
import header from "./components/Header.vue";
export default {
    name: "App",
    components: {
        "header-view": header,
        "footer-view": footer
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
    margin-bottom: 25px;
}

.old-button {
    background-color: coral;
    padding: 10px;
    font-weight: bold;
    border: 1px solid Black;
}

.btn {
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.btn-green {
    background-color: #05c46b;
}

.btn-orange {
    background-color: #ffa801;
}

.btn-abort {
    background-color: #ff3f34;
}

.wrapper {
    padding-bottom: 60px;
    min-height: calc(100vh - 60px);
}

@media screen and (max-width: 670px) {
    #container-main {
        flex-direction: column;
    }

    button {
        padding: 8px 16px;
    }
}
</style>

<template>
    <div id="app" class="container wrapper">
        <v-header />
        <router-view id="container-main" />
        <v-footer />
    </div>
</template>

<script>
import footer from "./presentation/Footer";
import header from "./presentation/HeaderView";
export default {
    name: "App",
    components: {
        "v-header": header,
        "v-footer": footer
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
}

.old-button {
    background-color: coral;
    padding: 10px;
    font-weight: bold;
    border: 1px solid Black;
}

.btn-abort {
    background-color: #ff3f34;
}

.wrapper {
    padding-bottom: 60px;
    min-height: calc(100vh - 60px);
}

@media screen and (max-width: 850px) {
    #container-main {
        flex-direction: column;
    }

    button {
        padding: 8px 16px;
    }
}
</style>

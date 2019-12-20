<template>
  <div id="app" class="container">
    <div id="wrapper">
        <header-view/>
        <router-view id="container-main"/>
    </div>
    <footer-view/>

  </div>
</template>

<script>
import footer from "./components/Footer.vue";
import header from "./components/Header.vue";
export default {
  name: 'App',
  components:
  {
    "header-view" : header,
    "footer-view" : footer
  }
}
</script>

<style>

html, body {
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
    flex:1;
    flex-direction: row;
    width: 100%;
    min-height : calc(85vh - 50px);
}

button {
    background-color: coral;
    padding: 10px;
    font-weight: bold;
    border: 1px solid Black;
}

#wrapper {
    padding-bottom: 50px;
}

@media screen and (max-width: 670px) {
    #container-main {
        flex-direction: column;
    }
}

</style>

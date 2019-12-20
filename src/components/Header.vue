<template>
    <div id="container-header">
        <div id="header-div">
            <h1>JUNKBURNER</h1>
        </div>
    </div>
</template>



<script>
export default {
}
</script>

<style scoped>

    h1 {
        font-size: 80px;
        padding: 0;
        margin: 0;
    }

    #container-header {
        width: 100%;
    }

    #header-div {
        display: flex;
        height: 15vh;
        justify-content: center;
        align-items: center;
        background-color: gainsboro;
    }

    @media screen and (max-width: 770px) {
        h1 {
            font-size: 70px;
        }
    }

    @media screen and (max-width: 670px) {
        h1 {
            font-size: 60px;
        }
    }

    @media screen and (max-width: 560px) {
        h1 {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 450px) {
        h1 {
            font-size: 30px;
        }
    }

</style>
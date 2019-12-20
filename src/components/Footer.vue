<template>
    <div id = "container-footer">
        <div id = "footer-div">
            <p>
                Made by Richard and Edvin
            </p>
        </div>
    </div>
</template>


<script>
export default {

}
</script>

<style scoped>

    #container-footer {
        background-color: gainsboro;
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
    }

    #footer-div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #footer-text{
        margin: 0;
        padding: 0;
    }
</style>
<template>
    <div>
        <div id="container-home">
            <div id="home-container">
                <img src="../images/homeHamburger.png" />
                <p id="home-text">
                    Welcome to Junk Burner! Here you can create fast food meals and figure out how much you need to workout to burn it off! Click on the button below to create a free account.
                </p>
                <button>Sign up!</button>
                <button>Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

    img{
        margin-top : 15px;
        max-width: 15%;
        max-height: 15%;
    }

    button {
        background-color: coral;
        padding: 10px;
        font-weight: bold;
        border: 1px solid Black;

    }
    #container-home{
    text-align: center;
    width : 100%;
    }

    #home-text{
        margin-left: auto;
        margin-right: auto;
        width: 20vw;
        padding: 20px;
    }

    @media screen and (max-width: 800px) {
        #home-text{
            width: 90vw;
            padding: 5px;
        }
    }
</style>
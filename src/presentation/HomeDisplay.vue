<template>
    <div>
        <img src="../images/homeHamburger.png" />
         <p id="home-text">
             {{text}}
        </p>
        <button @click="$emit('showFormSignup')" class="btn btn-orange">
            Sign up!
        </button>
        <button @click="$emit('showFormLogin')" class="btn btn-green">
            Login
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text: "Welcome to Junk Burner! Here you can create fast food meals and figure out how much you need to workout to burn it off! Click on the button below to create a free account."
        }
    }
}
</script>

<style scoped>

    img {
        margin-top: 15px;
        max-width: 15%;
        max-height: 15%;
    }

    .btn {
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 10px 5px;
    }

    .btn:hover {
        cursor: pointer;
    }

    .btn-green {
        background-color: #05c46b;
    }

    .btn-orange {
        background-color: #ffa801;
    }

    #home-text {
        width: 20vw;
        padding: 20px;
        margin: auto;
    }

    @media screen and (max-width: 800px) {
        #home-text {
            width: 80vw;
            padding: 5px;
        }

        .btn {
            padding: 8px 16px;
        }
    }
</style>
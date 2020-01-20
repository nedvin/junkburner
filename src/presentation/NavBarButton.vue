<template>
    <div
        class="nav-bar-button"
        :class="{active : this.isActive, signUp : this.isSignup, login : this.isLogin}"
        @click="$emit('navBtnClicked', text)"
    >
        <p>
            {{text}}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSignup: this.text === "Sign up!",
            isLogin: this.text === "Login"
        }
    },
    props: {
        text : String,
        isActive : Boolean
    },
    computed: {
    }
}
</script>

<style scoped>

/**STYLES */
.active {
    /*border-bottom-style: solid;
    border-bottom-color: orange;
    border-bottom-width: 5px; 
    color: orange !important;*/
    border-bottom: 5px solid #ffa801;
}

.signUp{
    background-color: #ffa801 !important; 
    color: #1e272e !important;
}

.login {
    background-color: #05c46b !important; 
}

.nav-bar-button{
    height: 70px;
    background-color: #1e272e;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    text-align: center;
    padding-top: 30px;
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
    width:70px;
}

/** EVENTS */
.nav-bar-button:hover{
    background-color: #485460;
    cursor: pointer;
}

.nav-bar-button:active{
    font-size: 11px;
    padding-bottom: 3px;
    background-color: #1e272e !important;
    height: 50px;
    color: #fff !important;
    border-style: none !important;
}

/** QUERIES */
@media screen and (max-width: 1020px){
    .nav-bar-button {
        font-size: 12px;
        width:50px;
    }
}

@media screen and (max-width: 850px){
    .nav-bar-button {
        font-size: 12px;
        width:50px;
        height: 37px;
        padding-top: 2px;
    }

    .active {
    border: none;
    color: #ffa801;
}
}


</style>
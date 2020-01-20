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

.active {
    border-bottom-style: solid;
    border-bottom-color: orange;
    border-bottom-width: 5px; 
    color: orange;
}

.signUp{
    background-color: orange !important; 
    color: #1e272e !important;
}

.login {
    background-color: green !important; 
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

.nav-bar-button:hover{
    background-color: #485460;
}

.nav-bar-button:active{
    font-size: 11px;
    padding-bottom: 3px;
    background-color: #1e272e !important;
    height: 50px;
    color: #fff !important;
    border-style: none !important;
}

@media screen and (max-width: 1020px){
    .nav-bar-button {
        font-size: 12px;
        width:50px;
    }
}


</style>
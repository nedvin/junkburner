<template>
    <div
        class="nav-bar-button"
        :class="{active : this.isActive, isSignUp : this.isSignup, isLogin : this.isLogin}"
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
    background-color: #fff !important; 
    color: #1e272e !important;
    border-bottom-style: solid;
    border-bottom-color: orange !important;
    border-bottom-width: 5px; 
}

.nav-bar-button{
    height: 100px;
    background-color: #1e272e;
    color: #fff;
    display: inline-block;
    border-left-style: solid;
    border-right-style: solid;
    border-color: black;
    border-width: 5px;
}

.nav-bar-button:hover{
    background-color: #485460;
}

p {
    text-align: center;
    padding-top: 30px;
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
    font-size: 14px;
    width:70px;
}
@media screen and (max-width: 1020px){
    p {
        font-size: 12px;
        width:50px;
    }
}


</style>
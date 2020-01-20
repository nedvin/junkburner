<template>
    <div>
        <div id="container-home">

            <!-- WRAPPER FOR WELCOME TEXT, IMG AND BUTTONS -->

            <homecontainer />

            <!-- LOGIN FORM -->

            <logincontainer v-if="form.loginVisible"/>

            <!-- SIGN UP FORM -->

            <signupcontainer v-if="form.signupVisible"/>
            
        </div>
    </div>
</template>

<script>
import homecontainer from "@/container/HomeContainer";
import logincontainer from "@/container/LoginContainer";
import signupcontainer from "@/container/SignUpContainer";

export default {
    components: {
        homecontainer: homecontainer,
        logincontainer: logincontainer,
        signupcontainer: signupcontainer
    },
    data() {
        return {
            form: {
                loginVisible: false,
                signupVisible: false,
                message: 'Please do not use your real e-mail and password. Just use some fake adress.'
            },
            userData: {
                email: "",
                password: "",
                age: 0,
                weight: 0,
                length: 0,
                gender: "Male"
            }
        };
    },
    methods: {
        showForm(form) {
            if (form === "login") {
                this.form.loginVisible = true;
                (this.form.title = "Login"), (this.form.button = "Login");
            } else if (form === "signup") {
                this.form.signupVisible = true;
                (this.form.title = "Sign up"), (this.form.button = "Sign up");
            }
        },

        close() {
            this.form.loginVisible = false;
            this.form.signupVisible = false;
        }
    }
};
</script>

<style scoped>
/****** GENERAL ******/
.btn {
    margin: 10px 5px;
}

/******  WRAPPER *****/
img {
    margin-top: 15px;
    max-width: 15%;
    max-height: 15%;
}

#container-home {
    text-align: center;
    width: 100%;
    margin-top: 30px;
}

#home-text {
    margin-left: auto;
    margin-right: auto;
    width: 20vw;
    padding: 20px;
}

/******* MEDIA QUERIES *******/

@media screen and (max-width: 800px) {
    #home-text {
        width: 90vw;
        padding: 5px;
    }

    .btn {
        padding: 8px 16px;
    }
}
</style>

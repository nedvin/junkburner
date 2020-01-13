<template>
    <div>
        <div id="container-home">
            <div id="home-container">
                <img src="../images/homeHamburger.png" />
                <p id="home-text">
                    Welcome to Junk Burner! Here you can create fast food meals
                    and figure out how much you need to workout to burn it off!
                    Click on the button below to create a free account.
                </p>
                <button @click="showForm('signup')" class="btn btn-orange">
                    Sign up!
                </button>
                <button @click="showForm('login')" class="btn btn-green">
                    Login
                </button>
            </div>
            <div v-if="form.visible" class="login-form">
                <h1>{{ form.title }}</h1>
                <div id="message">
                    Please do not use your real e-mail and password. Just use
                    some fake adress.
                </div>
                <div>
                    <label for="email"><b>E-mail:</b></label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        v-model="email"
                    />
                </div>
                <div>
                    <label for="psw"><b>Password:</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        v-model="password"
                    />
                </div>

                <button type="submit" class="btn btn-green" @click="formAction">
                    {{ form.button }}
                </button>
                <button @click="close" class="btn btn-abort">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    data() {
        return {
            form: {
                visible: false,
                title: "",
                button: ""
            },
            email: "",
            password: ""
        };
    },
    methods: {
        showForm(form) {
            this.form.visible = true;
            if (form === "login") {
                (this.form.title = "Login"), (this.form.button = "Login");
            } else if (form === "signup") {
                (this.form.title = "Sign up"), (this.form.button = "Sign up");
            }
        },

        formAction() {
            if (this.form.title === "Login") {
                this.login();
            } else {
                this.signup();
            }
        },

        close() {
            this.form.visible = false;
        },

        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.close();
                    this.$router.replace("/search");
                })
                .catch(err => {
                    alert(err.message);
                });
        },

        signup() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.close();
                })
                .catch(err => {
                    alert(err.message);
                });
        }
    }
};
</script>

<style scoped>
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

.login-form {
    background-color: #f5f5f5;
    position: absolute;
    left: 50%;
    top: 50%;
    min-height: 400px;
    width: 60%;
    transform: translate(-50%, -50%);
    padding-left: 20px;
    padding-right: 20px;
}

.login-form div {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.login-form label {
    margin-right: 10px;
}

.btn {
    margin-left: 5px;
    margin-right: 5px;
}

#message {
    font-size: 0.7em;
    color: red;
}

@media screen and (max-width: 800px) {
    #home-text {
        width: 90vw;
        padding: 5px;
    }
}
</style>

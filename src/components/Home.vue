<template>
    <div>
        <div id="container-home">

            <!-- WRAPPER FOR WELCOME TEXT, IMG AND BUTTONS -->
            <div>
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

            <!-- LOGIN FORM -->
            <div v-if="form.loginVisible" class="login-form">
                <h1>Login</h1>
                <div id="message">
                    {{ form.message }}
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

                <button @click="close" class="btn btn-abort">Close</button>
                <button type="submit" class="btn btn-green" @click="formAction('login')">Login</button>
            </div>

            <!-- SIGN UP FORM -->
            <div v-if="form.signupVisible" class="login-form">
                <h1>Sign up!</h1>
                <div id="message">
                    {{ form.message }}
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
                <div>
                    <label for="age"><b>Age:</b></label>
                    <input
                        type="number"
                        placeholder="Your age"
                        name="age"
                        v-model="age"
                    />
                </div>
                <div>
                    <label for="weight"><b>Weight:</b></label>
                    <input
                        type="number"
                        placeholder="Your weight in kilograms"
                        name="weight"
                        v-model="weight"
                    />
                </div>
                <div>
                    <label for="length"><b>Length:</b></label>
                    <input
                        type="number"
                        placeholder="Your length in centimeters"
                        name="length"
                        v-model="length"
                    />
                </div>
                <div>
                    <label for="gender"><b>Gender:</b></label>
                    <select name="gender" v-model="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <button @click="close" class="btn btn-abort">Close</button>
                <button type="submit" class="btn btn-green" @click="formAction('signup')">Sign up</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import { db } from '@/main';

export default {
    data() {
        return {
            form: {
                loginVisible: false,
                signupVisible: false,
                message: 'Please do not use your real e-mail and password. Just use some fake adress.'
            },
            email: "",
            password: "",
            age: 1,
            weight: 70,
            length: 170,
            gender: "Male"

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

        formAction(form) {
            if (form === "login") {
                this.login();
            } else {
                this.signup();
            }
        },

        close() {
            this.form.loginVisible = false;
            this.form.signupVisible = false;
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
                .createUserWithEmailAndPassword(this.email, this.password).then(cred => {
                    return db.collection('users').doc(cred.user.uid).set({
                        age: this.age,
                        weight: this.weight,
                        length: this.length,
                        gender: this.gender
                    })
                })
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

/****** FORMS ******/
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

#message {
    font-size: 0.9em;
    color: red;
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

<template>
    <div>
        <div id="container-home">
            <div id="home-container">
                <img src="../images/homeHamburger.png" />
                <p id="home-text">
                    Welcome to Junk Burner! Here you can create fast food meals and figure out how much you need to workout to burn it off! Click on the button below to create a free account.
                </p>
                <button @click="showForm('signup')">Sign up!</button>
                <button @click="showForm('login')">Login</button>
            </div>
            <div v-if="form.visible" class="login-form">
                <h1>{{ form.title }}</h1>
                <div>
                    <label for="email"><b>E-mail:</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>
                </div>
                <div>
                    <label for="psw"><b>Password:</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                </div>

                <button type="submit" class="btn">{{ form.button }}</button>
                <button @click="close">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                visible: false,
                title: '',
                button: ''
            }
        }
    },
    methods: {
        showForm(form) {
            this.form.visible = true;
            if(form === 'login') {
                this.form.title = 'Login',
                this.form.button = 'Login'
           }
           else if(form === 'signup') {
               this.form.title = 'Sign up',
               this.form.button = 'Sign up'
           }
        },

        close(form) {
           this.form.visible = false;
        }
    }
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

    .login-form {
        background-color: #f5f5f5;
        position: absolute;
        left: 50%;
        top: 50%;
        min-height: 300px;
        width: 250px;
        transform: translate(-50%, -50%);
        padding-left: 20px;
        padding-right: 20px;
    }

    .login-form div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 800px) {
        #home-text{
            width: 90vw;
            padding: 5px;
        }
    }
</style>
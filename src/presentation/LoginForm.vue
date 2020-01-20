<template>
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
                v-model="userData.email"
            />
        </div>
        <div>
            <label for="psw"><b>Password:</b></label>
            <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                v-model="userData.password"
            />
        </div>

        <button @click="close" class="btn btn-abort">Close</button>
        <button type="submit" class="btn btn-green" @click="login">Login</button>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>

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

</style>
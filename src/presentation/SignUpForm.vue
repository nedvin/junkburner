<template>
    <div class="login-form">
        <h1>
            Sign up!
        </h1>
        <form>
            <div id="message">
                {{ message }}
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
        </form>
        <form>
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
        </form>
        <button @click="$emit('closeForm')" class="btn btn-abort">Close</button>
        <button type="submit" class="btn btn-green" @click="$emit('signUp', {
            'email' : email,
            'password': password,
            'age' : age,
            'weight' : weight,
            'length' : length,
            'gender' : gender
            })">Sign up</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: "Please do not use your real e-mail or password, we have no control over what firebase does with them.",
            email: "",
            password: "",
            age: 0,
            weight: 0,
            length: 0,
            gender: "Male"
        }
    }
    
}
</script>

<style scoped src="@/constants/FormStyle.css" />

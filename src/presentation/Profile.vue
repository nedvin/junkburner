<template>
    <div class="login-form">
        <h1>
            Update user profile
        </h1>
        <form>
            <div>
                <label for="age"><b>Age:</b></label>
                <input
                    type="number"
                    :placeholder="user.age"
                    name="age"
                    v-model="age"
                />
            </div>
            <div>
                <label for="weight"><b>Weight:</b></label>
                <input
                    type="number"
                    :placeholder="user.weight"
                    name="weight"
                    v-model="weight"
                />
            </div>
            <div>
                <label for="length"><b>Length:</b></label>
                <input
                    type="number"
                    :placeholder="user.length"
                    name="length"
                    v-model="length"
                />
            </div>
            <div>
                <label for="gender"><b>Gender:</b></label>
                <select name="gender" v-model="gender" :value="user.gender">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
        </form>
        <button 
            @click="$emit('closeForm')" 
            class="btn btn-abort"
        >
            Close
        </button>
        <button 
            type="submit" 
            class="btn btn-green" 
            @click="$emit('updateProfile', {
                'age' : age,
                'weight' : weight,
                'length' : length,
                'gender' : gender
                }
            )"
        >
            Update profile
        </button>
        
        <button
            @click="$emit('signOutUser')" 
            class="btn btn-abort"
        >
            Sign out
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            age: 0,
            weight: 0,
            length: 0,
            gender: "Male"
        }
    },
    props: {
        user: Object
    }
}
</script>

<style scoped src="@/constants/FormStyle.css" />
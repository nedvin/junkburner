<template>
    <div id="toolbar">
        <div class="settings-wrapper">
            <div v-if="settingsVisible" class="settings">
                <div class="input-row">
                    <label for="age">Age:</label>
                    <input
                        type="number"
                        placeholder="Your age"
                        name="age"
                        v-model="fakePerson.age"
                        class="input"
                    />
                </div>
                <div class="input-row">
                    <label for="weight">Weight:</label>
                    <input
                        type="number"
                        placeholder="Your weight in kilograms"
                        name="weight"
                        v-model="fakePerson.weight"
                        class="input"
                    />
                </div>
                <div class="input-row">
                    <label for="length">Length:</label>
                    <input
                        type="number"
                        placeholder="Your length in centimeters"
                        name="length"
                        v-model="fakePerson.length"
                        class="input"
                    />
                </div>
                <div class="input-row">
                    <label for="gender">Gender:</label>
                    <select name="gender" v-model="fakePerson.gender" class="input">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="center">
                    <button type="submit" class="btn btn-green">Spara</button>
                </div>
        </div>
            <div class="settings-controls">
                <button class="btn btn-toolbar" @click="showSettings">Create meal</button>
                <button class="btn btn-toolbar" @click="showSettings">Training</button>
                <button class="btn btn-toolbar" @click="showSettings">Settings</button>
                <button @click="signout" class="btn btn-toolbar">Sign out</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "Toolbar",
    data() {
        return {
            settingsVisible: false,
            fakePerson: {
                email: "test@mail.com",
                age: 31,
                weight: 100,
                length: 177,
                gender: "Male"
            }
        };
    },
    methods: {
        showSettings() {
            if(this.settingsVisible === true) {
                this.settingsVisible = false;
            }
            else {
                this.settingsVisible = true;
            }
        },
        signout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace("/");
                });
        }
    }
};
</script>

<style scoped>
#toolbar {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
}

.settings-controls {
    float: right;
}

.settings {
    float: left;
    display: flex;
    justify-content: space-around;
    width: 60%;
    padding-bottom: 5px;
}

.input-row {
    width: 200px;
    justify-content: space-between;
}

.btn-toolbar {
    background-color: #1e272e;
    color: #fff;
    padding: 5px 10px;
}

.btn-toolbar:hover {
    background-color: #485460;
}

label {
    color: #fff;
    font-size: 0.8em;
    display: block;
}

.btn-green {
    padding: 5px 10px;
    font-size: 0.8em;
    border-radius: 50px;
    width: 60px;
}

.center {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 1045px) {
    .settings {
            flex-direction: column;
            width: 200px;
    }

    .input {
        float: right;
    }

    label {
        float: left;
    }

    .input-row {
        margin-top: 5px;
    }

    .btn-green {
        margin: 4px 0px;
    }
}

@media screen and (max-width: 850px) {
    #toolbar {
        width: 100%;
    }

    .btn-toolbar {
        margin-right: 8px;

    }
}
</style>

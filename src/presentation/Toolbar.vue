<template>
    <div id="toolbar">
        <div class="settings-wrapper">
         
            <!-- WRAPPER FOR DISPLAYING AND SETTING USER DATA -->
            <div v-if="settingsVisible" class="settings">
                <div class="input-row">
                    <label for="age">Age:</label>
                    <input
                        type="number"
                        name="age"
                        :value="age"
                        class="input"
                        id="age-field"
                    />
                </div>
                <div class="input-row">
                    <label for="weight">Weight:</label>
                    <input
                        type="number"
                        name="weight"
                        :value="weight"
                        class="input"
                        id="weight-field"
                    />
                </div>
                <div class="input-row">
                    <label for="length">Length:</label>
                    <input
                        type="number"
                        name="length"
                        :value="length"
                        class="input"
                        id="length-field"
                    />
                </div>
                <div class="input-row">
                    <label for="gender">Gender:</label>
                    <select
                        name="gender"
                        :value="gender"
                        class="input"
                        id="gender-field"
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="center">
                    <button class="btn btn-green" @click="updateUserSettings">Spara</button>
                </div>
            </div>

            <!-- WRAPPER FOR NAVIGATION BUTTONS -->
            <div class="settings-controls">
                <button class="btn btn-toolbar" @click="showSettings">
                    Create meal
                </button>
                <button class="btn btn-toolbar" @click="showSettings">
                    Training
                </button>
                <button class="btn btn-toolbar" @click="showSettings">
                    Settings
                </button>
                <button @click="signout" class="btn btn-toolbar">
                    Sign out
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapActions } from 'vuex';
import { db } from '@/main'

export default {
    name: "Toolbar",
    data() {
        return {
            settingsVisible: false,
        };
    },
    methods: {
        showSettings() {
            if (this.settingsVisible === true) {
                this.settingsVisible = false;
            } else {
                this.settingsVisible = true;
            }
        }
    },
    props : ["",""]

};
</script>

<style scoped>
/******* "GENERAL" *******/

#toolbar {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
}

.center {
    display: flex;
    justify-content: center;
}

/****** NAV COMPONENTS ******/

.btn-toolbar {
    background-color: #1e272e;
    color: #fff;
    padding: 5px 10px;
}

.btn-toolbar:hover {
    background-color: #485460;
}

/****** SETTINGS FORM ******/
.settings {
    float: left;
    display: flex;
    justify-content: space-around;
    width: 60%;
    padding-bottom: 5px;
}

.settings-controls {
    float: right;
}

.input-row {
    width: 200px;
    justify-content: space-between;
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

/******* MEDIA QUERIES ********/
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

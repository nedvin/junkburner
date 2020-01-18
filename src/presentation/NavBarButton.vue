<template>
    <div
        class="nav-bar-button"
        :class="{active : isActive}"
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
        }
    },
    props: ["text", "isActive"],
}
</script>

<style scoped>

.nav-bar-button{
    height:100%;
    float: right;
    background-color: #1e272e;
    color: #fff;

}

.nav-bar-button:hover{
    background-color: #485460;

}


</style>
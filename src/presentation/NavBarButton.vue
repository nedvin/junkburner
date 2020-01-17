<template>
    <div
        class="nav-bar-button"
        :class="{active : isActive, hover : isHovered}"
        @mouseenter="this.setHover"
        @mouseleave="this.removeHover"
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
    methods: {
        setHover : () => {data.isHovered = true;},
        removeHover : () => {data.isHovered = false;}
    },
    computed : {
         isHovered : false
    }
}
</script>

<style scoped>

.nav-bar-button{
    height:100%
}



</style>
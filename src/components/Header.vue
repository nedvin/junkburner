<template>
    <div id="container-header">
        <div class="header">
            <img :src="logo">
            <h1>JUNKFOOD BURNER</h1>
        </div>
        <toolbar/>
    </div>
</template>



<script>
import Toolbar from '@/components/Toolbar'

export default {
    name: 'Header',
    components: {
        'toolbar': Toolbar
    },
    data() {
        return {
            logo: require('@/images/logo.png')
        }
    }
}
</script>

<style scoped>
    .header img {
        max-width: 80px;
        height: auto;
        float: left;
        margin-top: 20px;
        margin-left: 30px;
    }

    .header h1 {
        display: inline-block;
        letter-spacing: 2px;
        word-spacing: 4px;
        color: #fff;
        font-size: 200%;
        margin-top: 40px;
        margin-left: 15px;
    }

    #container-header {
        width: 100%;
        background-color: #1e272e;
        display: flex;
        flex-direction: column;
    }

    #header-div {
        display: flex;
        height: 15vh;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 670px) {
        .header h1 {
            font-size: 1.1em;
            margin-top: 50px;
        }
    }

    @media screen and (max-width: 420px) {
        .header h1 {
            display: none;
        }
    }

</style>
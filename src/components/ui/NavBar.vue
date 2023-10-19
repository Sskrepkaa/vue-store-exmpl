<template>
    <div class="navbar">
        <h3 @click="$router.push('/')">MyStore</h3>
        <div class="nav_btns">
            <button>Sing in</button>
            <button style="margin-left: 15px;">Sing up</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0 2rem;
        background-color: rgb(191, 248, 248);
    }
    .nav_btns {
        margin-left: 10px;
    }
</style>
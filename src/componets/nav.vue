<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__logo"><img src="../assets/lift-logo.svg" alt=""></div>
            <div class="nav__phone"></div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>

<style scoped lang="scss">
.nav{
    position: absolute;
    top: 0;
    &__logo{
        max-width: 180px;
    }
}
</style>
<template>
    <nav class="nav">
        <div class="container">
            <div class="logo"><img src="../assets/lift-logo.svg" alt=""></div>
            <div class="nav__phone">
                    <a href="tel:+77172576300" class="phone-num"><i class="fa fa-phone"></i>576-300</a>
                    <span class="phone-text">заказать рекламу</span>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'nav'
    }
</script>

<style scoped lang="scss">
.nav{
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 10;
    .container{
        position: relative;
    }
    .logo{
        max-width: 217px;
        margin-top: 14px;
    }
    &__phone{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        width: 100%;
        max-width: 177px;
        padding: 4px 5px;
        border-radius: 0 0 16px 16px;
        text-align: center;
        color: #000;
    }
    .phone-num{
        color: #1e9c3c;
        font-size: 27px;
        line-height: 1;
        font-weight: bold;
        display: block;
    }
    .phone-text{
        color: #000;
        font-size: 16px;
        border-bottom: 2px solid ;
    }
}
</style>
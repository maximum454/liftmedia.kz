<template>
    <section class="tariff">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h2 class="text-dark bg-light"><span class="text-norm">Тарифы</span></h2>
                    <div class="arrow"></div>
                </div>
                <div class="col-lg-8">
                    <img src="../assets/table-tariff.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "tariff"
    }
</script>

<style scoped lang="scss">
    .tariff {
        background-image: url("../assets/tariff.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        padding: 37px 0;

        .arrow {
            position: absolute;
            bottom: 0;
            left: 0;
            background-image: url("../assets/arrow-white.png");
            width: 52px;
            height: 216px;
        }
    }
</style>